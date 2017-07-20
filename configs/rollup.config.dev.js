import typescript from 'rollup-plugin-typescript2';

export default {
  entry: './src/pozition.ts',
  moduleName: 'pozition',
  format: 'umd',
  dest: './dist/pozition.js',
  plugins: [
    typescript()
  ]
};