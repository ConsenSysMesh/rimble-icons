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
    
    const ${componentName} = React.forwardRef((${props}, ref) => (
      ${mergedJsx}
    ))
    ${componentName.name}.displayName = '${componentName.name}'
    ${componentName.name}.defaultProps = {
      size: 24,
      color: 'inherit'
    }
    ${exports}
  `;
}
module.exports = template;
