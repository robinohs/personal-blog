import { Breadcrumbs, UnstyledButton } from "@mantine/core";
import Link from "next/link";
import { ChevronRightIcon } from "@modulz/radix-icons";
import createBreadcrumb from "@utils/createBreadcrumb";
import { useRouter } from "next/router";
import { useMemo } from "react";

const Breadcrumb = () => {
  const router = useRouter();
  const items = useMemo(() => createBreadcrumb(router.asPath), [router]);

  return (
    <Breadcrumbs separator={<ChevronRightIcon />}>
      {items.map((item) => (
        <UnstyledButton
          key={item.name + item.url}
          component={Link}
          href={item.url}
          sx={(theme) => ({
            color: theme.colorScheme === "dark" ? theme.colors.gray[6] : theme.colors.dark[3],
            ":hover": {
              color: theme.colorScheme === "dark" ? theme.colors.gray[5] : theme.colors.dark[4],
            },
          })}
        >
          {item.name}
        </UnstyledButton>
      ))}
    </Breadcrumbs>
  );
};

export default Breadcrumb;
