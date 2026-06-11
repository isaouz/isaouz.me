# isaouz.me — Project Notes

## What is this?
A personal website and digital garden. A homepage with a masonry grid of tiles, each linking to a different topic or page.

## Design
- Style: Clean & minimal
- Layout: Dynamic masonry grid with weighted random tile sizes
- Background: Custom icon pattern (assets/tile_only.png)
- Cards: Background image/photo per tile, title shown on hover
- No navigation bar -- homepage tiles are the navigation
- Color palette defined as CSS variables in style.css

## Color palette
- --color-bg: #f5f2ed
- --color-pattern: #e0dbd3
- --color-text-primary: #000000
- --color-text-secondary: #555555
- --color-text-muted: #888888

## Tech stack
- HTML5
- CSS3 with CSS Grid
- Bootstrap 5 (spacing and layout utilities)
- Vanilla JavaScript (tile generation, shuffle)
- Hosted on GitHub Pages
- Future Domains: isaouz.me and isaouz.com

## File structure
- index.html -- homepage
- style.css -- all custom styles
- tiles.js -- tile data and grid logic
- assets/ -- images and background pattern
- [topic].html -- individual topic pages

## Pages
- / (homepage with masonry grid)
- /netherlands
- /netherlands-2
- /netherlands-3
- /south-korea
- /south-korea-2
- /south-korea-3
- /cycling
- /cycling-2
- /cycling-3
- /bass-guitar
- /bass-guitar-2
- /bass-guitar-3

## Decisions made
- No blog format -- digital garden approach instead
- Tiles grow over time, nothing needs to be "finished"
- JS-driven tile system -- add new content by adding one line to tiles array in tiles.js
- Weighted random sizes so layout feels organic without gaps
- CSS Grid with grid-auto-flow: dense for automatic placement
- Kebab-case for all filenames and URLs

## Current status
- [x] Git initialized
- [x] GitHub repository created
- [x] Homepage built with CSS Grid masonry layout
- [x] Dynamic JS tile system with shuffle button
- [x] 12 placeholder pages created
- [x] Hover effects on tiles
- [x] Custom background pattern
- [x] Color palette defined
- [x] Hero section with photo and bilingual intro
- [x] Deployed to GitHub Pages
- [x] Mobile responsive layout
- [ ] Domain connected
- [ ] Replace placeholder images with real photos
- [ ] Write real intro text
- [ ] Fill in first real content page
- [ ] Eventually organize pages into folders (sports/, travel/, music/)

## Future ideas
- A "now" page showing what you're currently up to
- A random quote or shower thoughts tile
- Import Medium articles as content pages
- Weighted randomization already implemented -- adjust sizes array in tiles.js
- Consider adding more breakpoints if needed for tablet sizes