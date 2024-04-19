function Footer (){
    return (
        <div className="background-footer">
            <div className="py-5">
                <h2 className="text-lg text-center text-neutral-50 py-1"><a href="#">Product Declarations</a></h2>
                <h2 className="text-lg text-center text-neutral-50 py-1"><a href="#">Terms Of Use</a></h2>
                <h2 className="text-lg text-center text-neutral-50 py-1"><a href="#">Privacy Policy</a></h2>
                <h2 className="text-lg text-center text-neutral-50 py-1"><a href="#">Partners</a></h2>
            </div>
            <div className="my-5">
                <h2 className="text-lg text-center text-neutral-50 py-1"><a href="#">About Us</a></h2>
                <h2 className="text-lg text-center text-neutral-50 py-1"><a href="#">Contacts</a></h2>
                <h2 className="text-lg text-center text-neutral-50 py-1"><a href="#">Pricing</a></h2>
                <h2 className="text-lg text-center text-neutral-50 py-1"><a href="#">Faq</a></h2>
                <h2 className="text-lg text-center text-neutral-50 py-1"><a href="#">Help</a></h2>
            </div>
            <div className="my-5">
                <h2 className="text-lg text-center text-neutral-50 py-1"><a href="#">Blog</a></h2>
                <h2 className="text-lg text-center text-neutral-50 py-1"><a href="#">Podcasts</a></h2>
            </div>
            <div>
                <ul className="flex justify-between w-4/6 mx-auto py-2">
                    <li className="bg-black rounded-full flex justify-center items-center w-12 h-12 cursor-pointer text-base text-neutral-50"><i className='bx bxl-facebook text-2xl'></i></li>
                    <li className="bg-black rounded-full flex justify-center items-center w-12 h-12 cursor-pointer text-base text-neutral-50"><i className='bx bxl-instagram text-2xl'></i></li>
                    <li className="bg-black rounded-full flex justify-center items-center  w-12 h-12 cursor-pointer text-base text-neutral-50"><i className='bx bxl-twitter text-2xl'></i></li>
                    <li className="bg-black rounded-full flex justify-center items-center w-12 h-12 cursor-pointer text-base text-neutral-50"><i className='bx bxl-tiktok text-2xl'></i></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;