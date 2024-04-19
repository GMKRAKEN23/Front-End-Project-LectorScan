import logo from "../../assets/img/lectorscan.png"
function Footer() {
    return (
        <div className="background-footer lg:grid lg:grid-cols-2 lg:gap-4">
            <div className="lg:flex lg:order-2 lg:justify-around">
                <div className="py-5">
                    <h2 className="text-base text-center text-neutral-50 py-1 lg:text-lg"><a href="#">Product Declarations</a></h2>
                    <h2 className="text-base text-center text-neutral-50 py-1 lg:text-lg"><a href="#">Terms Of Use</a></h2>
                    <h2 className="text-base text-center text-neutral-50 py-1 lg:text-lg"><a href="#">Privacy Policy</a></h2>
                    <h2 className="text-base text-center text-neutral-50 py-1 lg:text-lg"><a href="#">Partners</a></h2>
                </div>
                <div className="my-5">
                    <h2 className="text-base text-center text-neutral-50 py-1 lg:text-lg"><a href="#">About Us</a></h2>
                    <h2 className="text-base text-center text-neutral-50 py-1 lg:text-lg"><a href="#">Contacts</a></h2>
                    <h2 className="text-base text-center text-neutral-50 py-1 lg:text-lg"><a href="#">Pricing</a></h2>
                    <h2 className="text-base text-center text-neutral-50 py-1 lg:text-lg"><a href="#">Faq</a></h2>
                    <h2 className="text-base text-center text-neutral-50 py-1 lg:text-lg"><a href="#">Help</a></h2>
                </div>
                <div className="my-5">
                    <h2 className="text-base text-center text-neutral-50 py-1 lg:text-lg"><a href="#">Blog</a></h2>
                    <h2 className="text-base text-center text-neutral-50 py-1 lg:text-lg"><a href="#">Podcasts</a></h2>
                </div>
            </div>

            <div className="lg:flex lg:flex-col lg:order-1">
                <div className="lg:flex lg:flex-col">
                    <div className="hidden lg:block">
                        <img src={logo} alt="logo_lectorscan" className="w-[80px] h-[80px] lg:w-[120px] lg:h-[120px] mx-auto" />
                        <p className="lg:text-lg lg:pl-7 text-neutral-50 ">LectorScan est une plateforme en ligne qui offre un accès à une vaste bibliothèque de mangas,
                            permettant aux utilisateurs de lire des chapitres de leurs séries préférées.
                           </p>
                    </div>
                    <ul className="flex justify-between md:justfiy-around md:w-3/6 w-4/6 mx-auto py-2 lg:my-7 lg:mx-0 lg:pl-7">
                        <li className="bg-black rounded-full flex justify-center items-center w-12 h-12 cursor-pointer text-base text-neutral-50 "><i className='bx bxl-facebook text-lg'></i></li>
                        <li className="bg-black rounded-full flex justify-center items-center w-12 h-12 cursor-pointer text-base text-neutral-50"><i className='bx bxl-instagram text-lg'></i></li>
                        <li className="bg-black rounded-full flex justify-center items-center w-12 h-12 cursor-pointer text-base text-neutral-50"><i className='bx bxl-twitter text-lg'></i></li>
                        <li className="bg-black rounded-full flex justify-center items-center w-12 h-12 cursor-pointer text-base text-neutral-50"><i className='bx bxl-tiktok text-lg'></i></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer;