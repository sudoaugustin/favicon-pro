import plugins from './rollup.plugins';

const envs = ['node', 'unpkg', 'module', 'native'];
const configs = envs.map(config);

function config(env) {
  return {
    input: 'src/index.js',
    output: {
      file: `dist/${env}.js`,
      name: env == 'unpkg' && 'favecon',
      strict: env == 'unpkg',
      format: env == 'node' ? 'cjs' : env == 'unpkg' ? 'umd' : 'es',
      exports: 'auto',
      preferConst: true,
    },
    plugins: plugins(env),
    external: ['node-fetch', 'node-html-parser'],
  };
}

export default configs;
