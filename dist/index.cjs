"use strict";
var __webpack_require__ = {};
(()=>{
    __webpack_require__.d = (exports1, definition)=>{
        for(var key in definition)if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports1, key)) Object.defineProperty(exports1, key, {
            enumerable: true,
            get: definition[key]
        });
    };
})();
(()=>{
    __webpack_require__.o = (obj, prop)=>Object.prototype.hasOwnProperty.call(obj, prop);
})();
(()=>{
    __webpack_require__.r = (exports1)=>{
        if ('undefined' != typeof Symbol && Symbol.toStringTag) Object.defineProperty(exports1, Symbol.toStringTag, {
            value: 'Module'
        });
        Object.defineProperty(exports1, '__esModule', {
            value: true
        });
    };
})();
var __webpack_exports__ = {};
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
    typo: ()=>typo_typo,
    useThemeStyle: ()=>useThemeStyle,
    colors: ()=>colors,
    HEADER_HORIZONTAL_PADDING: ()=>HEADER_HORIZONTAL_PADDING,
    HEADER_HEIGHT: ()=>HEADER_HEIGHT,
    createStyle: ()=>createStyle,
    useHeaderStyle: ()=>useHeaderStyle
});
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
const external_react_native_namespaceObject = require("react-native");
const createStyle = (styleCallback)=>styleCallback;
const useThemeStyle = (styledCallback)=>{
    const colorScheme = (0, external_react_native_namespaceObject.useColorScheme)();
    const isDark = "dark" === colorScheme;
    return styledCallback({
        themeColor: isDark ? colors.dark : colors.light,
        typo: typo_typo
    });
};
const HEADER_HEIGHT = 56;
const HEADER_HORIZONTAL_PADDING = 16;
const useHeaderStyle = ({ insets })=>{
    const styles = useThemeStyle(headerStyle);
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
const headerStyle = createStyle(({ themeColor, typo })=>({
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
exports.HEADER_HEIGHT = __webpack_exports__.HEADER_HEIGHT;
exports.HEADER_HORIZONTAL_PADDING = __webpack_exports__.HEADER_HORIZONTAL_PADDING;
exports.colors = __webpack_exports__.colors;
exports.createStyle = __webpack_exports__.createStyle;
exports.typo = __webpack_exports__.typo;
exports.useHeaderStyle = __webpack_exports__.useHeaderStyle;
exports.useThemeStyle = __webpack_exports__.useThemeStyle;
for(var __webpack_i__ in __webpack_exports__)if (-1 === [
    "HEADER_HEIGHT",
    "HEADER_HORIZONTAL_PADDING",
    "colors",
    "createStyle",
    "typo",
    "useHeaderStyle",
    "useThemeStyle"
].indexOf(__webpack_i__)) exports[__webpack_i__] = __webpack_exports__[__webpack_i__];
Object.defineProperty(exports, '__esModule', {
    value: true
});
