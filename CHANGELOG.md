# bespoke-theme-beachday changelog

## 2.0.0

- Changes to slide layouts
  - Removed `layout-regular` and made any `.bespoke-slide` look like it
  - Created `layout-centered-vertical` (vertically centered) and `layout-centered-horizontal` (horizontally)
  - Changed `layout-2-column-content` and `layout-tall-figure-{left,right}` to use grid (instead of flex)
  - Created `layout-3-column-content` and `layout-4-column-content` based on `2-content`
  - Added a `.span-columns` for specific elements on `layout-x-column-content` for elements spanning all columns
  - `layout-2-column-highlight-and-list` renamed to `layout-2-column-highlight-and-content`
  - Changed `layout-circling-balloons` to require a paragraph inside each `<li>` to contain the `<img>`s
- General
  - Dark mode support
  - Support for less motion
  - Print stylesheet working
  - Renders 3 previous/next slides instead of 2
  - Styles tables much better now
  - Added more width modifiers to definition lists (`width-10`, `width-20`, `width-30`, besides `width-40` and `width-50`)
  - Changed `horiziontal-list` to use flex instead of inline (and renamed `horizontal-list-flex` to it)
  - Upgraded normalize.css from 3.0.0 to 8.0.1
  - Adds the style tag at the end of the head (instead of on its top)
  - Generates compiled CSS files in the `dist/theme` folder for those who prefer not to include the js file
- Plugins
  - Adds support for `show-active-slide-and-previous` bespoke-state
  - Adds support for [bespoke-backdrop][bespoke-backdrop]
  - Adds support for [bespoke-search][bespoke-search]

[bespoke-backdrop]: https://www.npmjs.com/package/bespoke-backdrop
[bespoke-search]: https://www.npmjs.com/package/bespoke-search

## 1.1.0

- New slide layouts:
  - `layout-2-column-highlight-and-list`
  - `layout-3-column-element-with-titles-expansible`
  - `layout-circling-balloons`
  - `layout-tall-figure-left`, `layout-tall-figure-right`
- Changes on utility classes
  - `.portrait`: uses a circular shape for text to flow as a circle
- New utility classes
  - `.contain`, `.half-width`, `.three-quarter-width`, `.centered` (for images)
  - `.center-aligned`, `.emoji`, `.on-line`, `.no-margin`
  - `.bouncing-left`

## 1.0.0

- initial release
