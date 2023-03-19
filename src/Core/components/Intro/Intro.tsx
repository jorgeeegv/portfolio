import './Intro.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSquareGithub,
    faLinkedin,
    faAngular,
    faReact,
    faHtml5,
    faCss3,
    faJava,
    faCss3Alt,
    faJs,
    faFigma,
    faMdb
} from "@fortawesome/free-brands-svg-icons";
export default function Intro() {
    return (
        <div className="w-full my-40 flex gap-x-20 items-center justify-center grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1">
            <div className="col-span-1 flex flex-col justify-center items-end">
                <div className='max-w-xl flex flex-col gap-y-2'>
                    <div>
                        <div className="inline-block typing text-5xl font-bold">Front-End Developer</div>
                    </div>
                    <div className='inline-block text-1xl font-bold subtitle-text text-justify'>
                        <span className='text-justify'>Hola! Soy Jorge García. Un apasionado del desarrollo Front-End y el diseño UX/UI.
                            Ubicado en Valencia, España.</span>
                        <img className='img-emoji-small inline-block mb-1' src={process.env.PUBLIC_URL + '/imgs/round-pushpin.png'} alt="" />
                    </div>
                    <div className='flex flex-row justify-between items-center'>
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
                <div className='pt-20 justify-between items-end flex flex-row'>
                    <span className='font-bold text-1xl techs pr-1 mr-10'>Tecnologías </span>
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
            <div className="col-span-1">
                <img className="img-intro" src={process.env.PUBLIC_URL + '/imgs/jorge.jpg'} alt="" />
            </div>
        </div>
    );
}