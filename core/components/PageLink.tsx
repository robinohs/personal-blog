import { UnstyledButton } from "@mantine/core";
import { NextLink } from "@mantine/next";

type Props = {
  href: string;
  openInNewTab?: boolean;
  children?: string;
};

const PageLink = ({ href, openInNewTab = false, children }: Props) => (
  <UnstyledButton
    component={NextLink}
    target={openInNewTab ? "_blank" : "_self"}
    href={href}
    sx={(theme) => ({
      color:
        theme.colorScheme === "dark"
          ? theme.colors.blue[5]
          : theme.colors.blue[8],
      ":hover": {
        textDecoration: "underline",
      },
    })}
  >
    {children}
  </UnstyledButton>
);

export default PageLink;
