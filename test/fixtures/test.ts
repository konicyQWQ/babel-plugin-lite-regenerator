import pluginTester from "babel-plugin-tester";
import { babelPluginLiteRegenerator } from 'babel-plugin-lite-regenerator';
import path from 'path'

/**
 * snapshot
 */

pluginTester({
  plugin: babelPluginLiteRegenerator,
  pluginName: 'ts-async-function-test',
  babelOptions: {
    parserOpts: {
      strictMode: false,
    },
  },
  formatResult(code) {
    return code;
  },
  fixtures: path.join(__dirname, './'),
})