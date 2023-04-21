import { useState } from 'react'
import { Dialog, Popover } from '@headlessui/react'
import {
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import './Navbar.css';

function scrollTo(id: any) {
    document.querySelector(id).scrollIntoView({
        block: 'center',
        inline: 'center',
        behavior: 'smooth'
    });
}

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const goTo = (id: any) => {
        scrollTo(id)
    }

    const goToMobile = (id: any) => {
        setMobileMenuOpen(false)
        scrollTo(id)
    }

    return (
        <header id='header' className="bg-white">
            <nav className="mx-auto flex items-center justify-between p-6 lg:px-44" aria-label="Global">
                <div className="flex lg:flex-1">
                    <span className='text-2xl font-bold color-primary'>jorgegv.dev</span>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <Popover.Group className="hidden lg:flex lg:gap-x-12">
                    <a
                        onClick={() => { goTo('#header') }}
                        className="-mx-3 cursor-pointer block rounded-lg py-2 px-3 text-base font-bold leading-7"
                    >
                        Inicio
                    </a>
                    <a
                        onClick={() => { goTo('#about') }}
                        className="-mx-3 cursor-pointer block rounded-lg py-2 px-3 text-base font-bold leading-7"
                    >
                        Sobre mí
                    </a>
                    <a
                        onClick={() => { goTo('#experience') }}
                        className="-mx-3 cursor-pointer block rounded-lg py-2 px-3 text-base font-bold leading-7"
                    >
                        Carrera
                    </a>
                    <a
                        onClick={() => { goTo('#form') }}
                        className="-mx-3 cursor-pointer block rounded-lg py-2 px-3 text-base font-bold leading-7"
                    >
                        Contacto
                    </a>
                </Popover.Group>
            </nav>
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <div className="flex lg:flex-1">
                            <span className='text-2xl font-bold'>jorgegv.dev</span>
                        </div>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="w-full flex flex-col justify-center items-center">
                            <a
                                onClick={() => { goToMobile('#header') }}
                                className="-mx-3 block rounded-lg py-2 px-3 text-base font-bold leading-7"
                            >
                                Inicio
                            </a>
                            <a
                                onClick={() => { goToMobile('#about') }}
                                className="-mx-3 block rounded-lg py-2 px-3 text-base font-bold leading-7"
                            >
                                Sobre mí
                            </a>
                            <a
                                onClick={() => { goToMobile('#experience') }}
                                className="-mx-3 block rounded-lg py-2 px-3 text-base font-bold leading-7"
                            >
                                Carrera
                            </a>
                            <a
                                onClick={() => { goToMobile('#form') }}
                                className="-mx-3 block rounded-lg py-2 px-3 text-base font-bold leading-7"
                            >
                                Contacto
                            </a>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}
