import json from '@rollup/plugin-json'
import resolve from '@rollup/plugin-node-resolve'
import common from '@rollup/plugin-commonjs'
import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'

export default {
  input: 'src/main.js',
  output: [
    {
      file: 'dist.common.js',
      format: 'cjs',
    },
  ],
  plugins: [
    json(),
    terser(),
    babel({
      exclude: 'node_modules/**',
    }),
    resolve(),
    common(),
  ],
}

/* import babel from 'rollup-plugin-babel'
export default {
  input: 'src/main.js',
  output: {
    file: 'dist.js',
    format: 'iife',
  },

  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
  ],
}
 */
