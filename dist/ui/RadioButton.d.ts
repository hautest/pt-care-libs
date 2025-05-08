import React from "react";
interface RadioButtonProps {
    children: React.ReactNode;
    checked: boolean;
    onCheckChange: (checked: boolean) => void;
}
export declare function RadioButton({ children, checked, onCheckChange, }: RadioButtonProps): import("react/jsx-runtime").JSX.Element;
export {};
