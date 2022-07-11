import babelPluginLiteRegenerator from './src/babel-plugin-lite-regenerator'

export default babelPluginLiteRegenerator; 

export {
  babelPluginLiteRegenerator
}

export const babelPresetLiteRegenerator = {
  plugins: [
    require('@babel/plugin-transform-destructuring'),
    require('@babel/plugin-transform-spread'),
    require('@babel/plugin-transform-parameters'),
    require('@babel/plugin-transform-classes'),
    require("@babel/plugin-transform-for-of"),
    require("@babel/plugin-transform-block-scoping"),
    babelPluginLiteRegenerator
  ]
}