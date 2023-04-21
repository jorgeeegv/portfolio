import './AboutMe.css'
export default function AboutMe() {
    return (
        <div id='about' className="w-full mt-40 mb-56 lg:my-64 flex gap-x-20 grid grid-cols-1 grid-rows-1 lg:grid-cols-2 lg:grid-rows-1">
            <div className="col-span-1 lg:flex lg:justify-end lg:items-end lg:w-full lg:h-full">
                <img className="img-about-me deep-effect" src={process.env.PUBLIC_URL + '/imgs/jorge2.jpg'} />
            </div>
            <div className="col-span-1 w-full grid grid-cols-1 grid-rows-1 lg:grid-cols-2 lg:grid-rows-1">
                <div className='flex flex-col lg:gap-5'>
                    <div>
                        <div className="text-3xl text-center py-5 lg:text-start lg:p-0 font-bold color-primary">SOBRE MI</div>
                    </div>
                    <div className='inline-block text-1xl font-weight-500 subtitle-text text-center lg:text-start '>
                        <span>
                            Desde muy pequeño me encantaba diseñar y dibujar. Cuando empece a programar siempre tuve un gusto especial por
                            la maquetación, la estructura de la información y el estilo. Como programador Front-End tengo conocimientos
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