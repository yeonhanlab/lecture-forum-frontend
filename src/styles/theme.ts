import type { DefaultTheme } from "styled-components";

// 인터페이스는 상속이 가능하고 타입은 상속이 불가능
// 인터페이스에서 나눠줄때 ;(세미콜론)으로 나눠줌. 타입도(
// 아래서는 프로퍼티를 나눠줄때 ,(쉼표)를 써줌(구분하는 역할)

export const lightTheme: DefaultTheme = {
    colors: {
        background: {
            default: "#F3F4F6",
            paper: "#FFFFFE"
        },
        text: {
            default: "#1F2937",
            disabled: "#9CA3AF",
        },
        divider: "#E5E7EB",
        primary: "#2563EB",
        secondary: "#4B5563",
        success: "#10B981",
        error: "#EF4444",
        warning: "#F59E0B",
        info: "#eB82F6",
    },
};

export const darkTheme: DefaultTheme = {
    colors: {
        background: {
            default: "#111827",
            paper: "#1F2937",
        },
        text: {
            default: "#F9FAFB",
            disabled: "#6B7290",
        },
        divider: "#374151",
        primary: "#3B82F6",
        secondary: "#9CA3AF",
        success: "#34D399",
        error: "#F87171",
        warning: "#FBBF24",
        info: "#60A5FA",
    },
};