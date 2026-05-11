import { createBrowserRouter } from "react-router";
import Homepage from "../pages/Homepage.tsx";
import SignInPage from "../pages/auth/signin/SignInPage.tsx";
import SignUpPage from "../pages/auth/signUp/SignUpPage.tsx";
import MainLayout from "../layouts/MainLayout.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { index: true, element: <Homepage /> },
            {
                path: "auth",
                children: [
                    { path: "signin", element: <SignInPage /> },
                    { path: "signup", element: <SignUpPage /> },
                ],
            },
        ],
    },
]);

export default router;
