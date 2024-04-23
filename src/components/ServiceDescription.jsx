function ServiceDescription() {
    return (
        <div className="mt-20 lg:my-20">
            <div className="flex flex-col h-full place-content-evenly grid col-2">
                <div>
                    <h2 className="text-neutral-50 text-center font-semibold w-3/4 lg:w-3/5 mx-auto pb-4 tracking-widest text-lg md:text-xl lg:text-2xl">LectorScan, your online gateway to a vast library of manga.</h2>
                    <h3 className="text-neutral-50 text-center font-medium w-3/4 lg:w-2/5 mx-auto py-2 tracking-widest text-base md:text-base lg:text-lg">We are committed to providing top-quality services and unparalleled support.</h3>
                </div>

                <div className="grid grid-cols-2 gap-5 lg:flex lg:justfiy-between w-full-screen mx-auto lg:space-x-14 mx-2 py-10">
                    <div className="flex flex-col items-center text-center">
                        <li className="list-none bg-neutral-50 border-2 border-red-600 rounded-full flex justify-center items-center w-16 h-16 my-3">
                            <i className='bx bxs-book-alt text-red-600 text-2xl'></i>
                        </li>
                        <p className="text-neutral-50 tracking-widest">Big Collection</p>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <li className="list-none bg-neutral-50 border-2 border-red-600 rounded-full flex justify-center items-center w-16 h-16 my-3">
                            <i className='bx bx-check text-red-600 text-3xl'></i>
                        </li>
                        <p className="text-neutral-50 tracking-widest">Access Solutions</p>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <li className="list-none bg-neutral-50 border-2 border-red-600 rounded-full flex justify-center items-center w-16 h-16 my-3">
                            <i className='bx bx-download text-red-600 text-2xl'></i>
                        </li>
                        <p className="text-neutral-50 tracking-widest">Manga Downloadable</p>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <li className="list-none bg-neutral-50 border-2 border-red-600 rounded-full flex justify-center items-center w-16 h-16 my-3">
                            <i className='bx bxs-search-alt-2 text-red-600 text-2xl'></i>
                        </li>
                        <p className="text-neutral-50 tracking-widest">Fast Search</p>
                    </div>

                    <div className="flex flex-col items-center col-span-2 text-center">
                        <li className="list-none bg-neutral-50 border-2 border-red-600 rounded-full flex justify-center items-center w-16 h-16 my-3">
                            <i className='bx bx-support text-red-600 text-2xl'></i>
                        </li>
                        <p className="text-neutral-50 tracking-widest">Customer Service</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceDescription;