import { defineConfig } from 'rollup'

export default defineConfig({
    input: 'index.js',
    output: [
        {
            file: `lib/index.cjs.js`,
            format: 'cjs'
        },
        {
            file: `lib/index.es.js`,
            format: 'es'
        }
    ],
})