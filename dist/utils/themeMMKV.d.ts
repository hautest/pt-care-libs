export declare const themeMMKV: {
    setValue: (newValue: {
        theme: "light" | "dark" | "system";
    }) => void;
    getValue: () => {
        theme: "light" | "dark" | "system";
    } | null;
    key: string;
    resetValue: () => void;
};
