import Navigation from "@/src/components/navigation";

import { Outlet } from "react-router";

function MainLayout() {
    return (
        <div className="h-full flex flex-col w-full bg-gray-200">
            <Navigation />
            <Outlet />
        </div>
    );
};

export default MainLayout;