import { StyleSheet } from "react-native";
import { colors, typo } from "../design";
export type Colors = (typeof colors)["dark"] | (typeof colors)["light"];
export type Typo = typeof typo;
type Style = ReturnType<typeof StyleSheet.create>;
type StyleCallback<T extends Style> = (theme: {
    themeColor: Colors;
    typo: Typo;
}) => T;
export declare const createStyle: <T extends Style>(styleCallback: StyleCallback<T>) => StyleCallback<T>;
export declare const useThemeStyle: <T extends Style>(styledCallback: StyleCallback<T>) => T;
export {};
