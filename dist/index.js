const colors = {
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
export { colors, typo };
