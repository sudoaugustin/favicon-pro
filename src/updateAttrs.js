export default url => icons => {
  const getOrigin = url => new URL(url).origin;
  return icons.map(({ sizes, href, rel }) => ({
    size: parseInt(sizes?.split('x')[0]) || undefined,
    href: href[0] === '/' ? `${getOrigin(url)}${href}` : href,
    rel,
  }));
};
