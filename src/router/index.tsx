import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../components/layouts";
import { HomePage, LoginPage, NotFoundPage, PricingPage, ProfilePage, RegisterPage } from "../pages";


export const router = createBrowserRouter(
    [{
        path: "/",
        element: <MainLayout />,
        children: [
            { index: true, element: <HomePage />},
            { path: 'pricing', element: <PricingPage />},
            { path: 'profile', element: <ProfilePage />},
            { path: 'login', element: <LoginPage />},
            { path: 'register', element: <RegisterPage />},
            { path: '*', element: <NotFoundPage />}
        ],
    }],
    {
        basename: import.meta.env.BASE_URL,
    }
)