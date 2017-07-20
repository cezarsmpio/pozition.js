import typescript from 'rollup-plugin-typescript2';
import uglify from 'rollup-plugin-uglify';
import config from './rollup.config.dev';

export default Object.assign({}, config, {
  dest: './dist/pozition.min.js',
  plugins: [
    typescript(),
    uglify()
  ]
});