import { Box } from "@mantine/core";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import SearchBar from "./SearchBar";

type Props<T> = {
  searchFilter: (query: string, items: T[]) => T[];
  items: T[];
  children: (items: T[]) => ReactNode;
  getQueryHandler?: Dispatch<SetStateAction<string>>;
};
const SearchableList = <T extends Object>({
  searchFilter,
  items,
  children,
  getQueryHandler,
}: Props<T>) => {
  const [query, setQuery] = useState("");
  const [shownItems, setShownItems] = useState<T[]>(items);

  useEffect(() => {
    getQueryHandler && getQueryHandler(query);
    const filteredItems = searchFilter(query, items);
    setShownItems(filteredItems);
  }, [getQueryHandler, items, searchFilter, query]);

  return (
    <Box>
      <SearchBar handler={setQuery} />
      {children(shownItems)}
    </Box>
  );
};

export default SearchableList;
