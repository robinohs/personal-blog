import { MultiSelect } from "@mantine/core";
import { useEffect, useState } from "react";

function getMatches<T>(a: T[], b: T[]): T[] {
  return a.filter((element) => {
    return b.includes(element);
  });
}

interface Props<T, K extends keyof T> {
  label?: string;
  field: K;
  items: T[];
  selectionHandler: (key: keyof T, forbiddenItems: string[]) => void;
}
const FilterSelect = <T extends Object, K extends keyof T>({ field, items, selectionHandler, ...rest }: Props<T, K>) => {
  const [initialRun, setInitialRun] = useState(true);
  const [convertedItems] = useState<string[]>(
    items
      .map((it) => it[field])
      .filter((v, i, a) => a.indexOf(v) === i)
      .map((it) => String(it))
  );
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  useEffect(() => {
    if (initialRun) {
      setInitialRun(false);
      return;
    }
    const diff = getMatches(convertedItems, selectedItems);
    selectionHandler(field, diff);
  }, [initialRun, setInitialRun, field, selectionHandler, selectedItems, convertedItems]);

  return <MultiSelect data={convertedItems} value={selectedItems} onChange={setSelectedItems} placeholder={`Show all.`} {...rest} />;
};

export default FilterSelect;
