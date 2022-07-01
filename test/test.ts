import pluginTester from "babel-plugin-tester";
import { babelPluginGenerator } from '../index';
import { babelTransform } from './utils'
import uglify from 'uglify-js'
import path from 'path'
import fs from 'fs'

/**
 * snapshot
 */

pluginTester({
  plugin: babelPluginGenerator,
  pluginOptions: {
    helper: true
  },
  pluginName: 'ts-async-function-test',
  babelOptions: {
    parserOpts: {
      strictMode: false,
    },
  },
  fixtures: path.join(__dirname, 'fixtures/'),
  formatResult(code) {
    let minify = uglify.minify(code, {
      mangle: true,
      output: {
        beautify: true
      }
    });
    return minify.code || '';
  },
})

/**
 * runtime
 */

fs.readdirSync(path.resolve(__dirname, 'exec')).forEach(testName => {
  test(`exec-${testName}`, async () => {
    let code = fs.readFileSync(path.resolve(__dirname, 'exec', testName, 'code.js')).toString();

    let originFunction = new Function(`
      ${code}
      return test();
    `)

    let babelFunction = new Function(`
      ${babelTransform(code)}
      return test();
    `)

    expect(await babelFunction()).toStrictEqual(await originFunction());
  })
})