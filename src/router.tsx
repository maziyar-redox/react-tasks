import { StrictMode } from "react";
import { createBrowserRouter } from "react-router";

import MainLayout from "@/src/components/layout/main";
import ErrorLayout from "@/src/components/layout/error";

import NotFoundPage from "@/src/pages/error/notfound";
import HomePage from "@/src/pages/home";

import ProductPage from "@/src/pages/product";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <StrictMode>
                <MainLayout />
            </StrictMode>
        ),
        children: [
            { index: true, Component: HomePage },
            {
                path: "product/:id",
                Component: ProductPage,
            }
        ],
    },
    {
        path: "*",
        element: (
            <StrictMode>
                <ErrorLayout>
                    <NotFoundPage />
                </ErrorLayout>
            </StrictMode>
        ),
    }
]);

export default router;