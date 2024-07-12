import { Box, Grid } from "@mantine/core";
import { ReactNode, useCallback, useEffect, useState } from "react";
import FilterSelect from "./FilterSelect";

type Filter<T> = {
  key: keyof T;
  filteredItems: string[];
};

type Props<T> = {
  items: T[];
  filterFor: (keyof T)[];
  children: (items: T[]) => ReactNode;
};
const FilterList = <T extends Object>({ items, filterFor, children }: Props<T>) => {
  const [shownItems, setShownItems] = useState<T[]>(items);
  const [filters, setFilters] = useState<Filter<T>[]>([]);

  const selectionHandler = useCallback(
    (key: keyof T, forbiddenItems: string[]) => {
      setFilters((old) => {
        const values = old.filter((it) => it.key !== key);
        values.push({ key, filteredItems: forbiddenItems });
        return values;
      });
    },
    [setFilters]
  );

  useEffect(() => {
    let tempItems = [...items];
    filters.forEach((filter) => {
      tempItems = tempItems.filter((it) => filter.filteredItems.includes(String(it[filter.key])) || filter.filteredItems.length === 0);
    });
    setShownItems(tempItems);
  }, [filters, items]);

  return (
    <Box>
      <Grid grow>
        {filterFor.map((filter) => (
          <Grid.Col key={`${String(filter)}-key`} xs={12} sm={6}>
            <FilterSelect label={`Filter for ${String(filter)}:`} field={filter} items={items} selectionHandler={selectionHandler} />
          </Grid.Col>
        ))}
      </Grid>
      {children(shownItems)}
    </Box>
  );
};

export default FilterList;
