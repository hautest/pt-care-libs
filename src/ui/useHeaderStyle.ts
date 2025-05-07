import { useSafeAreaInsets } from "react-native-safe-area-context";
import { createStyle, useThemeStyle } from "./createStyle";

export const HEADER_HEIGHT = 56;
export const HEADER_HORIZONTAL_PADDING = 16;

export const useHeaderStyle = () => {
  const insets = useSafeAreaInsets();
  const styles = useThemeStyle(headerStyle);

  return {
    headerStyle: [styles.container, { height: insets.top + HEADER_HEIGHT }],
  };
};

const headerStyle = createStyle(({ themeColor, typo }) => {
  return {
    container: {
      backgroundColor: themeColor.background.secondary,
    },
    title: {
      fontSize: typo.sizes.bodyLarge,
      fontWeight: typo.weights.bold,
    },
  };
});
