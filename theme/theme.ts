interface Theme {
  MAIN_COLOR: string;
  SECOND_COLOR: string;
  DIVIDER_COLOR: string;
  BG_COLOR: string;
  BG_HOVER_COLOR: string;
  CARD_BG_COLOR: string;
  CARD_HOVER_BG_COLOR: string;
  DECORATION_COLOR: string;
  DECORATION_HOVER_COLOR: string;
}

export const LightTheme: Theme = {
  MAIN_COLOR: "black",
  SECOND_COLOR: "#595959",
  DIVIDER_COLOR: "#e0e0e0",
  BG_COLOR: "white",
  BG_HOVER_COLOR: "gray.50",
  CARD_BG_COLOR: "gray.50",
  CARD_HOVER_BG_COLOR: "gray.100",
  DECORATION_COLOR: "blue.400",
  DECORATION_HOVER_COLOR: "blue.500",
};

export const DarkTheme: Theme = {
  MAIN_COLOR: "white",
  SECOND_COLOR: "rgba(255, 255, 255, 0.7)",
  DIVIDER_COLOR: "#323232",
  BG_COLOR: "#111212;",
  BG_HOVER_COLOR: "gray.800",
  CARD_BG_COLOR: "gray.800",
  CARD_HOVER_BG_COLOR: "gray.800",
  DECORATION_COLOR: "blue.300",
  DECORATION_HOVER_COLOR: "blue.200",
};

export const DefaultFont = "Fira Sans";
