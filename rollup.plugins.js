import alias from '@rollup/plugin-alias';
import { babel } from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';

function resolve(env) {
  const fetchFile = env === 'node' ? 'node-fetch' : 'native-fetch';
  const parseFile = env === 'node' || env === 'native' ? 'node-parse' : 'native-parse';
  return {
    entries: {
      fetch: `src/fetch/${fetchFile}.js`,
      parse: `src/parse/${parseFile}.js`,
    },
  };
}

const plugins = env => [
  alias(resolve(env)),
  babel({ babelHelpers: 'bundled' }),
  env === 'unpkg' && terser(),
];

export default plugins;
