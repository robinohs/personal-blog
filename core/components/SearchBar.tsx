import { TextInput } from "@mantine/core";
import { useDebouncedValue, useDidUpdate } from "@mantine/hooks";
import { MagnifyingGlassIcon } from "@modulz/radix-icons";
import React, { useState } from "react";

type Props = {
  handler: (query: string) => void;
};
const SearchBar = ({ handler }: Props) => {
  const [searchInput, setSearchInput] = useState("");
  const [debounce] = useDebouncedValue(searchInput, 300);

  useDidUpdate(() => {
    handler(debounce);
  }, [debounce]);

  return (
    <TextInput
      placeholder="Your search..."
      value={searchInput}
      onChange={(event) => setSearchInput(event.currentTarget.value)}
      icon={<MagnifyingGlassIcon />}
    />
  );
};

export default SearchBar;
