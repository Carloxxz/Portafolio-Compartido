import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";

export default function Layout() {
    return (
        <div className="flex bg-gray-950 min-h-screen">

            <Sidebar />

            <main className="flex-1 sm:ml-0 md:ml-64 overflow-y-auto">
                <div className="container mx-auto py-6">
                    <Outlet />
                </div>
            </main>
        </div>
    );
}
