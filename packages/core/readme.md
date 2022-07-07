# Babel Plugin Generator

## intro

a babel plugin that can transform generator function and async function to state machine(ES5). more detail see [babel-plugin-generator](https://github.com/konicyQWQ/babel-plugin-generator).

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

    // most time need cooperate with this plugin
    "@babel/plugin-transform-block-scoping",
    
    [require("babel-plugin-generator")]
  ]
});
```