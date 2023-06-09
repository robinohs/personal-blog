import { TextInput } from "@mantine/core";
import { useDebouncedValue, useDidUpdate, useInputState } from "@mantine/hooks";
import { MagnifyingGlassIcon } from "@modulz/radix-icons";

type Props = {
  handler: (query: string) => void;
};
const SearchBar = ({ handler }: Props) => {
  const [searchInput, setSearchInput] = useInputState("");
  const [debounce] = useDebouncedValue(searchInput, 300);

  useDidUpdate(() => {
    handler(debounce);
  }, [debounce]);

  return <TextInput placeholder="Your search..." value={searchInput} onChange={setSearchInput} icon={<MagnifyingGlassIcon />} />;
};

export default SearchBar;
