# Rimble Icons

Crypto icons and Material icons as ES6 React styled-components

```sh
yarn add @rimble/icons styled-components
```

```jsx
// import icons individually for better tree-shaking
import { Accessibility, Eth, Btc } from '@rimble/icons'

const App = props => (
  <Accessibility
    size={32}
    color='tomato'
  />
  <Eth />
  <Btc />
)
```

```jsx
// import all icons as a single component
import { Icon } from "@rimble/icons";

const App = props => <Icon name="Accessibility" size={32} color="tomato" />;
```

## List of Icons

See the [icon list](ICONS.md) for a complete list of all icons available

## Props

| Prop    | Type   | Description                                                |
| ------- | ------ | ---------------------------------------------------------- |
| `size`  | number | width and height in pixels                                 |
| `color` | string | fill color, uses Styled System's [`color`][color] function |

## Contributing

```sh
yarn install
```

The build process will:

1. Parse the `material-design-icons` package for SVG source code
1. Parse the `crypto-icons` repo folder
1. Copy all the icons to the `svg/` folder
1. Run svgr over all icons to wrap in a react template with styled-system props
1. Replace default color prop with original background color for token icons
1. Create index files that imports all icons per directory
1. Create an `examples/` folder for tests and development
1. Run Babel on the `src/` folder and output to `lib/` for CommonJS compatible icons
1. Run Babel on the `src/` folder and output to `es/` for ES6 compatible icons

To run the development server:

1. First navigate to the `demo` directory
2. Install all the dependencies for the demo
3. Run the demo app

```sh
cd demo
yarn install
yarn start
```

Should start a local web server that displays all the icons

## Related

- [RMDI](https://jxnblk.com/rmdi)
- [Google Material Design Icons](https://github.com/google/material-design-icons)
- [Pixo](https://github.com/c8r/pixo)
- [Styled Components](https://www.styled-components.com/)
- [Styled System](https://styled-system.com/)
- [React Icons](https://github.com/gorangajic/react-icons)
- [Cryptocurrency Icons](https://github.com/atomiclabs/cryptocurrency-icons)

[MIT License](LICENSE.md)
