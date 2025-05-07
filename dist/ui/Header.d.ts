import { ReactNode } from "react";
import { EdgeInsets } from "react-native-safe-area-context";
interface HeaderProps {
    leftNode?: ReactNode;
    title?: string;
    rightNode?: ReactNode;
    insets: EdgeInsets;
}
export declare function Header({ leftNode, title, rightNode, insets }: HeaderProps): import("react/jsx-runtime").JSX.Element;
export {};
