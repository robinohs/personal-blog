import Fuse from "fuse.js";

function createSearch<T>(searchKeys: (keyof T)[]): ((query: string, items: T[]) => T[]) {
  return (query: string, items: T[]) => {
    if (query === "")
      return items;
    const fuse = new Fuse(items, {
      fieldNormWeight: 0,
      includeScore: true,
      keys: searchKeys as string[],
    });

    return fuse
      .search(query)
      .filter((item) => (item.score ?? 1) < 0.01)
      .sort((a, b) => {
        const aScore = a.score ?? 0;
        const bScore = b.score ?? 0;
        if (aScore > bScore)
          return 1;
        if (aScore < bScore)
          return -1;
        return 0;
      })
      .map((item) => item.item);
  };
}

export default createSearch;
