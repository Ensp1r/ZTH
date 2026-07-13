import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../components/layouts";
import { HomePage, NotFoundPage, PricingPage } from "../pages";


export const router = createBrowserRouter(
    [{
        path: "/",
        element: <MainLayout />,
        children: [
            { index: true, element: <HomePage />},
            { path: 'pricing', element: <PricingPage />},
            { path: 'тарифы', element: <PricingPage />},
            { path: 'login', element: (
                    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'EvergrowSans, sans-serif' }}>
                        <p>Страница входа — в разработке</p>
                    </div>
                )
            },
            { path: 'register', element: (
                    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'EvergrowSans, sans-serif' }}>
                        <p>Регистрация — в разработке</p>
                    </div>
                )
            },
            { path: '*', element: <NotFoundPage />}
        ],
    }],
    {
        basename: import.meta.env.BASE_URL,
    }
)