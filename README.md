# Favecon

### Get best quality favicons of any website

> Most APIs give old or low quality favicons. Fetch live and high quality favicons of websites using favecon from **own server** or **client devices**.

</br>

## 📦 Installation

#### NPM

```bash
npm install favecon
```

#### Yarn

```bash
yarn add favecon
```

#### ⚠️ Note

- Not support ES5. If you need to support ES5, you can compile your code with [Babel](https://babeljs.io/) and using preset [@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env).

- Not work on website's client-side code because of [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors). But works on browser's extension(add-on) code.

</br>

## Methods

### getIcons

This method fetch all available favicons from given url.

#### Syntax

```Cycript
getIcons(url:String)
  .then((icons:[Icon]) => { ... });
```

#### Example

```Cycript
import favecon from 'favecon';
// const favecon = require('favecon');

favecon
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

#### Syntax

```Cycript
getBestIcons(url:String)
  .then((icons:[Icon]) => { ... });
```

#### Example

```Cycript
import favecon from 'favecon';
// const favecon = require('favecon');

favecon
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

#### Syntax

```Cycript
getBestIcon(url:String)
  .then((icon:Icon) => { ... });
```

#### Example

```Cycript
import favecon from 'favecon';
// const favecon = require('favecon');

favecon
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

<img src="https://raw.githubusercontent.com/sudoaugustin/favecon/main/.github/Comparison.png">

</br>

## Icon

A object with the following properties

- **rel** : String
- **size** : Number | Undefined
- **href** : String

<br/>

[<img src="https://raw.githubusercontent.com/sudoaugustin/favecon/main/.github/ProjectBy.png">](https://github.com/sudoaugustin)
