/** @jsxImportSource react */
import { useState, useCallback, useRef } from "react";
import { ALGOLIA } from "../../config";
import "@docsearch/css";
import "./Search.css";

import { createPortal } from "react-dom";
import * as docSearchReact from "@docsearch/react";

/** FIXME: This is still kinda nasty, but DocSearch is not ESM ready. */
const DocSearchModal = docSearchReact.DocSearchModal || (docSearchReact as any).default.DocSearchModal;
const useDocSearchKeyboardEvents = docSearchReact.useDocSearchKeyboardEvents || (docSearchReact as any).default.useDocSearchKeyboardEvents;

export default function Search() {
  const [isOpen, setIsOpen] = useState(false);
  const searchButtonRef = useRef<HTMLButtonElement>(null);
  const [initialQuery, setInitialQuery] = useState("");

  const onOpen = useCallback(() => {
    setIsOpen(true);
  }, [setIsOpen]);

  const onClose = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  const onInput = useCallback(
    (e: any) => {
      setIsOpen(true);
      setInitialQuery(e.key);
    },
    [setIsOpen, setInitialQuery]
  );

  useDocSearchKeyboardEvents({
    isOpen,
    onOpen,
    onClose,
    onInput,
    searchButtonRef,
  });

  return (
    <>
      <button type="button" ref={searchButtonRef} onClick={onOpen} className="search-input ">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 11.3516C3 16.5078 7.19531 20.7031 12.3516 20.7031C14.3906 20.7031 16.2539 20.0469 17.7891 18.9453L23.5547 24.7227C23.8242 24.9922 24.1758 25.1211 24.5508 25.1211C25.3477 25.1211 25.8984 24.5234 25.8984 23.7383C25.8984 23.3633 25.7578 23.0234 25.5117 22.7773L19.7812 17.0117C20.9883 15.4414 21.7031 13.4844 21.7031 11.3516C21.7031 6.19531 17.5078 2 12.3516 2C7.19531 2 3 6.19531 3 11.3516ZM5.00391 11.3516C5.00391 7.29688 8.29688 4.00391 12.3516 4.00391C16.4062 4.00391 19.6992 7.29688 19.6992 11.3516C19.6992 15.4062 16.4062 18.6992 12.3516 18.6992C8.29688 18.6992 5.00391 15.4062 5.00391 11.3516Z" fill="currentColor" />
        </svg>
        <span>Search</span>

        <span className="search-hint !hidden">
          <span className="sr-only">Press </span>

          <kbd>/</kbd>

          <span className="sr-only"> to search</span>
        </span>
      </button>
      {isOpen &&
        createPortal(
          <DocSearchModal
            initialQuery={initialQuery}
            initialScrollY={window.scrollY}
            onClose={onClose}
            indexName={ALGOLIA.indexName}
            appId={ALGOLIA.appId}
            apiKey={ALGOLIA.apiKey}
            transformItems={(items) => {
              return items.map((item) => {
                // We transform the absolute URL into a relative URL to
                // work better on localhost, preview URLS.
                const a = document.createElement("a");
                a.href = item.url;
                const hash = a.hash === "#overview" ? "" : a.hash;
                return {
                  ...item,
                  url: `${a.pathname}${hash}`,
                };
              });
            }}
          />,
          document.body
        )}
    </>
  );
}
