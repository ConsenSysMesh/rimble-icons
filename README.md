# Rimble Icons

```sh
yarn add @rimble/icons
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

const App = props => <Icon name="accessibility" size={32} color="tomato" />;
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
1. Create an `examples/` folder for tests and development
1. Run [Pixo][pixo] on the `svg/` folder and output to `src/`
1. Run Babel on the `src/` folder and output to `lib/`

To run the development server:

1. First navigate to the `demos` directory
2. Install all the dependencies for the demo
3. Run the demo app

```sh
cd demo
yarn install
yarn start
```

Should start a local webserver that displays all the icons

## Technology

Built with [Pixo][pixo], [Styled Components][sc], and [Styled System][sys]

[pixo]: https://github.com/c8r/pixo
[sys]: https://github.com/jxnblk/styled-system
[sc]: https://github.com/styled-components/styled-components

## Related

- [RMDI](https://jxnblk.com/rmdi)
- [Google Material Design Icons](https://github.com/google/material-design-icons)
- [Pixo][pixo]
- [Styled Components][sc]
- [Styled System][sys]
- [React Icons](https://github.com/gorangajic/react-icons)

[MIT License](LICENSE.md)
