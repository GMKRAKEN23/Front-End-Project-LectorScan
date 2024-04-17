function ToggleMenu() {
    return (
        <div className="bg-[#0a0a0a] w-screen flex gap-4 place-content-evenly p-5 shadow-black shadow-md">
            <li className="text-neutral-50 transition duration-300 list-none flex items-center flex-col text-base hover:text-red-600 cursor-pointer tracking-widest font-semibold"><span className="text-neutral-50 p-2.5 text-2xl"><i className='bx bxs-home-alt-2'></i></span>Home</li>
            <li className="text-neutral-50 transition duration-300 list-none flex items-center flex-col text-base hover:text-red-600 cursor-pointer tracking-widest font-semibold"><span className="text-neutral-50 p-2.5 text-2xl"><i className='bx bx-book-open'></i></span>Manga</li>
            <li className="text-neutral-50 transition duration-300 list-none flex items-center flex-col text-base hover:text-red-600 cursor-pointer tracking-widest font-semibold"><span className="text-neutral-50 p-2.5 text-2xl"><i className='bx bx-log-in'></i></span>Log in</li>
            <li className="text-neutral-50 transition duration-300 list-none flex items-center flex-col text-base hover:text-red-600 cursor-pointer tracking-widest font-semibold"><span className="text-neutral-50 p-2.5 text-2xl"><i className='bx bx-log-out'></i></span>Log out</li>
        </div>
    );
}

export default ToggleMenu;