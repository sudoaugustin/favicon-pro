module.exports = api => {
  api.cache(true);
  return {
    presets: [['@babel/preset-env', { targets: { node: '10', browsers: 'defaults, not IE 11' } }]],
  };
};
