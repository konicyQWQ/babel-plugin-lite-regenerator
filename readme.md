# Babel Plugin Generator

## intro

This babel plugin is a ported version of TypeScript generator transform. 
It can transform async and generator function to state machine using the way of TypeScirpt.

## install

```bash
$ npm install babel-plugin-generator
```

## usage

```ts
require("@babel/core").transformSync(code, {
  plugins: [
    [require("babel-plugin-generator"), {
      helper: true // add helper function, default false
    }]
  ]
});
```