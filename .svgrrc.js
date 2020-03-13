const template = require("./icon-template.js");

module.exports = {
  dimensions: false,
  svgProps: {
    viewBox: "0 0 24 24",
    height: "{props.size}",
    width: "{props.size}",
    fill: "{ 'currentcolor' }",
    ref: "{ref}"
  },
  svgoConfig: {
    multipass: false,
    plugins: [
      {
        convertColors: false
      }
    ]
  },
  template: template,
  expandProps: "start"
};
