# Context: Henrik Vasmer Campaign Project

## The World & Lore
* **Setting:** Caprica (a fictional political world).
* **Location:** Alto, a port town in southern Cambria.
* **Candidate:** Henrik Vasmer (born 4 March 2018).
* **Background:** From a family of fishermen; rejected the trade for academia (BA in Politics/Philosophy/Economics, Master's in Political Psychology, PhD in Rhetoric and Persuasion Culture). Served on Alto's local council.
* **Political Alignment:** Independent, but ideologically aligned with the Social Democratic Alliance (SDA). Dedicated voice for Cambria's coastal and working communities. 
* **Key Connections:** Family friend of the von Reichel family (Kostas Pastry, Aldric von Reichel).

## Design Philosophy: "The Duality Principle"
* **Resting State (Stark B&W):** Represents his composed, highly intellectual academic side. Used in the Intro and Events sections (White backgrounds, black text).
* **Combat State (Neon Interactions):** Represents his sharp, high-impact persuasive firepower and working-class advocacy. Used in the Platform section (Pitch black background, neon hovers) and interactive elements.
* **Aesthetics:** Neobrutalism. Hard cuts, thick borders (2px solid #000), hard offset shadows (6px 6px 0px), no border-radius. High contrast. 
* **Typography:** Monument Extended (Headings), Inter/Space Grotesk (Body).
* **Colors:** White, Black, Crimson Red, Neon Cyan, Electric Yellow, Hot Pink/Magenta.

## Technical Architecture
* **Stack:** Vanilla HTML, CSS, JavaScript.
* **Theming:** CSS Variables with a semantic setup (`--bg-primary`, `--text-primary`) supporting a `[data-theme="dark"]` override.
* **Internationalization (i18n):** Custom Vanilla JS system laid in `index.js` utilizing `data-i18n` attributes for dynamic language switching.
* **UI Simulation:** The "Join the Fight" email form is purely visual frontend JS. It intercepts clicks, simulates a 1.5s "TRANSMITTING..." network request, and snaps to a neon success state to look perfectly functional without a backend.
* **Link Previews & Media:** 
  * `favicon.svg` dynamically embeds the actual `MonumentExtended-Ultrabold` font file inside its SVG code using Base64 so it renders perfectly on all devices.
  * `og-image.png` is generated via a custom 16:9 SVG (`og-image.svg`) that is perfectly rasterized using Headless Google Chrome to ensure the custom fonts load perfectly for social media scrapers (Twitter, Discord, iMessage). Meta tags must always use the absolute GitHub Pages URL.

Spoken languages in Cambria are

1. Alanian = English
2. Alcamerian = Spanish
3. Gallic = French
