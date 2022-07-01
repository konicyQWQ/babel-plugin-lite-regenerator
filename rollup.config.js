import { defineConfig } from 'rollup'
import babel from 'rollup-plugin-babel';
import typescript from '@rollup/plugin-typescript';
import pkg from './package.json'

const libname = pkg.name;
export default defineConfig({
    input: 'index.ts',
    output: [
        {
            file: `dist/${libname}.cjs.js`,
            format: 'cjs'
        },
        {
            file: `dist/${libname}.es.js`,
            format: 'es'
        }
    ],
    plugins: [
        babel(),
        typescript()
    ],
    external: [
        '@babel/types',
        '@babel/template'
    ]
})