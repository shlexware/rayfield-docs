---
title: Loading the Rayfield Library
description: Booting the Rayfield Library
layout: ../layouts/MainLayout.astro
---

## Booting the Library

```lua
local Rayfield = loadstring(game:HttpGet('https://raw.githubusercontent.com/shlexware/Rayfield/main/source'))()
```

### Secure Mode

If the game you're trying to run Rayfield Interface Suite on, is detecting or crashing when you use Rayfield Interface Suite, try using Secure Mode:

- Place `getgenv().SecureMode = true` above the initial Rayfield loadstring

Rayfield will now use Secure Mode and attempt to reduce detection

- Note: This may cause some elements of the UI to look lower quality or may increase loading times slightly

### Enabling Configuration Saving

- Enable ConfigurationSaving in the CreateWindow function
- Choose an appropiate FileName in the CreateWindow function
- Choose an unique flag identifier for each supported element you create
- Place `Rayfield:LoadConfiguration()` at the bottom of all your code

Rayfield will now automatically save and load your configuration
