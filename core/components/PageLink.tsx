import { Sx, UnstyledButton } from "@mantine/core";
import Link from 'next/link';

type Props = {
  href: string;
  openInNewTab?: boolean;
  children?: string;
  sx?: Sx;
};

const PageLink = ({ href, openInNewTab = false, sx, children }: Props) => (
  <UnstyledButton
    component={Link}
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
      ...sx,
    })}
  >
    {children}
  </UnstyledButton>
);

export default PageLink;
