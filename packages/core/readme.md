# Babel Plugin Generator

## intro

This babel plugin is a ported version of TypeScript generator transform. 
It can transform async and generator function to state machine using the way of TypeScirpt.

Babel uses `regenerator-transform` whose helper function is about **6.6kB**, but that of TypeScript just is about **1.1KB**. Therefore, this plugin can decrease the bundle size if the project need to polyfill.

## install

```bash
$ npm install babel-plugin-generator
```

## usage

```ts
require("@babel/core").transformSync(code, {
  plugins: [
    // sometimes need cooperate with below plugin
    // '@babel/plugin-transform-destructuring',
    // '@babel/plugin-transform-spread',
    // '@babel/plugin-transform-parameters',
    // '@babel/plugin-transform-classes',
    // "@babel/plugin-transform-for-of",
    
    [require("babel-plugin-generator")]
  ]
});
```