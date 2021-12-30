import fetchHTML from 'fetch';
import parseHTML from 'parse';

export default url =>
  fetchHTML(url)
    .then(res => res.text())
    .then(parseHTML)
    .then(html => html.querySelectorAll('head link'));
