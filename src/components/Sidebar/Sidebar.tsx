import SidebarItem from "./SidebarItem";

export default function Sidebar() {
    return (
        <>
            <nav className="hidden md:block flex-col bg-gradient-to-b from-indigo-950 to-indigo-800 min-h-screen max-w-60 m-3 rounded-xl">
                <div className="">
                    <header className="p-5 items-center">
                        <h1 className="text-gray-200 text-4xl mb-3">
                            Vista de <span className="text-indigo-300">Proyectos</span>
                        </h1>
                        <p className="text-gray-200 text-sm">
                            Selecciona el proyecto que deseas ver
                        </p>
                    </header>

                    <div className="mt-1 w-full">
                        <SidebarItem />
                        <SidebarItem />
                        <SidebarItem />
                    </div>
                </div>
            </nav>
        </>
    )
}
