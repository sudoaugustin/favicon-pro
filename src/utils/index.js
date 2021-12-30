export const sortByRel = links => {
  const isTouch = str => str.includes('apple-touch-icon');
  return links.sort((prev, next) => (isTouch(next.rel) ? 1 : isTouch(prev.rel) ? -1 : 0));
};

export const sortBySize = links => links.sort((prev, next) => next.size - prev.size);

export const groupIcons = icons =>
  icons.reduce((newIcons, icon) => {
    const _icon = newIcons.filter(({ rel }) => icon.rel === rel)[0];
    if (!_icon) newIcons.push(icon);
    else if (icon.size > _icon.size) {
      const index = newIcons.findIndex(({ rel }) => icon.rel === rel);
      newIcons[index] = icon;
    }
    return newIcons;
  }, []);
