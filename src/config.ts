export const SITE = {
  title: "Rayfield Documentation",
  description: "The Rayfield Interface Suite Documentation",
  defaultLanguage: "en_US",
};

export const OPEN_GRAPH = {
  image: {
    src: "https://rayfield.dev/default-og-image.png",
    alt: "Sirius Rayfield logo in front of a beautiful picture of a lake in snowy mountains.",
  },
  twitter: "@sirius.software",
};

// This is the type of the frontmatter you put in the docs markdown files.
export type Frontmatter = {
  title: string;
  description: string;
  layout: string;
  image?: { src: string; alt: string };
  dir?: "ltr" | "rtl";
  ogLocale?: string;
  lang?: string;
};

export const KNOWN_LANGUAGES = {
  English: "en",
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const COMMUNITY_INVITE_URL = `https://discord.gg/sirius`;

export const GITHUB_EDIT_URL = `https://github.com/SiriusDevelopmentGroup/rayfield-docs/tree/master`;

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
  indexName: "rayfield",
  appId: "Y1DPKMTCPW",
  apiKey: "23dce9cc88cb86b13abd821958b35469",
};

export type Sidebar = Record<(typeof KNOWN_LANGUAGE_CODES)[number], Record<string, { text: string; link: string }[]>>;
export const SIDEBAR: Sidebar = {
  en: {
    Configuration: [
      { text: "Introduction", link: "en/introduction" },
      { text: "Booting the Library", link: "en/booting-library" },
      { text: "Windows", link: "en/windows" },
    ],
    Interaction: [
      { text: "Elements", link: "en/interactive-elements" },
      { text: "Binds", link: "en/keybinds" },
    ],

    "UI Components": [{ text: "Textual Elements", link: "en/text" }],
  },
};
