import './AboutMe.css'
export default function AboutMe() {
    return (
        <div className="w-full my-64 flex gap-x-20 grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1">
            <div className="col-span-1 flex justify-end items-end w-full h-full">
                <img className="img-about-me" src={process.env.PUBLIC_URL + '/imgs/jorge2.jpg'} />
            </div>
            <div className="col-span-1 w-full h-full grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1">
                <div className='flex flex-col gap-5'>
                    <div>
                        <div className="text-2xl font-bold">SOBRE MI</div>
                    </div>
                    <div className='inline-block text-1xl font-bold subtitle-text text-justify'>
                        <span>
                            Desde muy pequeño me encantaba diseñar y dibujar. Cuando empece a programar siempre tuve un gusto especial por
                            la maquetacion, la estructura de la información y el estilo. Como programador Front-End tengo conocimientos
                            sobre HTML, CSS, Javascript, TypeScript, herramientas de Mock-ups y bocetos como Figma, además
                            del uso de estas tecnologias para crear responsives websites.
                            Me he formado en ámbitos de trabajo de equipo y constante comunicación con el cliente para una buena calidad
                            de producto.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}