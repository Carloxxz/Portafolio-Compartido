import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";

export default function Layout() {
    return (
        <div className="flex bg-gray-950 min-h-screen">

            <Sidebar />

            <main className="w-full ml-64">
                <Outlet />
            </main>
        </div>
    )
}
