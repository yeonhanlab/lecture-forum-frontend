import {RouterProvider} from "react-router";
import GetRouter from "./router/GetRouter.tsx";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styles/theme.ts";
import { GlobalStyle } from "./styles/GlobalStyle.tsx";
import { useEffect, useState } from "react";
import  { ThemeContext, type ThemeType } from "./contexts/theme/ThemeContext.ts";

function App() {
    const [theme, setTheme] = useState<ThemeType>(() => {
        const savedTheme = localStorage.getItem("theme");
        return savedTheme === "dark" ? "dark" : "light";
    });

    const onChangeTheme = () => {
        setTheme(prev => prev === "light" ? "dark" : "light"); //prev에는 원래 state에서 갖고있던 값이 들어감
    }


    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, onChangeTheme}}>
            <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
                {/* 테마에서 꺼내야하기때문에 글로벌스타일도 이 안으로 들어옴 */}
                <GlobalStyle />
                <RouterProvider router={GetRouter}></RouterProvider>;
            </ThemeProvider>
        </ThemeContext.Provider>
    );
}

export default App;
