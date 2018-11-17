# CSS Grid Tailwind Plugin

## Configuration options:

- `grids`, for specifying all of the grid sizes you'd like to generate
- `gaps`, for specifying the gap sizes you'd like to generate
- `autoMinWidths` for specifying min width to columns using auto-fit and minmax
- `variants`, for specifying which variants to generate

```js
module.exports = {
  // ...

  plugins: [
    // ...
    require('tailwindcss-grid')({
      grids: [2, 3, 5, 6, 8, 10, 12],
      gaps: {
        0: '0',
        4: '1rem',
        8: '2rem',
      },
      autoMinWidths: {
        '16': '4rem',
        '24': '6rem',
        '300px': '300px'
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
- `.col-span-{columns}`, for specifying how wide a cell should be
- `.grid-gap-{size}`, for specifying the size of the gap between columns/rows
- `.grid-automin-{size}`, for applying the minimum width of the columns using auto-fit and minmax (the max is 1fr)
- `.col-start-{line}` and `.col-end-{line}`, for specifying a cell's start and end points explicitly (useful for reordering cells or leaving gaps)
- `.row-span-{columns}`, for specifying how tall a cell should be
- `.row-start-{line}` and `.row-end-{line}`, for specifying a cell's start and end points explicitly (useful for reordering cells or leaving gaps)
- `.grid-dense` applies `grid-auto-flow: dense`

It's not really practical to expose all of the power of CSS Grid through utilities, but this plugin is a good example of using CSS Grid to replace a cell-only float or Flexbox grid.

---

This was originally isolated from [https://github.com/tailwindcss/plugin-examples](https://github.com/tailwindcss/plugin-examples) to publish to npm

[View demo](https://tailwindcss.github.io/plugin-examples/#css-grid) &middot; [View source](https://github.com/tailwindcss/plugin-examples/blob/master/plugins/css-grid/index.js)

![](https://user-images.githubusercontent.com/4323180/37525015-fb5c78f2-2901-11e8-97be-18c66d12bf84.png)
