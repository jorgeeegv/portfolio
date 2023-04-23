import { useTranslation } from 'react-i18next';
import './AboutMe.css'
export default function AboutMe() {
    const [t,i18n] = useTranslation("global");
    return (
        <div id='about' className="w-full mt-60 lg:mt-40 mb-56 lg:my-64 gap-y-10 flex gap-x-20 grid grid-cols-1 grid-rows-1 lg:grid-cols-2 lg:grid-rows-1">
            <div className="col-span-1 flex justify-center lg:justify-end items-end lg:w-full lg:h-full">
                <div className="lg:hidden md:hidden text-3xl text-center py-5 lg:text-start lg:p-0 font-bold color-primary">{t("about.title")}</div>
                <img className="hidden lg:block img-about-me deep-effect" src={process.env.PUBLIC_URL + '/imgs/jorge.jpg'} />
            </div>
            <div className="col-span-1 w-full grid grid-cols-1 grid-rows-1 lg:grid-cols-2 lg:grid-rows-1">
                <div className='flex flex-col gap-y-10 lg:gap-5'>
                    <div className='flex justify-center lg:block'>
                        <div className="hidden lg:flex text-3xl text-center py-5 lg:text-start lg:p-0 font-bold color-primary">{t("about.title")}</div>
                        <img className="lg:hidden md:hidden img-about-me deep-effect" src={process.env.PUBLIC_URL + '/imgs/jorge.jpg'} />
                    </div>
                    <div className='inline-block text-1xl font-weight-500 subtitle-text text-center lg:text-start '>
                        <span>
                        {t("about.content")}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}