type Icon = { rel: string; src: string; size: number };

export const getIcons = (url: string) => {
  const { origin } = new URL(url);

  return (
    fetch(url)
      .then((res) => res.text())
      //@ts-ignore
      .then(parse)
      //@ts-ignore
      .then((html: Document) => html.querySelectorAll("head link"))
      .then((links) =>
        [...links]
          .filter((link) => link.getAttribute("href") && link.getAttribute("rel")?.includes("icon"))
          .map((link) => {
            const rel = link.getAttribute("rel") || "";
            const src = link.getAttribute("href") || "";
            const sizes = link.getAttribute("sizes") || "";

            return {
              rel,
              src: src[0] === "/" ? `${origin}${src}` : src,
              size: Number.parseInt(sizes.split("x")[0]),
            } as Icon;
          }),
      )
  );
};

export const getBestIcons = (url: string) => {
  return getIcons(url).then((icons) => {
    const newIcons = icons.reduce((newIcons: Icon[], icon) => {
      const _icon = newIcons.filter(({ rel }) => icon.rel === rel)[0];
      if (!_icon) newIcons.push(icon);
      else if (icon.size > _icon.size) {
        const index = newIcons.findIndex(({ rel }) => icon.rel === rel);
        newIcons[index] = icon;
      }
      return newIcons;
    }, []);
    return newIcons.sort((prev, next) => next.size - prev.size);
  });
};

export const getBestIcon = (url: string) => {
  return getBestIcons(url).then((icons) => {
    return icons[0].size > 50
      ? icons[0]
      : icons.sort((prev, next) => (next.rel.includes("apple-touch-icon") ? 1 : prev.rel.includes("apple-touch-icon") ? -1 : 0))[0];
  });
};
