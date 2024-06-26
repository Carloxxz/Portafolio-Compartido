import { useEffect, useState } from 'react';
import SliderTech from '../components/home/SliderTech';
import Icons from '../components/home/icons';

export default function Home() {

    const [animte, setAnimate] = useState(false)

    useEffect(() => {
        setAnimate(true)
    }, [])

    return (
        <div className={`${animte ? 'animate-fadeIn' : ''} w-full flex flex-col`}>
            <section>
                <div className="text-gray-300">
                    <div className="container mx-auto flex flex-col items-center my-12 max-w-screen-xl">
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
                                <Icons person="Carlos" />
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
                                <Icons person="Emmanuel" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="items-center overflow-hidden sm:ml-0 md:ml-2  bg-gradient-to-t from-gray-900 to-gray-950">
                <div className="flex flex-col gap-10">
                    <h1 className="text-5xl text-indigo-300 text-center">Stack</h1>
                    <SliderTech />
                </div>
            </section>
        </div>
    );
}
