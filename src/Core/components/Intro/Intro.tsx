import './Intro.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSquareGithub,
    faLinkedin,
    faAngular,
    faReact,
    faHtml5,
    faCss3Alt,
    faJs,
    faFigma,
    faMdb
} from "@fortawesome/free-brands-svg-icons";
export default function Intro() {
    return (
        <div className="w-full mt-22 lg:my-40 flex gap-x-20 items-center justify-center grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1">
            <div className="col-span-1 w-full lg:w-auto flex flex-col justify-center items-end">
                <div className='w-full lg:max-w-xl flex flex-col gap-y-2'>
                    <div className="mx-5 lg:mx-0 lg:inline-block typing text-3xl lg:text-5xl font-bold">Front-End Developer</div>
                    <div className='inline-block m-5 lg:m-auto text-1xl font-bold subtitle-text text-justify'>
                        <span className='text-justify'>Hola! Soy Jorge García. Un apasionado del desarrollo Front-End y el diseño UX/UI.
                            Ubicado en Valencia, España.</span>
                        <img className='img-emoji-small inline-block mb-1' src={process.env.PUBLIC_URL + '/imgs/round-pushpin.png'} alt="" />
                    </div>
                    <div className='flex flex-row justify-between items-center mx-5 lg:mx-0'>
                        <div className='flex flex-row gap-x-2'>
                            <img className='img-emoji' src={process.env.PUBLIC_URL + '/imgs/emoji_man_technologist.png'} alt="" />
                            <img className='img-emoji' src={process.env.PUBLIC_URL + '/imgs/waving_hand.png'} alt="" />
                        </div>
                        <div className='flex flex-row gap-x-2'>
                            <FontAwesomeIcon icon={faSquareGithub} className='hook-icons' />
                            <FontAwesomeIcon icon={faLinkedin} className='hook-icons' />
                        </div>
                    </div>
                </div>
                <div className='pt-10 lg:pt-20 justify-between gap-y-5 lg:gap-y-0 items-end flex flex-col w-full lg:w-auto justify-center items-center lg:justify-start lg:items-start lg:flex-row'>
                    <span className='font-bold text-1xl techs pr-1 lg:mr-10'>Tecnologías </span>
                    <div className='flex flex-row gap-x-4'>
                        <FontAwesomeIcon icon={faHtml5} className='tech-icon html-icon' />
                        <FontAwesomeIcon icon={faCss3Alt} className='tech-icon css-icon' />
                        <FontAwesomeIcon icon={faJs} className='tech-icon js-icon' />
                        <FontAwesomeIcon icon={faAngular} className='tech-icon  ' />
                        <FontAwesomeIcon icon={faReact} className='tech-icon' />
                        <FontAwesomeIcon icon={faFigma} className='tech-icon' />
                        <FontAwesomeIcon icon={faMdb} className='tech-icon' />

                    </div>
                </div>
            </div>
            <div className="col-span-1 py-8 lg:py-0 flex justify-center items-start lg:flex lg:justify-start lg:items-start">
                <img className="img-intro" src={process.env.PUBLIC_URL + '/imgs/jorge.jpg'} alt="" />
            </div>
        </div>
    );
}