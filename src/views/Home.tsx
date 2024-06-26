export default function Home() {
    return (
        <section>
            <div className="text-gray-300">
                <div className="container mx-auto flex flex-col md:flex-row items-center my-12">
                    <div className="w-full md:w-1/2 lg:w-1/3 px-10 mb-10 md:mb-0">
                        <h1 className="text-5xl text-indigo-400 mb-4">Home Page</h1>
                        <h2 className="text-5xl mb-4">Descripción</h2>
                        <p className="text-lg">
                            *Modificar despues* 
                            Pagina dedicada a mostrar solo una estructura basica de lo que puede ser una home page
                            TODO: no olvidar poner mas contenido en la parte inferior mostrando las tecnologias
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-2/3 flex flex-wrap justify-center gap-5">
                        <img className="w-full max-w-xs md:max-w-sm lg:max-w-md h-auto" src="https://avatars.githubusercontent.com/u/86480127?v=4" alt="Image 1" />
                        <img className="w-full max-w-xs md:max-w-sm lg:max-w-md h-auto" src="https://avatars.githubusercontent.com/u/88956192?v=4" alt="Image 2" />
                    </div>
                </div>
            </div>
        </section>
    )
}
