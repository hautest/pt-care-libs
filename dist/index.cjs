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
    typo: ()=>typo,
    colors: ()=>colors
});
const colors = {
    light: {
        background: {
            primary: "#FFFFFF",
            secondary: "#F7F7F7",
            tertiary: "#EFEFEF"
        },
        surface: {
            primary: "#FFFFFF",
            secondary: "#F7F7F7",
            tertiary: "#EFEFEF"
        },
        text: {
            primary: "#000000",
            secondary: "#666666",
            tertiary: "#999999",
            inverse: "#FFFFFF"
        },
        brand: {
            primary: "#007AFF",
            secondary: "#5856D6"
        },
        accent: {
            blue: "#007AFF",
            green: "#34C759",
            indigo: "#5856D6",
            orange: "#FF9500",
            pink: "#FF2D55",
            purple: "#AF52DE",
            red: "#FF3B30",
            teal: "#5AC8FA",
            yellow: "#FFCC00"
        },
        border: {
            primary: "#E5E5E5",
            secondary: "#EFEFEF"
        },
        status: {
            success: "#34C759",
            warning: "#FFCC00",
            error: "#FF3B30",
            info: "#007AFF"
        }
    },
    dark: {
        background: {
            primary: "#000000",
            secondary: "#1C1C1E",
            tertiary: "#2C2C2E"
        },
        surface: {
            primary: "#1C1C1E",
            secondary: "#2C2C2E",
            tertiary: "#3A3A3C"
        },
        text: {
            primary: "#FFFFFF",
            secondary: "#EBEBF5",
            tertiary: "#EBEBF599",
            inverse: "#000000"
        },
        brand: {
            primary: "#0A84FF",
            secondary: "#5E5CE6"
        },
        accent: {
            blue: "#0A84FF",
            green: "#30D158",
            indigo: "#5E5CE6",
            orange: "#FF9F0A",
            pink: "#FF375F",
            purple: "#BF5AF2",
            red: "#FF453A",
            teal: "#64D2FF",
            yellow: "#FFD60A"
        },
        border: {
            primary: "#38383A",
            secondary: "#2C2C2E"
        },
        status: {
            success: "#30D158",
            warning: "#FFD60A",
            error: "#FF453A",
            info: "#0A84FF"
        }
    }
};
const typo = {
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
exports.colors = __webpack_exports__.colors;
exports.typo = __webpack_exports__.typo;
for(var __webpack_i__ in __webpack_exports__)if (-1 === [
    "colors",
    "typo"
].indexOf(__webpack_i__)) exports[__webpack_i__] = __webpack_exports__[__webpack_i__];
Object.defineProperty(exports, '__esModule', {
    value: true
});
