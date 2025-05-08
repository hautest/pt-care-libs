import { useColorScheme } from "react-native";
import { colors } from "./colors";

export const useThemeColor = () => {
  const colorScheme = useColorScheme();

  return colors[colorScheme === "dark" ? "dark" : "light"];
};
