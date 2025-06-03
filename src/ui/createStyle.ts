import { StyleSheet, useColorScheme } from "react-native";
import { colors, typo } from "../design";
import { useMMKVString } from "react-native-mmkv";
import { themeMMKV } from "../utils";

export type Colors = (typeof colors)["dark"] | (typeof colors)["light"];
export type Typo = typeof typo;
type Style = ReturnType<typeof StyleSheet.create>;

type StyleCallback<T extends Style> = (theme: {
  themeColor: Colors;
  typo: Typo;
}) => T;

export const createStyle = <T extends Style>(styleCallback: StyleCallback<T>) =>
  styleCallback;

export const useThemeStyle = <T extends Style>(
  styledCallback: StyleCallback<T>
) => {
  const [colorScheme] = themeMMKV.useMMKV();
  const colorSchemeFromSystem = useColorScheme();

  const isDark = colorScheme === "system" ? colorSchemeFromSystem : colorScheme;

  return styledCallback({
    themeColor: isDark ? colors["dark"] : colors["light"],
    typo,
  });
};
