import React from "react";
import { createStyle, useThemeStyle } from "./createStyle";
import { useThemeColor } from "../design";
import { TouchableOpacity } from "react-native";

interface RadioButtonProps {
  children: React.ReactNode;
  checked: boolean;
  onCheckChange: (checked: boolean) => void;
}

export function RadioButton({
  children,
  checked,
  onCheckChange,
}: RadioButtonProps) {
  const styles = useThemeStyle(themedStyles);

  const themeColor = useThemeColor();

  return (
    <TouchableOpacity
      style={[
        styles.block,
        {
          backgroundColor: checked
            ? themeColor.action.primary
            : themeColor.action.disabled,
        },
      ]}
      activeOpacity={0.3}
      accessibilityRole="radio"
      accessibilityState={{ selected: checked }}
      onPress={() => onCheckChange(!checked)}
    >
      {children}
    </TouchableOpacity>
  );
}

const themedStyles = createStyle(({ themeColor }) => ({
  block: {
    padding: 32,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: themeColor.border.default,
  },
}));
