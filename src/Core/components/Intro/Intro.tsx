import './Intro.css'
import { useTranslation } from "react-i18next";
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
    faBootstrap
} from "@fortawesome/free-brands-svg-icons";
export default function Intro() {
    const [t,i18n] = useTranslation("global");
    return (
        <div id="intro" className="w-full mt-9 lg:my-40 flex gap-x-20 items-center justify-center grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1">
            <div className="col-span-1 w-full lg:w-auto flex flex-col justify-center items-end">
                <div className='w-full lg:max-w-xl flex flex-col gap-y-2'>
                    <div className="lg:inline-block text-center lg:text-start font-bold title-section">
                        <h5 className='inline-block typing p-1 text-3xl lg:text-5xl'>Front-End Developer</h5>
                        </div>
                    <div className='inline-block m-5 lg:m-auto text-1xl font-semibold subtitle-text text-center lg:text-justify'>
                        <span className='text-justify'>{t('intro.subtitle')}</span>
                        <img className='img-emoji-small inline-block mb-1' src={process.env.PUBLIC_URL + '/imgs/round-pushpin.png'} alt="" />
                    </div>
                    <div className='flex flex-row justify-center gap-x-10 lg:gap-x-0 lg:justify-between items-center'>
                        <div className='flex flex-row gap-x-1 lg:gap-x-2'>
                            <img className='img-emoji' src={process.env.PUBLIC_URL + '/imgs/emoji_man_technologist.png'} alt="" />
                            <img className='img-emoji' src={process.env.PUBLIC_URL + '/imgs/waving_hand.png'} alt="" />
                        </div>
                        <div className='flex flex-row gap-x-1 lg:gap-x-2'>
                            <a target='_blank' href='https://github.com/jorgegv98'>
                                <FontAwesomeIcon icon={faSquareGithub} className='hook-icons cursor-pointer' />
                            </a>
                            <a target='_blank' href='https://www.linkedin.com/in/jorge-garc%C3%ADa-villa/'>
                                <FontAwesomeIcon icon={faLinkedin} className='hook-icons cursor-pointer' />
                            </a>
                        </div>
                    </div>
                </div>
                <div className=' pt-10 lg:pt-20 justify-between gap-y-5 lg:gap-y-0 items-end flex flex-col w-full lg:w-auto justify-center items-center lg:justify-start lg:items-start lg:flex-row'>
                    <span className='font-bold text-1xl pr-1 lg:mr-10'>{t('intro.tecnologies')}</span>
                    <div className='flex flex-row gap-x-4 justify-center lg:justify-start'>
                        <FontAwesomeIcon icon={faHtml5} className='tech-icon html-icon' />
                        <FontAwesomeIcon icon={faCss3Alt} className='tech-icon css-icon' />
                        <FontAwesomeIcon icon={faJs} className='tech-icon js-icon' />
                        <FontAwesomeIcon icon={faAngular} className='tech-icon angular-icon ' />
                        <FontAwesomeIcon icon={faBootstrap} className='tech-icon bootstrap-icon' />
                        <FontAwesomeIcon icon={faReact} className='tech-icon react-icon' />
                        <FontAwesomeIcon icon={faFigma} className='tech-icon ' />

                    </div>
                </div>
            </div>
            <div className="col-span-1 py-8 lg:py-0 flex justify-center items-start lg:flex lg:justify-start lg:items-start">
                <img className="img-intro" src={process.env.PUBLIC_URL + '/imgs/jorge3.jpg'} alt="" />
            </div>
        </div>
    );
}