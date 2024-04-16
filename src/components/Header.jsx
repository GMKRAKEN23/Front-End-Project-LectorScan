import logo from './../assets/img/lectorscan.png'

function Header() {

    return (
        <header>
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-6" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="#">
                        <span><img src={logo} alt='logo_lectorscan'className='w-[150px] h-[150px]'/></span>
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                        <span className="sr-only">Open main menu</span>
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-10">  
                    <a href="#" className="text-xl font-semibold leading-6 text-neutral-50 tracking-widest hover:text-red-600 hover:ease-in-out duration-500">One piece</a>
                    <a href="#" className="text-xl font-semibold leading-6 text-neutral-50 tracking-widest hover:text-red-600 hover:ease-in-out duration-500">My hero academia</a>
                    <a href="#" className="text-xl font-semibold leading-6 text-neutral-50 tracking-widest hover:text-red-600 hover:ease-in-out duration-500">Manga</a>
                    <a href="#" className="text-xl font-semibold leading-6 text-neutral-50 tracking-widest hover:text-red-600 hover:ease-in-out duration-500">Pages</a>
           
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:mt-2">
                    <a href="#" className="text-xl font-semibold leading-6 text-neutral-50 tracking-widest bg-red-600 rounded-lg  px-5 py-1 me-2 mb-2 mx-2">Log in</a>
                </div>
            </nav>
        </header>
    )
}

export default Header