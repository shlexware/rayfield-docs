---
title: Textual elements in Rayfield
description: Creating textual elements in Rayfield
layout: ../layouts/MainLayout.astro
---

## Creating a Label

```lua
local Label = Tab:CreateLabel("Label Example")
```

### Updating a Label

```lua
Label:Set("Label Example")
```

## Creating a Paragraph

```lua
local Paragraph = Tab:CreateParagraph({Title = "Paragraph Example", Content = "Paragraph Example"})
```

### Updating a Paragraph

```lua
Paragraph:Set({Title = "Paragraph Example", Content = "Paragraph Example"})
```
