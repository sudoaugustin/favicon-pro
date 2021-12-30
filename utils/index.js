function composeNote({ version, features }) {
  const Date = composeReleaseDate();
  const Version = `[${version}](https://github.com/sudoaugustin/favecon/releases/tag/v${version})`;
  const Features = composeFeatures(features);
  return `## ${Version} - ${Date}\n${Features}`;
}

function composeLists([title, lists]) {
  const Lists = lists.map(list => `- ${list}`).join('\n');
  const Title = title.charAt(0).toUpperCase() + title.slice(1);
  return `### ${Title}\n${Lists}`;
}

function composeFeatures(features) {
  features = Object.entries(features);
  return features.map(composeLists).join('\n');
}

function composeReleaseDate() {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  const yyyy = today.getFullYear();
  return `${yyyy}-${mm}-${dd}`;
}

module.exports = { composeFeatures, composeNote };
