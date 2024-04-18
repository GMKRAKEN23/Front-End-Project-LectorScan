function ContentSlider({ name = "One Piece", chapter = "", date = "", time = "10", content = "", slider }) {
    return (
        <div className='flex justify-around items-center h-full lg:h-full'>
            <div className="lg:w-4/12 lg:mx-3 mt-4 flex flex-col gap-3 items-stretch">
                <h2 className="text-3xl uppercase text-center md:text-5xl lg:text-6xl font-semibold text-neutral-50 tracking-widest">{name}</h2>
                <h3 className="text-2xl uppercase text-center md:text-4xl lg:text-4xl font-semibold text-neutral-50 tracking-widest">{chapter}</h3>
                <p className="text-base text-center text-neutral-50 md:text-base lg:text-lg tracking-widest">{date}</p>
                <p className="text-sm mx-3 text-center mx-4  my-3  md:text-base lg:text-left mx-1 text-neutral-50 tracking-widest md:text-lg lg:text-lg">{content}</p>
                <p className="text-sm text-center text-neutral-50 md:text-base lg:text-xl tracking-widest">Reading time : <span className="bg-red-600 border-2 border-[#0a0a0a] lg:text-lg px-1">{time} min</span></p>
                <a href="#" className="mt-6 mx-5 py-3 px-2 text-center uppercase text-neutral-50 tracking-widest relative shadow_custom_red button lg:mx-0 lg:my-3 lg:text-2xl lg:py-5 transition duration-700 hover:bg-red-600">
                    <div className="button_read_before"></div>
                    <div className="button_read_after "></div>
                    read now
                </a>
            </div>
            <div>
                <div className='hidden lg:block  lg:mx-3'>
                    <img src={slider} alt="one_piece_content_one" className='w-full min-w-[668px] h-[70vh] rounded rounded-2xl brightness-110 shadow-custom' />
                </div>
            </div>
        </div>
    )
}

export default ContentSlider;