import * as __WEBPACK_EXTERNAL_MODULE_react_native_4af9217e__ from "react-native";
import * as __WEBPACK_EXTERNAL_MODULE_zod__ from "zod";
import * as __WEBPACK_EXTERNAL_MODULE_react_native_mmkv_01893ffb__ from "react-native-mmkv";
import * as __WEBPACK_EXTERNAL_MODULE_react__ from "react";
const colors = {
    basic: {
        black: "#000000",
        white: "#FFFFFF"
    },
    light: {
        background: {
            primary: "#FFFFFF",
            secondary: "#F3F7FB",
            tertiary: "#E0ECF3"
        },
        surface: {
            card: "#FFFFFF",
            panel: "#F3F7FB",
            modal: "#E0ECF3"
        },
        text: {
            primary: "#0A0F21",
            secondary: "#3F4A5B",
            tertiary: "#6B7280",
            placeholder: "#9CA3AF",
            inverse: "#FFFFFF"
        },
        border: {
            default: "#D1D5DB",
            light: "#E5E7EB",
            focus: "#2563EB"
        },
        brand: {
            primary: "#1E40AF",
            secondary: "#2563EB"
        },
        action: {
            primary: "#2563EB",
            secondary: "#1E40AF",
            disabled: "#CBD5E1"
        },
        status: {
            success: "#16A34A",
            warning: "#F59E0B",
            error: "#DC2626",
            info: "#2563EB"
        }
    },
    dark: {
        background: {
            primary: "#0F172A",
            secondary: "#1E293B",
            tertiary: "#293447"
        },
        surface: {
            card: "#1E293B",
            panel: "#293447",
            modal: "#2A3C50"
        },
        text: {
            primary: "#F8FAFC",
            secondary: "#E2E8F0",
            tertiary: "#94A3B8",
            placeholder: "#CBD5E1",
            inverse: "#0F172A"
        },
        border: {
            default: "#334155",
            light: "#475569",
            focus: "#60A5FA"
        },
        brand: {
            primary: "#60A5FA",
            secondary: "#818CF8"
        },
        action: {
            primary: "#60A5FA",
            secondary: "#818CF8",
            disabled: "#475569"
        },
        status: {
            success: "#34D399",
            warning: "#FACC15",
            error: "#EF4444",
            info: "#60A5FA"
        }
    }
};
const typo_typo = {
    sizes: {
        display1: 48,
        display2: 40,
        display3: 32,
        h1: 28,
        h2: 24,
        h3: 20,
        h4: 18,
        h5: 16,
        h6: 14,
        bodyLarge: 18,
        bodyMedium: 16,
        bodySmall: 14,
        caption: 12,
        tiny: 10
    },
    lineHeights: {
        display: 1.2,
        heading: 1.3,
        body: 1.5,
        tight: 1.25,
        relaxed: 1.75
    },
    weights: {
        regular: "400",
        medium: "500",
        semiBold: "600",
        bold: "700"
    },
    letterSpacing: {
        tighter: -0.8,
        tight: -0.4,
        normal: 0,
        wide: 0.4,
        wider: 0.8
    }
};
const useThemeColor = ()=>{
    const colorScheme = (0, __WEBPACK_EXTERNAL_MODULE_react_native_4af9217e__.useColorScheme)();
    return colors["dark" === colorScheme ? "dark" : "light"];
};
function isStringIncludeQuotesOrDoubleQuotes(value) {
    return value.startsWith('"') && value.endsWith('"') || value.startsWith("'") && value.endsWith("'");
}
function removeQuotesOrDoubleQuotes(value) {
    return value.replace(/^"|"$/g, "").replace(/^'|'$/g, "");
}
const mmkvStorage = new __WEBPACK_EXTERNAL_MODULE_react_native_mmkv_01893ffb__.MMKV();
function createMMKVSchema({ key, value: valueType }) {
    const setValue = (newValue)=>{
        if (valueType.safeParse(newValue).success) mmkvStorage.set(key, JSON.stringify(newValue));
        else throw new Error(`${key}에 대한 값이 유효하지 않습니다.`);
    };
    const getValue = ()=>{
        const value = mmkvStorage.getString(key);
        if (value) {
            const jsonParsedValue = JSON.parse(value);
            return valueType.parse(isStringIncludeQuotesOrDoubleQuotes(jsonParsedValue) ? removeQuotesOrDoubleQuotes(jsonParsedValue) : jsonParsedValue);
        }
        return null;
    };
    const resetValue = ()=>{
        mmkvStorage.delete(key);
    };
    const useMMKV = ()=>{
        const [_value, _setValue] = (0, __WEBPACK_EXTERNAL_MODULE_react_native_mmkv_01893ffb__.useMMKVString)(key);
        const setValue = (newValue)=>{
            if (valueType.safeParse(newValue).success) _setValue(JSON.stringify(newValue));
            else throw new Error(`${key}에 대한 값이 유효하지 않습니다.`);
        };
        const jsonParsedValue = JSON.parse(_value || "");
        const value = valueType.parse(isStringIncludeQuotesOrDoubleQuotes(jsonParsedValue) ? removeQuotesOrDoubleQuotes(jsonParsedValue) : jsonParsedValue);
        return [
            value,
            setValue
        ];
    };
    return {
        setValue,
        getValue,
        key,
        resetValue,
        useMMKV
    };
}
const themeMMKV = createMMKVSchema({
    key: "theme",
    value: __WEBPACK_EXTERNAL_MODULE_zod__.z["enum"]([
        "light",
        "dark",
        "system"
    ])
});
const createStyle = (styleCallback)=>styleCallback;
const useThemeStyle = (styledCallback)=>{
    const [colorScheme] = themeMMKV.useMMKV();
    const colorSchemeFromSystem = (0, __WEBPACK_EXTERNAL_MODULE_react_native_4af9217e__.useColorScheme)();
    const isDark = "system" === colorScheme ? colorSchemeFromSystem : colorScheme;
    return styledCallback({
        themeColor: isDark ? colors.dark : colors.light,
        typo: typo_typo
    });
};
const HEADER_HEIGHT = 56;
const HEADER_HORIZONTAL_PADDING = 16;
const useHeaderStyle = ({ insets })=>{
    const styles = useThemeStyle(useHeaderStyle_headerStyle);
    return {
        headerStyle: [
            styles.container,
            {
                height: insets.top + HEADER_HEIGHT
            }
        ],
        tabBarActiveTintColor: styles.tabBarActiveTintColor.color,
        tabBarInactiveTintColor: styles.tabBarInactiveTintColor.color,
        tabBarStyle: styles.tabBarStyle,
        headerTitleStyle: styles.title
    };
};
const useHeaderStyle_headerStyle = createStyle(({ themeColor, typo })=>({
        container: {
            backgroundColor: themeColor.background.secondary
        },
        title: {
            fontSize: typo.sizes.bodyLarge,
            fontWeight: typo.weights.bold,
            color: themeColor.text.primary
        },
        tabBarStyle: {
            backgroundColor: themeColor.background.secondary,
            borderTopWidth: 0
        },
        tabBarActiveTintColor: {
            color: themeColor.brand.primary
        },
        tabBarInactiveTintColor: {
            color: themeColor.action.disabled
        }
    }));
function Header({ leftNode, title, rightNode, insets }) {
    const { headerStyle, headerTitleStyle } = useHeaderStyle({
        insets
    });
    return /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__["default"].createElement(__WEBPACK_EXTERNAL_MODULE_react_native_4af9217e__.View, {
        style: [
            headerStyle,
            Header_styles.header,
            {
                paddingTop: insets.top
            }
        ]
    }, /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__["default"].createElement(__WEBPACK_EXTERNAL_MODULE_react_native_4af9217e__.View, {
        style: Header_styles.flex1
    }, leftNode), /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__["default"].createElement(__WEBPACK_EXTERNAL_MODULE_react_native_4af9217e__.Text, {
        style: headerTitleStyle
    }, title), /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__["default"].createElement(__WEBPACK_EXTERNAL_MODULE_react_native_4af9217e__.View, {
        style: Header_styles.flex1
    }, rightNode));
}
const Header_styles = __WEBPACK_EXTERNAL_MODULE_react_native_4af9217e__.StyleSheet.create({
    flex1: {
        flex: 1
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 16
    }
});
function RadioButton({ children, checked, onCheckChange, style }) {
    const styles = useThemeStyle(themedStyles);
    const themeColor = useThemeColor();
    return /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__["default"].createElement(__WEBPACK_EXTERNAL_MODULE_react_native_4af9217e__.TouchableOpacity, {
        style: [
            styles.block,
            {
                backgroundColor: checked ? themeColor.action.primary : themeColor.action.disabled
            },
            style
        ],
        activeOpacity: 0.3,
        accessibilityRole: "radio",
        accessibilityState: {
            selected: checked
        },
        onPress: ()=>onCheckChange(!checked)
    }, children);
}
const themedStyles = createStyle(({ themeColor })=>({
        block: {
            padding: 32,
            borderRadius: 16,
            borderWidth: 1,
            borderColor: themeColor.border.default
        }
    }));
export { HEADER_HEIGHT, HEADER_HORIZONTAL_PADDING, Header, RadioButton, colors, createMMKVSchema, createStyle, mmkvStorage, themeMMKV, typo_typo as typo, useHeaderStyle, useThemeColor, useThemeStyle };
