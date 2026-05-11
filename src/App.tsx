import {RouterProvider} from "react-router";
import GetRouter from "./router/GetRouter.tsx";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./styles/theme.ts";
import { GlobalStyle } from "./styles/GlobalStyle.tsx";

function App() {
    return (
        <ThemeProvider theme={lightTheme}>
            {/* 테마에서 꺼내야하기때문에 글로벌스타일도 이 안으로 들어옴 */}
            <GlobalStyle />
            <RouterProvider router={GetRouter}></RouterProvider>;
        </ThemeProvider>
    );
}

export default App;
