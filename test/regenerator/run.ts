import fs from 'fs';
import path from 'path';
import { _awaiter, _generator, _values } from 'babel-plugin-generator-runtime'
import { babelTransform } from '../utils'

function convert(file: string, output: string) {
    fs.readFile(file, (_, data) => {
        fs.writeFileSync(output, babelTransform(data.toString(), { import: false }));
    })
}

fs.readdir(__dirname, {}, (_, files) => {
    files.forEach(file => {
        let filename = file.toString();
        if (!filename.includes('.ts') && !filename.includes('.js'))
            convert(path.resolve(__dirname, filename, 'code.js'), path.resolve(__dirname, filename, 'test.js'));
    })
})