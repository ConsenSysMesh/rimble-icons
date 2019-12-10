const element = {
  type: "JSXElement"
};

function template(
  { template },
  opts,
  { imports, componentName, props, jsx, exports }
) {
  const elementName = { type: "JSXIdentifier", name: "Svg" };
  const mergedJsx = {
    ...jsx,
    openingElement: {
      ...jsx.openingElement,
      name: {
        ...elementName
      }
    },
    closingElement: {
      ...jsx.closingElement,
      name: {
        ...elementName
      }
    }
  };

  return template.ast`
    ${imports}
    import styled from 'styled-components';
    import { space, color } from 'styled-system';
    const Svg = styled('svg')({ flex: 'none' }, space, color);
    
    const ${componentName} = (${props}) => (
      ${mergedJsx}
    )
    ${componentName.name}.displayName = '${componentName.name}'
    ${componentName.name}.defaultProps = {
      size: 24
    }
    ${exports}
  `;
}
module.exports = template;

// export default styledSystem = ({
//   name,
//   viewBox,
//   pathData
// }) => `import React from 'react'
// import styled from 'styled-components'
// import { space, color } from 'styled-system'
// const Svg = styled('svg')({ flex: 'none' }, space, color)
// const ${name}Icon = ({
//   size,
//   ...props
// }) => (
//   <Svg
//     {...props}
//     viewBox='${viewBox}'
//     width={size}
//     height={size}
//     fill='currentcolor'
//   >
//     <path d='${pathData}' />
//   </Svg>
// )
// ${name}Icon.displayName = '${name}Icon'
// ${name}Icon.defaultProps = {
//   size: 24
// }
