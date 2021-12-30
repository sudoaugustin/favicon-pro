const fs = require('fs');
const exec = require('exec-sh').promise;
const versions = require('../versions');
const { composeNote, composeFeatures } = require('../utils');

const latest = versions[versions.length - 1];
const note = composeFeatures(latest.features);

(async function () {
  //* Compose Change Log
  fs.writeFileSync('CHANGELOG.md', versions.map(composeNote).join('\n\n'));

  //* Change version at package.json
  await exec(`npm version ${latest.version} --git-tag-version=false`);

  //* Push to Github
  await exec(`git add . && git commit -m "v${latest.version}" && git push -u origin main`);

  //* Release to Github
  await exec(`gh release create v${latest.version} --notes "${note}"`);
})();
