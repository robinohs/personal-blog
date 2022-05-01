import { ActionIcon, Group, useMantineColorScheme } from "@mantine/core";
import { MoonIcon, SunIcon } from "@modulz/radix-icons";

const ColorSchemeToggle = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Group position="center">
      <ActionIcon
        onClick={() => toggleColorScheme()}
        size="xl"
        sx={(theme) => ({
          backgroundColor:
            colorScheme === "dark"
              ? theme.colors.dark[6]
              : theme.colors.gray[0],
          ":hover": {
            backgroundColor:
              colorScheme === "dark"
                ? theme.colors.dark[7]
                : theme.colors.gray[1],
          },
          color:
            theme.colorScheme === "dark"
              ? theme.colors.yellow[4]
              : theme.colors.blue[6],
        })}
      >
        {colorScheme === "dark" ? (
          <SunIcon width={20} height={20} />
        ) : (
          <MoonIcon width={20} height={20} />
        )}
      </ActionIcon>
    </Group>
  );
};

export default ColorSchemeToggle;
