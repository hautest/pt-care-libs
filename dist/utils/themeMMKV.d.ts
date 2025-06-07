export declare const themeMMKV: {
    setValue: (newValue: "light" | "dark" | "system") => void;
    getValue: () => "light" | "dark" | "system" | null;
    key: string;
    resetValue: () => void;
    useMMKV: () => ["light" | "dark" | "system" | null, (newValue: "light" | "dark" | "system") => void];
};
