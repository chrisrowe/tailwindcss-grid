# CSS Grid Tailwind Plugin

Isolated from [https://github.com/tailwindcss/plugin-examples](https://github.com/tailwindcss/plugin-examples)

[View demo](https://tailwindcss.github.io/plugin-examples/#css-grid) &middot; [View source](https://github.com/tailwindcss/plugin-examples/blob/master/plugins/css-grid/index.js)

In `plugins/css-grid/index.js` you'll find an example of a plugin that adds new utilities for using [CSS Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout).

![](https://user-images.githubusercontent.com/4323180/37525015-fb5c78f2-2901-11e8-97be-18c66d12bf84.png)

It exposes four configuration options:

- `grids`, for specifying all of the grid sizes you'd like to generate
- `colwidth` for applying min width for the auto-grid
- `gaps`, for specifying the gap sizes you'd like to generate
- `variants`, for specifying which variants to generate

```js
module.exports = {
  // ...

  plugins: [
    // ...
    require('tailwindcss-grid')({
      grids: [2, 3, 5, 6, 8, 10, 12],
      colwidth: [5, 10, 15, 20], // in REM
      gaps: {
        0: '0',
        4: '1rem',
        8: '2rem',
      },
      variants: ['responsive'],
    }),
  ],
}
```

With zero configuration, it will generate grids from 1 to 12 columns in size, no gap sizes, and `responsive` variants for each new utility.

The plugin generates the following sets of classes:

- `.grid`, for setting `display: grid` on an element
- `.grid-columns-{size}`, for specifying the number of columns in the grid
- `.auto-grid-{size}`, for specifying the minimum width of the columns generated with auto-grid
- `.grid-gap-{size}`, for specifying the size of the gap between columns/rows
- `.col-span-{columns}`, for specifying how wide a cell should be
- `.col-start-{line}` and `.col-end-{line}`, for specifying a cell's start and end points explicitly (useful for reordering cells or leaving gaps)
- `.row-span-{columns}`, for specifying how tall a cell should be
- `.row-start-{line}` and `.row-end-{line}`, for specifying a cell's start and end points explicitly (useful for reordering cells or leaving gaps)

It's not really practical to expose all of the power of CSS Grid through utilities, but this plugin is a good example of using CSS Grid to replace a cell-only float or Flexbox grid.