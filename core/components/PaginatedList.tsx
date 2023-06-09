import { Box, Pagination, Stack, Sx } from "@mantine/core";
import { ReactNode, useEffect, useMemo, useState } from "react";

type Props<T> = {
  itemsPerPage: number;
  items: T[];
  children: (item: T) => ReactNode;
  sx?: Sx | Sx[];
};

const PaginatedList = <T extends Object>({
  itemsPerPage,
  items,
  children,
  sx,
}: Props<T>) => {
  const [activePage, setPage] = useState(1);
  const [paginatePosts, setPaginatePosts] = useState<T[]>([]);

  const maxPages = useMemo(
    () => Math.ceil(items.length / itemsPerPage),
    [items, itemsPerPage]
  );

  useEffect(() => {
    const showPosts = items.slice(
      (activePage - 1) * itemsPerPage,
      (activePage - 1) * itemsPerPage + itemsPerPage
    );
    setPaginatePosts(showPosts);
  }, [items, activePage, itemsPerPage]);

  return (
    <Box>
      <Stack sx={sx}>{paginatePosts.map((post) => children(post))}</Stack>
      {items.length > 0 && (
        <Stack align="center" sx={{ marginTop: "55px" }}>
          <Pagination value={activePage} onChange={setPage} total={maxPages} />
        </Stack>
      )}
    </Box>
  );
};

export default PaginatedList;
