import React from 'react';

export default function Home() {
    return (
        <section>
            <div className="text-gray-300">
                <div className="container mx-auto flex flex-col items-center my-12">
                    <div className="text-center mb-10">
                        <h1 className="text-5xl text-indigo-400 mb-4">Bienvenidos</h1>
                        <h2 className="text-5xl mb-4">Conoce al Equipo</h2>
                        <p className="text-lg">
                            Conoce nuestros proyectos
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-10">
                        <div className="w-full md:w-1/2 lg:w-1/3 text-center">
                            <img
                                className="w-full max-w-xs md:max-w-sm lg:max-w-md h-auto mx-auto rounded-full"
                                src="https://avatars.githubusercontent.com/u/86480127?v=4"
                                alt="Carlos Martínez"
                            />
                            <h3 className="text-3xl mt-4">Carlos Martínez</h3>
                            <p className="text-lg mt-2">
                                Descripción de Carloxz sus habilidades y experiencia.
                            </p>
                            <div className="flex justify-center gap-4 mt-4">
                                <a href="https://instagram.com/carlos_instagram" target="_blank" rel="noopener noreferrer">
                                    <img src="/icons/instagram.svg" alt="Instagram" className="h-8 w-8" />
                                </a>
                                <a href="https://linkedin.com/in/carlos_linkedin" target="_blank" rel="noopener noreferrer">
                                    <img src="/icons/linkedin.svg" alt="LinkedIn" className="h-8 w-8" />
                                </a>
                                <a href="https://github.com/carlos_github" target="_blank" rel="noopener noreferrer">
                                    <img src="/icons/github.svg" alt="GitHub" className="h-8 w-8" />
                                </a>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/3 text-center">
                            <img
                                className="w-full max-w-xs md:max-w-sm lg:max-w-md h-auto mx-auto rounded-full"
                                src="https://avatars.githubusercontent.com/u/88956192?v=4"
                                alt="Emmanuel Bailón"
                            />
                            <h3 className="text-3xl mt-4">Emmanuel Bailón</h3>
                            <p className="text-lg mt-2">
                                Descripción sobre Emmanuel, sus habilidades y experiencia.
                            </p>
                            <div className="flex justify-center gap-4 mt-4">
                                <a href="https://instagram.com/emmanuel_instagram" target="_blank" rel="noopener noreferrer">
                                    <img src="/icons/instagram.svg" alt="Instagram" className="h-8 w-8" />
                                </a>
                                <a href="https://linkedin.com/in/emmanuel_linkedin" target="_blank" rel="noopener noreferrer">
                                    <img src="/icons/linkedin.svg" alt="LinkedIn" className="h-8 w-8" />
                                </a>
                                <a href="https://github.com/emmanuel_github" target="_blank" rel="noopener noreferrer">
                                    <img src="/icons/github.svg" alt="GitHub" className="h-8 w-8" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
