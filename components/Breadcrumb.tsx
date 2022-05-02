import { Breadcrumbs, UnstyledButton } from "@mantine/core";
import { NextLink } from "@mantine/next";
import { ChevronRightIcon } from "@modulz/radix-icons";
import { useRouter } from "next/router";
import React, { useMemo } from "react";

interface BreadcrumbItem {
  url: string;
  name: string;
}

const Breadcrumb = () => {
  const router = useRouter();

  const items = useMemo(() => {
    const path = router.asPath.endsWith("#")
      ? router.asPath.slice(0, -1)
      : router.asPath;
    const paths = path.split("/");
    const items: BreadcrumbItem[] = paths.map((path, index) => {
      return {
        name:
          path === "" ? "Home" : path.charAt(0).toUpperCase() + path.slice(1),
        url: paths.reduce((old, curr, i) => {
          if (i > index) return `${old}`;
          if (old === "/") return `/${curr}`;
          return `${old}/${curr}`;
        }, "/"),
      };
    });
    return items;
  }, [router]);

  return (
    <Breadcrumbs separator={<ChevronRightIcon />}>
      {items.map((item) => (
        <NextLink key={item.name + item.url} href={item.url}>
          <UnstyledButton
            sx={(theme) => ({
              color:
                theme.colorScheme === "dark"
                  ? theme.colors.gray[6]
                  : theme.colors.dark[3],
              ":hover": {
                color:
                  theme.colorScheme === "dark"
                    ? theme.colors.gray[5]
                    : theme.colors.dark[4],
              },
            })}
          >
            {item.name}
          </UnstyledButton>
        </NextLink>
      ))}
    </Breadcrumbs>
  );
};

export default Breadcrumb;
