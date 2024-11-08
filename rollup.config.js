import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';

export default [
    {
        input: 'src/index.tsx',
        output: [
            {
                file: 'dist/index.js',
                format: 'cjs',
            },
            {
                file: 'dist/index.esm.js',
                format: 'esm',
            },
        ],
        external: [ 'react', 'react-dom', 'react-toastify' ],
        plugins: [
            resolve(),
            commonjs(),
            typescript(),
        ],
    },
    {
        input: 'src/index.tsx',  // Declaration for root file
        output: [ { file: 'dist/index.d.ts', format: 'es' } ],
        plugins: [ dts() ],
    },
];
