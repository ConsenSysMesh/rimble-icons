#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const readdir = require("recursive-readdir");
const camelCase = require("lodash.camelcase");
const upperFirst = require("lodash.upperfirst");
const uniqBy = require("lodash.uniqby");

const pkgPath = path.join(__dirname, "./node_modules/material-design-icons");
const cryptoPath = path.join(__dirname, "./token-icons");

const outBaseDir = path.join(__dirname, "./svg");
const examplesBaseDir = path.join(__dirname, "./examples");

const mdOutDir = path.join(__dirname + "/svg", "./md");
const mdExamplesDir = path.join(__dirname + "/examples", "./md");

const cryptoOutDir = path.join(__dirname + "/svg", "./tokens");
const cryptoExamplesDir = path.join(__dirname + "/examples", "./tokens");

const ignore = (file, stats) => {
  if (stats.isDirectory()) return false;
  // ignore svg/design directories
  if (file === "design") return true;
  return !/\.svg$/.test(file);
};

const is24px = filename => /24px.svg$/.test(filename);

const rename = filename =>
  path
    .basename(filename, path.extname(filename))
    .replace(/^ic_/, "")
    .replace(/_24px$/, "")
    .replace(/^3d/, "ThreeD"); // remove number from beginning

const readFile = filename => {
  const content = fs.readFileSync(filename, "utf8");
  const name = camelCase(rename(filename));
  return {
    filename,
    name,
    content
  };
};

const writeMdFile = ({ name, content }) => {
  const filename = path.join(mdOutDir, name + ".svg");
  fs.writeFileSync(filename, content);
};

const writeCryptoFile = ({ name, content }) => {
  const filename = path.join(cryptoOutDir, name + ".svg");
  fs.writeFileSync(filename, content);
};

const exampleTemplate = ({ name }) => `import React from 'react'
import { ${name} } from '..'

export default props => (
  <${name}
    size={48}
    color='#07c'
  />
)`;

const createMdExample = ({ name }) => {
  const content = exampleTemplate({
    name: upperFirst(name)
  });
  const filename = path.join(mdExamplesDir, upperFirst(name) + ".js");
  fs.writeFileSync(filename, content);
};

const createCryptoExample = ({ name }) => {
  const content = exampleTemplate({
    name: upperFirst(name)
  });
  const filename = path.join(cryptoExamplesDir, upperFirst(name) + ".js");
  fs.writeFileSync(filename, content);
};

const docTemplate = ({ icons = [] }) => `
# Icons (${icons.length})

${icons.map(({ name }) => `- \`${upperFirst(name)}\``).join("\n")}
`;

const createDoc = icons => {
  const filename = path.join(__dirname, "./ICONS.md");
  const content = docTemplate({ icons });
  fs.writeFileSync(filename, content);
};

const copy = async () => {
  // Create missing base directories
  if (!fs.existsSync(outBaseDir)) fs.mkdirSync(outBaseDir);
  if (!fs.existsSync(examplesBaseDir)) fs.mkdirSync(examplesBaseDir);

  // Read material icons
  const mdFiles = await readdir(pkgPath, [ignore]);

  // Sort material icons
  const mdIcons = uniqBy(mdFiles, file => path.basename(file))
    .filter(is24px)
    .map(readFile)
    .sort((a, b) => (a.name < b.name ? -1 : 1));

  // Create missing material directories
  if (!fs.existsSync(mdOutDir)) fs.mkdirSync(mdOutDir);
  if (!fs.existsSync(mdExamplesDir)) fs.mkdirSync(mdExamplesDir);

  // Copy material icons to svg directory
  mdIcons.forEach(writeMdFile);
  // Create material examples
  mdIcons.forEach(createMdExample);
  console.log(mdIcons.length, " material icons copied");

  // Read crypto icons from local directory
  const cryptoFiles = await readdir(cryptoPath, [ignore]);
  // Sort crypto icons
  const cryptoIcons = uniqBy(cryptoFiles, file => path.basename(file))
    .map(readFile)
    .sort((a, b) => (a.name < b.name ? -1 : 1));

  // Create missing crypto directories
  if (!fs.existsSync(cryptoOutDir)) fs.mkdirSync(cryptoOutDir);
  if (!fs.existsSync(cryptoExamplesDir)) fs.mkdirSync(cryptoExamplesDir);

  // Copy crypto icons to svg directory
  cryptoIcons.forEach(writeCryptoFile);
  // Create crypto examples
  cryptoIcons.forEach(createCryptoExample);
  console.log(cryptoIcons.length, " token icons copied");

  // Combine icon sets
  const combinedIcons = mdIcons.concat(cryptoIcons);
  // Create markdown doc of all icons
  createDoc(combinedIcons);
  console.log(combinedIcons.length, " icons added to ICONS.md");
};

copy();
