import { parse } from 'node-html-parser';

const fetchHTML = (url => fetch(url));

const parseHTML = (str => parse(str));

const fetchLinks = (url => fetchHTML(url).then(res => res.text()).then(parseHTML).then(html => html.querySelectorAll('head link')));

const filterLinks = (links => {
  const attrs = ['rel', 'href', 'sizes'];

  const filterAttrs = link => attrs.reduce((total, attr) => ({ ...total,
    [attr]: link.getAttribute(attr)
  }), {});

  return [...links].filter(link => link.getAttribute('href') && link.getAttribute('rel').includes('icon')).map(filterAttrs);
});

const updateAttrs = (url => icons => {
  const getOrigin = url => new URL(url).origin;

  return icons.map(({
    sizes,
    href,
    rel
  }) => ({
    size: parseInt(sizes === null || sizes === void 0 ? void 0 : sizes.split('x')[0]) || undefined,
    href: href[0] === '/' ? "".concat(getOrigin(url)).concat(href) : href,
    rel
  }));
});

const sortByRel = links => {
  const isTouch = str => str.includes('apple-touch-icon');

  return links.sort((prev, next) => isTouch(next.rel) ? 1 : isTouch(prev.rel) ? -1 : 0);
};
const sortBySize = links => links.sort((prev, next) => next.size - prev.size);
const groupIcons = icons => icons.reduce((newIcons, icon) => {
  const _icon = newIcons.filter(({
    rel
  }) => icon.rel === rel)[0];
  if (!_icon) newIcons.push(icon);else if (icon.size > _icon.size) {
    const index = newIcons.findIndex(({
      rel
    }) => icon.rel === rel);
    newIcons[index] = icon;
  }
  return newIcons;
}, []);

const getIcons = url => fetchLinks(url).then(filterLinks).then(updateAttrs(url));

const getBestIcons = url => getIcons(url).then(icons => {
  const newIcons = groupIcons(icons);
  return sortBySize(newIcons);
});

const getBestIcon = url => getBestIcons(url).then(icons => {
  const firstIcon = icons[0];
  return firstIcon && firstIcon.size > 50 ? firstIcon : sortByRel(icons);
});

const index = {
  getIcons,
  getBestIcons,
  getBestIcon
};

export default index;
