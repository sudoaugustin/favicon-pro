# `favicon-pro`

### Fetch the best quality favicons of websites

> Most APIs give old or low quality favicons. Fetch live and high quality favicons of websites using favicon-pro from **node server** or **browser extensions**. This package doesn't work on website's client-side because of [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors). But works on browser extension(add-on).

</br>

## 📦 Installation

```bash
npm install favicon-pro
```

## Methods

### getIcons

This method fetch all available favicons from given url.

```Cycript
import faviconPro from 'favicon-pro';
// const faviconPro = require('favicon-pro');

faviconPro
  .getIcons('https://npmjs.com')
  .then(icons => console.log(icons));


/*
[
 {
     rel: 'apple-touch-icon',
     size: 120,
     href: 'https://static.npmjs.com/58a....4.png'
 },
 {
     rel: 'apple-touch-icon',
     size: 180,
     href: 'https://static.npmjs.com/3dc....c.png'
 },
 {
     rel: 'icon',
     size: 32,
     href: 'https://static.npmjs.com/b0f....2.png'
 },
 {
     rel: 'icon',
     size: 230,
     href: 'https://static.npmjs.com/199....9.png'
 },
 {
     rel: 'icon',
     size: 16,
     href: 'https://static.npmjs.com/da3....2.png'
 },
]
*/
```

</br>

### getBestIcons

This method fetch all available favicons from given url. Then group the fetched icons by **rel** & select the best icon on each group.

```Cycript
import faviconPro from 'favicon-pro';
// const faviconPro = require('favicon-pro');

faviconPro
  .getBestIcons('https://npmjs.com')
  .then(icons => console.log(icons));


/*
[
 {
     rel: 'apple-touch-icon',
     size: 180,
     href: 'https://static.npmjs.com/3dc....c.png'
 },
 {
     rel: 'icon',
     size: 230,
     href: 'https://static.npmjs.com/199....9.png'
 },
]
*/
```

</br>

### getBestIcon

This method gives you the best icon (based on **size**).

```Cycript
import faviconPro from 'favicon-pro';
// const faviconPro = require('favicon-pro');

faviconPro
  .getBestIcon('https://npmjs.com')
  .then(icon => console.log(icon));

/*
 {
     rel: 'icon',
     size: 230,
     href: 'https://static.npmjs.com/199....9.png'
 },
*/
```

</br>

## getIcons vs getBestIcons vs getBestIcon

<img src="https://raw.githubusercontent.com/sudoaugustin/favicon-pro/main/.github/assets/method-comparison.png">

</br>
