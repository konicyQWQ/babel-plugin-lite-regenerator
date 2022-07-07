import pluginTester from "babel-plugin-tester";
import { babelPluginGenerator } from 'babel-plugin-generator';
import path from 'path'

/**
 * snapshot
 */

pluginTester({
  plugin: babelPluginGenerator,
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