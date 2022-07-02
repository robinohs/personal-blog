import { Box } from "@mantine/core";
import { ReactNode, useEffect, useState } from "react";
import SearchBar from "./SearchBar";

type Props<T> = {
  searchFilter: (query: string, items: T[]) => T[];
  items: T[];
  children: (items: T[]) => ReactNode;
};
const SearchableList = <T extends Object>({
  searchFilter,
  items,
  children,
}: Props<T>) => {
  const [query, setQuery] = useState("");
  const [shownItems, setShownItems] = useState<T[]>(items);

  useEffect(() => {
    const filteredItems = searchFilter(query, items);
    setShownItems(filteredItems);
  }, [items, searchFilter, query]);

  return (
    <Box>
      <SearchBar handler={setQuery} />
      {children(shownItems)}
    </Box>
  );
};

export default SearchableList;
