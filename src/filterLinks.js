export default links => {
  const attrs = ['rel', 'href', 'sizes'];
  const filterAttrs = link =>
    attrs.reduce((total, attr) => ({ ...total, [attr]: link.getAttribute(attr) }), {});
  return [...links]
    .filter(link => link.getAttribute('href') && link.getAttribute('rel').includes('icon'))
    .map(filterAttrs);
};
