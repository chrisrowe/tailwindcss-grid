const _ = require('lodash')

module.exports = function ({
  grids = _.range(1, 13),
  gaps = {},
  autoMinWidths = {},
  variants = ['responsive'],
}) {
  return function ({
    e,
    addUtilities
  }) {
    addUtilities(
      [{
          '.grid': {
            display: 'grid',
          },
        },
        {
          '.grid-dense': {
            gridAutoFlow: 'dense',
          },
        },
        ..._.map(gaps, (size, name) => {
          const gridGap = name.endsWith('-y') ?
            'gridRowGap' :
            name.endsWith('-x') ?
            'gridColumnGap' :
            'gridGap'

          return {
            [`.${e(`grid-gap-${name}`)}`]: {
              [gridGap]: size,
            },
          }
        }),
        ...grids.map(columns => ({
          [`.grid-columns-${columns}`]: {
            gridTemplateColumns: `repeat(${columns}, 1fr)`,
          },
        })),
        ..._.map(autoMinWidths, (size, name) => ({
          [`.${e(`grid-automin-${name}`)}`]: {
            gridTemplateColumns: `repeat(auto-fit, minmax(${size}, 1fr))`,
          },
        })),
        ..._.range(1, _.max(grids) + 1).map(span => ({
          [`.col-span-${span}`]: {
            gridColumnStart: `span ${span}`,
          },
        })),
        ..._.range(1, _.max(grids) + 2).map(line => ({
          [`.col-start-${line}`]: {
            gridColumnStart: `${line}`,
          },
          [`.col-end-${line}`]: {
            gridColumnEnd: `${line}`,
          },
        })),
        ..._.range(1, _.max(grids) + 1).map(span => ({
          [`.row-span-${span}`]: {
            gridRowStart: `span ${span}`,
          },
        })),
        ..._.range(1, _.max(grids) + 2).map(line => ({
          [`.row-start-${line}`]: {
            gridRowStart: `${line}`,
          },
          [`.row-end-${line}`]: {
            gridRowEnd: `${line}`,
          },
        })),
      ],
      variants,
    )
  }
}