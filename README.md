# CSS Grid Tailwind Plugin

## Configuration options

- `grids` for specifying all of the grid sizes you'd like to generate
- `gaps` for specifying the gap sizes you'd like to generate
- `autoMinWidths` for specifying min width to columns using auto-fit and minmax
- `variants` for specifying which variants to generate

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
        '4-x': '1rem',
        '4-y': '1rem',
      },
      autoMinWidths: {
        '16': '4rem',
        '24': '6rem',
        '300px': '300px',
      },
      variants: ['responsive'],
    }),
  ],
}
```

With zero configuration, it will generate grids from 1 to 12 columns in size, no gap sizes, and `responsive` variants for each new utility.

## Generated classes

The plugin generates the following sets of classes:

- `.grid` for setting `display: grid` on an element
- `.grid-columns-{size}` for specifying the number of columns in the grid
- `.col-span-{columns}` for specifying how many columns a cell should span
- `.grid-gap-{size}` for specifying the size of the gap between columns/rows, if the name ends with -x or -y `grid-[column/row]-gap` will be used
- `.grid-automin-{size}` for applying the minimum width of the columns using auto-fit and minmax (the max is 1fr)
- `.col-start-{line}` and `.col-end-{line}` for specifying a cell's start and end grid lines explicitly (useful for reordering cells or leaving gaps)
- `.row-span-{columns}` for specifying how many rows a cell should span
- `.row-start-{line}` and `.row-end-{line}`, for specifying a cell's start and end grid lines explicitly (useful for reordering cells or leaving gaps)
- `.grid-dense` applies `grid-auto-flow: dense`

It's not really practical to expose all of the power of CSS Grid through utilities, but this plugin is a good example of using CSS Grid to replace a cell-only float or Flexbox grid.

---

### Credit

This repo was originally isolated from [https://github.com/tailwindcss/plugin-examples](https://github.com/tailwindcss/plugin-examples) to publish to npm.

Credit and thanks to [@adamwathan](/adamwathan) - [view original demo](https://tailwindcss.github.io/plugin-examples/#css-grid)