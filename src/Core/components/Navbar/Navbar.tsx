import { useEffect, useState } from 'react'
import { Dialog, Popover } from '@headlessui/react'
import {
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline';
import './Navbar.css';
import { useTranslation } from 'react-i18next';
import { scrollTo } from '../../../Utils/window.utils';


export default function Navbar() {
    const [t, i18n] = useTranslation("global");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrollToMobile, goScrollMobile] = useState(null);
    const goTo = (id: any) => {
        scrollTo(id, 'center', 'center')
    }

    const goToMobile = (id: any) => {
        goScrollMobile(id);
        setMobileMenuOpen(false)
    }
    useEffect(() => {
        if (scrollToMobile) scrollTo(scrollToMobile, 'center', 'center')
    }, [scrollToMobile])

    useEffect(() => {

    }, [i18n.language])

    return (
        <header id='header' className="bg-white">
            <nav className="mx-auto flex items-center justify-between p-6 lg:px-44" aria-label="Global">
                <div className="flex lg:flex-1">
                    <span className='text-2xl font-bold color-primary main-title'>jorgegv.dev</span>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 color-primary"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <Popover.Group className="hidden lg:flex lg:gap-x-40">
                    <div className="flex gap-x-12">
                        <a
                            onClick={() => { goTo('#intro') }}
                            className="cursor-pointer desktop-nav-button block rounded-lg py-2 px-3 text-base font-bold leading-7"
                        >
                            {t("navbar.button.init")}
                        </a>
                        <a
                            onClick={() => { goTo('#about') }}
                            className="cursor-pointer desktop-nav-button block rounded-lg py-2 px-3 text-base font-bold leading-7"
                        >
                            {t("navbar.button.about")}
                        </a>
                        <a
                            onClick={() => { goTo('#experience') }}
                            className="cursor-pointer desktop-nav-button block rounded-lg py-2 px-3 text-base font-bold leading-7"
                        >
                            {t("navbar.button.experience")}
                        </a>
                        <a
                            onClick={() => { goTo('#form') }}
                            className="cursor-pointer desktop-nav-button block rounded-lg py-2 px-3 text-base font-bold leading-7"
                        >
                            {t("navbar.button.contact")}
                        </a>
                        <a
                            href={process.env.PUBLIC_URL + '/docs/cv_'+i18n.language +'.pdf'}
                            target='_blank'
                            className="cursor-pointer desktop-nav-button button-primary block rounded-lg py-2 text-base font-bold leading-7"
                        >
                            {t("navbar.button.cv")}
                        </a>
                    </div>
                    <div className='flex items-center justify-end gap-x-5'>
                        <img onClick={() => { i18n.changeLanguage('es') }} src={process.env.PUBLIC_URL + '/imgs/es.png'} className={'icon language-icon ' + ((i18n.language && i18n.language === 'es') ? 'deep-effect' : 'language-icon-disabled ')} />
                        <img onClick={() => { i18n.changeLanguage('en') }} src={process.env.PUBLIC_URL + '/imgs/en.png'} className={'icon language-icon ' + ((i18n.language && i18n.language === 'en') ? 'deep-effect' : 'language-icon-disabled ')} />
                    </div>
                </Popover.Group>
            </nav>
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <div className="flex lg:flex-1">
                            <span className='text-2xl font-bold color-primary main-title'>jorgegv.dev</span>
                        </div>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 color-primary"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <XMarkIcon className="h-6 w-6 color-primary" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="w-full flex flex-col justify-center items-center">
                            <a
                                onClick={() => { goToMobile('#intro') }}
                                className="-mx-3 block color-primary rounded-lg py-2 px-3 text-base font-bold leading-7"
                            >
                                {t("navbar.button.init")}
                            </a>
                            <a
                                onClick={() => { goToMobile('#about') }}
                                className="-mx-3 block color-primary rounded-lg py-2 px-3 text-base font-bold leading-7"
                            >
                                {t("navbar.button.about")}
                            </a>
                            <a
                                onClick={() => { goToMobile('#experience') }}
                                className="-mx-3 block color-primary rounded-lg py-2 px-3 text-base font-bold leading-7"
                            >
                                {t("navbar.button.experience")}
                            </a>
                            <a
                                onClick={() => { goToMobile('#form') }}
                                className="-mx-3 block color-primary rounded-lg py-2 px-3 text-base font-bold leading-7"
                            >
                                {t("navbar.button.contact")}
                            </a>
                            <a
                                href={process.env.PUBLIC_URL + '/docs/cv_ES.pdf'}
                                target='_blank'
                                className="-mx-3 block color-primary rounded-lg py-2 px-3 text-base font-bold leading-7"
                            >
                                {t("navbar.button.cv")}
                            </a>
                        </div>
                        <div className='flex items-center justify-end gap-x-5 mt-10'>
                            <img onClick={() => { i18n.changeLanguage('es') }} src={process.env.PUBLIC_URL + '/imgs/es.png'} className={'icon language-icon ' + ((i18n.language && i18n.language === 'es') ? 'deep-effect' : 'language-icon-disabled ')} />
                            <img onClick={() => { i18n.changeLanguage('en') }} src={process.env.PUBLIC_URL + '/imgs/en.png'} className={'icon language-icon ' + ((i18n.language && i18n.language === 'en') ? 'deep-effect' : 'language-icon-disabled ')} />
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}
