import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";

export default function Layout() {
    return (
        <div className="flex bg-gray-500 min-h-screen">
            <Sidebar />
            <main>
                <Outlet />
            </main>
        </div>
    )
}
