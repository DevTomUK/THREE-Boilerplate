// generate-structure.js
const fs = require('fs');
const path = require('path');

const START_DIR = './src';
const OUTPUT_FILE = './structure.txt';

function buildTree(dir, indent = '') {
  let tree = '';
  const files = fs.readdirSync(dir);

  files.forEach((file, index) => {
    const fullPath = path.join(dir, file);
    const isLast = index === files.length - 1;
    const prefix = isLast ? '└─ ' : '├─ ';
    const stats = fs.statSync(fullPath);

    tree += `${indent}${prefix}${file}\n`;

    if (stats.isDirectory()) {
      const newIndent = indent + (isLast ? '   ' : '│  ');
      tree += buildTree(fullPath, newIndent);
    }
  });

  return tree;
}

function generate() {
  if (!fs.existsSync(START_DIR)) {
    console.error(`Directory "${START_DIR}" does not exist.`);
    return;
  }

  const treeOutput = `${START_DIR}\n${buildTree(START_DIR)}`;
  fs.writeFileSync(OUTPUT_FILE, treeOutput, 'utf-8');
  console.log(`Folder structure saved to ${OUTPUT_FILE}`);
}

generate();
