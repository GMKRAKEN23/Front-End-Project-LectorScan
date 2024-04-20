import logo from '../../assets/img/lectorscan.png'
import ToggleMenu from '../Header/components/ToggleMenu'
import { useState } from 'react';

function Header() {

    const [toggleIsOpen, SetToogleIsOpen] = useState(false);

    const toggleMenu = () => {
        SetToogleIsOpen(!toggleIsOpen);
    }

    return (
        <header>
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-6" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="#">
                        <span><img src={logo} alt='logo_lectorscan' className='w-[80px] lg:[80px] lg:w-[150px] lg:h-[150px]' /></span>
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                        <span className="sr-only">Open main menu</span>
                        <svg className="h-9 w-9" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-10">
                    <a href="#" className="text-xl font-semibold leading-6 text-neutral-50 tracking-widest hover:text-red-600 hover:ease-in-out duration-500">One piece</a>
                    <a href="#" className="text-xl font-semibold leading-6 text-neutral-50 tracking-widest hover:text-red-600 hover:ease-in-out duration-500">My hero academia</a>
                    <a href="#" className="text-xl font-semibold leading-6 text-neutral-50 tracking-widest hover:text-red-600 hover:ease-in-out duration-500">Manga</a>
                    <div>
                        <a href="#" onClick={toggleMenu} className="text-xl font-semibold leading-6 text-neutral-50 tracking-widest hover:text-red-600 hover:ease-in-out duration-500">Pages</a>
                        <div className={`absolute z-10 w-full left-0 mt-[62px] max-w-md transition-opacity duration-300 ${toggleIsOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                            <ToggleMenu />
                        </div>
                    </div>
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:mt-2">
                    <a href="#" className="text-xl font-semibold leading-6 text-neutral-50 tracking-widest bg-red-600 rounded-lg px-5 py-1 me-2 mb-2 mx-2 transition duration-300 shadow_custom_red">Log in</a>
                </div>
            </nav>
        </header>
    )
}

export default Header