export const colors = {
  light: {
    // Background colors
    background: {
      primary: "#FFFFFF",
      secondary: "#F7F7F7",
      tertiary: "#EFEFEF",
    },
    // Surface colors (cards, modals, etc)
    surface: {
      primary: "#FFFFFF",
      secondary: "#F7F7F7",
      tertiary: "#EFEFEF",
    },
    // Text colors
    text: {
      primary: "#000000",
      secondary: "#666666",
      tertiary: "#757575",
      inverse: "#FFFFFF",
    },
    // Brand colors
    brand: {
      primary: "#007AFF",
      secondary: "#5856D6",
    },
    // Accent colors
    accent: {
      blue: "#007AFF",
      green: "#34C759",
      indigo: "#5856D6",
      orange: "#FF9500",
      pink: "#FF2D55",
      purple: "#AF52DE",
      red: "#FF3B30",
      teal: "#5AC8FA",
      yellow: "#FFCC00",
    },
    // Border colors
    border: {
      primary: "#E5E5E5",
      secondary: "#E0E0E0",
    },
    // Status colors
    status: {
      success: "#34C759",
      warning: "#FFCC00",
      error: "#FF3B30",
      info: "#007AFF",
    },
  },
  dark: {
    // Background colors
    background: {
      primary: "#000000",
      secondary: "#1C1C1E",
      tertiary: "#2C2C2E",
    },
    // Surface colors (cards, modals, etc)
    surface: {
      primary: "#1C1C1E",
      secondary: "#2C2C2E",
      tertiary: "#3A3A3C",
    },
    // Text colors
    text: {
      primary: "#FFFFFF",
      secondary: "#EBEBF5",
      tertiary: "#EBEBF599",
      inverse: "#000000",
    },
    // Brand colors
    brand: {
      primary: "#0A84FF",
      secondary: "#5E5CE6",
    },
    // Accent colors
    accent: {
      blue: "#0A84FF",
      green: "#30D158",
      indigo: "#5E5CE6",
      orange: "#FF9F0A",
      pink: "#FF375F",
      purple: "#BF5AF2",
      red: "#FF453A",
      teal: "#64D2FF",
      yellow: "#FFD60A",
    },
    // Border colors
    border: {
      primary: "#38383A",
      secondary: "#2C2C2E",
    },
    // Status colors
    status: {
      success: "#30D158",
      warning: "#FFD60A",
      error: "#FF453A",
      info: "#0A84FF",
    },
  },
} as const;

export type Colors = typeof colors;
