import React from "react";
import { StyleProp, ViewStyle } from "react-native";
interface RadioButtonProps {
    children: React.ReactNode;
    checked: boolean;
    onCheckChange: (checked: boolean) => void;
    style?: StyleProp<ViewStyle>;
}
export declare function RadioButton({ children, checked, onCheckChange, style, }: RadioButtonProps): import("react/jsx-runtime").JSX.Element;
export {};
