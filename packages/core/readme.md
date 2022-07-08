# Babel Plugin Lite Regenerator

## intro

a babel plugin that can transform generator function and async function to state machine(ES5). more detail see [babel-plugin-lite-regenerator](https://github.com/konicyQWQ/babel-plugin-lite-regenerator).

## install

```bash
$ npm install babel-plugin-lite-regenerator
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
    
    [require("babel-plugin-lite-regenerator")]
  ]
});
```