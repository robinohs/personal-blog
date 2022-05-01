import { ChevronRightIcon } from "@modulz/radix-icons";
import { Anchor, Breadcrumbs } from "@mantine/core";
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
    <Breadcrumbs separator={<ChevronRightIcon color="gray.500" />}>
      {items.map((item) => (
        <Anchor key={item.name + item.url} href={item.url}>
          {item.name}
        </Anchor>
      ))}
    </Breadcrumbs>
  );
};

export default Breadcrumb;
