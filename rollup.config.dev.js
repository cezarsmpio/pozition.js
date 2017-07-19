import typescript from 'rollup-plugin-typescript2';

export default {
  entry: 'pozition.ts',
  moduleName: 'pozition',
  format: 'umd',
  dest: './pozition.js',
  plugins: [
    typescript()
  ]
};