import { Link } from "react-router-dom";

export default function SidebarItem() {
    return (
        <div className="p-5 hover:bg-indigo-800 transition-colors">
            <Link to={'/home'}>
                <div className="flex flex-col">
                    <span className="text-gray-200">Proyecto Numero *</span>
                    <span className="text-gray-400">Descripción</span>
                </div>
            </Link>
        </div>
    )
}
