import fetchLinks from './fetchLinks';
import filterLinks from './filterLinks';
import updateAttrs from './updateAttrs';
import { sortByRel, sortBySize, groupIcons } from './utils/index';

const getIcons = url => fetchLinks(url).then(filterLinks).then(updateAttrs(url));

const getBestIcons = url =>
  getIcons(url).then(icons => {
    const newIcons = groupIcons(icons);
    return sortBySize(newIcons);
  });

const getBestIcon = url =>
  getBestIcons(url).then(icons => {
    const firstIcon = icons[0];
    return firstIcon && firstIcon.size > 50 ? firstIcon : sortByRel(icons);
  });

export default { getIcons, getBestIcons, getBestIcon };
