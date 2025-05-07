import { EdgeInsets } from "react-native-safe-area-context";
export declare const HEADER_HEIGHT = 56;
export declare const HEADER_HORIZONTAL_PADDING = 16;
interface UseHeaderStyleProps {
    insets: EdgeInsets;
}
export declare const useHeaderStyle: ({ insets }: UseHeaderStyleProps) => {
    headerStyle: ({
        backgroundColor: "#F3F7FB" | "#1E293B";
    } | {
        height: number;
    })[];
    tabBarActiveTintColor: "#1E40AF" | "#60A5FA";
    tabBarInactiveTintColor: "#CBD5E1" | "#475569";
    tabBarStyle: {
        backgroundColor: "#F3F7FB" | "#1E293B";
        borderTopWidth: number;
    };
    headerTitleStyle: {
        fontSize: 18;
        fontWeight: "700";
        color: "#0A0F21" | "#F8FAFC";
    };
};
export {};
