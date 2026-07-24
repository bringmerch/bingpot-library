import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
    output: {
        filename: 'my-lib.js',
        path: path.resolve(__dirname, "dist")
    },
    entry: './src/entry.js',
    mode: 'none'
}
