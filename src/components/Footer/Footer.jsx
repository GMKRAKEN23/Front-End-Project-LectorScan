import logo from "../../assets/img/lectorscan.png"
function Footer() {
    return (
        <div className="background-black lg:grid lg:grid-cols-2 lg:items-center lg:gap-4 py-4">
            <div className="lg:order-2 lg:flex-col flex justify-around ">
                <div className="grid grid-cols-1 md:grid-cols-3 md:gap-16 lg:gap-10 ">
                    <div className="py-5">
                        <h3 className="text-center md:text-left text-neutral-50 lg:block text-lg font-bold tracking-widest mb-2">Community</h3>
                        <h2 className="text-base text-center md:text-left text-neutral-50 py-1 lg:text-lg tracking-widest hover:text-red-600"><a href="#">Product Declarations</a></h2>
                        <h2 className="text-base text-center md:text-left text-neutral-50 py-1 lg:text-lg tracking-widest hover:text-red-600"><a href="#">Terms Of Use</a></h2>
                        <h2 className="text-base text-center md:text-left text-neutral-50 py-1 lg:text-lg tracking-widest hover:text-red-600"><a href="#">Privacy Policy</a></h2>
                        <h2 className="text-base text-center md:text-left text-neutral-50 py-1 lg:text-lg tracking-widest hover:text-red-600"><a href="#">Partners</a></h2>
                        <h2 className="text-base text-center md:text-left text-neutral-50 py-1 lg:text-lg tracking-widest hover:text-red-600"><a href="#">Others</a></h2>
                    </div>
                    <div className="my-5 col-span-1 mx-auto">
                        <h3 className="text-center md:text-left text-neutral-50 lg:block text-lg font-bold tracking-widest mb-2">Company</h3>
                        <h2 className="text-base text-center md:text-left text-neutral-50 py-1 lg:text-lg tracking-widest hover:text-red-600"><a href="#">About Us</a></h2>
                        <h2 className="text-base text-center md:text-left text-neutral-50 py-1 lg:text-lg tracking-widest hover:text-red-600"><a href="#">Contacts</a></h2>
                        <h2 className="text-base text-center md:text-left text-neutral-50 py-1 lg:text-lg tracking-widest hover:text-red-600"><a href="#">Pricing</a></h2>
                        <h2 className="text-base text-center md:text-left text-neutral-50 py-1 lg:text-lg tracking-widest hover:text-red-600"><a href="#">Faq</a></h2>
                        <h2 className="text-base text-center md:text-left text-neutral-50 py-1 lg:text-lg tracking-widest hover:text-red-600"><a href="#">Help</a></h2>
                    </div>
                    <div className="my-5">
                        <h3 className="text-neutral-50 text-center md:text-left lg:block text-lg font-bold tracking-widest mb-2">Information</h3>
                        <h2 className="text-base text-center md:text-left text-neutral-50 py-1 lg:text-lg tracking-widest hover:text-red-600"><a href="#">Blog</a></h2>
                        <h2 className="text-base text-center md:text-left text-neutral-50 py-1 lg:text-lg tracking-widest hover:text-red-600"><a href="#">Podcasts</a></h2>
                    </div>
                </div>

                <div className="newsletter hidden lg:block lg:flex lg:flex-col lg:items-end lg:w-11/12">
                    <h3 className="lg:text-lg lg:text-neutral-50 lg:font-semibold lg:mb-2.5 tracking-widest">Newsletter</h3>
                    <div className="w-1/5 h-1.5 bg-neutral-50 relative overflow-hidden rounded mb-6">
                        <span className="w-[2.5rem] bg-red-600 absolute h-1.5 rounded moving"></span>
                    </div>
                    <form action="#" className="border-b-2 border-neutral-50 flex items-center space-x-1 w-[22rem]">
                        <i className='bx bx-envelope text-neutral-50 text-lg'></i>
                        <input type="email" placeholder="email@hotmail.com" className="bg-transparent outline-none border-0 text-neutral-50 placeholder:text-neutral-50 p-2" required />
                        <button type="submit"><i className='bx bx-right-arrow-alt text-neutral-50 text-lg'></i></button>
                    </form>
                </div>
            </div>

            <div className="lg:flex lg:flex-col lg:order-1 h-full">
                <div className="lg:flex lg:flex-col h-full justify-between">
                    <div className="hidden lg:block">
                        <img src={logo} alt="logo_lectorscan" className="w-[80px] h-[80px] lg:w-[150px] lg:h-[150px] mx-auto" />
                        <p className="lg:text-lg lg:pl-7 text-neutral-50 ">LectorScan is an online platform that provides access to an extensive library of manga, 
                        allowing users to read chapters from their favorite series.
                        </p>
                    </div>
                    <ul className="flex justify-between md:justify-around md:w-3/6 w-4/6 mx-auto py-2  lg:mx-auto lg:pl-7 ">
                        <li className="bg-black rounded-full flex justify-center items-center w-12 h-12 cursor-pointer text-base text-red-600 border-2 border-red-600 shadow-white hover:bg-neutral-50"><i className='bx bxl-facebook text-lg'></i></li>
                        <li className="bg-black rounded-full flex justify-center items-center w-12 h-12 cursor-pointer text-base text-red-600 border-2 border-red-600 shadow-white hover:bg-neutral-50"><i className='bx bxl-instagram text-lg'></i></li>
                        <li className="bg-black rounded-full flex justify-center items-center w-12 h-12 cursor-pointer text-base text-red-600 border-2 border-red-600 shadow-white hover:bg-neutral-50"><i className='bx bxl-twitter text-lg'></i></li>
                        <li className="bg-black rounded-full flex justify-center items-center w-12 h-12 cursor-pointer text-base text-red-600 border-2 border-red-600 shadow-white hover:bg-neutral-50"><i className='bx bxl-tiktok text-lg'></i></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer;