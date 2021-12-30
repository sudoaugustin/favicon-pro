const favecon = require('favecon');

const url = 'https://npmjs.com';

favecon.getIcons(url).then(icons => {
  console.log('\n• Get Icons');
  console.log(icons);
});

favecon.getBestIcons(url).then(icons => {
  console.log('\n• Get Best Icons');
  console.log(icons);
});

favecon.getBestIcon(url).then(icon => {
  console.log('\n• Get Best Icon');
  console.log(icon);
});
