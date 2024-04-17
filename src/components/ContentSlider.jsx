function ContentSlider({name="One Piece", chapter="",  date="", time="10", content="", slider }){

    return(
        <div className='flex lg:justify-around lg:items-center lg:h-full'>
            <div className='lg:w-4/12 lg:mx-3 flex flex-col'>
                <h2 className='text-4xl text-center lg:text-6xl font-semibold text-neutral-50 my-3 tracking-widest'>{name}</h2>
                <h3 className='text-4xl text-center font-semibold text-neutral-50 my-3 tracking-widest'>{chapter}</h3>
                <p className='text-center text-neutral-50 my-3 tracking-widest'>{date}</p>
                <p className='text-center mx-1 text-neutral-50 my-3 tracking-widest text-lg'>{content}</p>
                <p className='text-center text-neutral-50 my-3 text-xl tracking-widest'>Reading time : <span className="bg-red-600 border-2 border-[#0a0a0a] text-lg px-1">{time} min</span></p>
                <a href="#" className='text-neutral-50 my-3 uppercase text-2xl py-5 text-center transition duration-700 tracking-widest relative hover:bg-red-600 
                  shadow_custom_red button'>
                <div className="button_read_before"></div>
                <div className="button_read_after "></div>
                read now
                </a>

            </div>
            <div>
                <div className='hidden lg:block  lg:mx-3'>
                   <img src={slider} alt="one_piece_content_one" className='w-full min-w-[668px] h-[70vh] rounded rounded-2xl brightness-110 shadow-custom'/> 
                </div>
            </div>
        </div>
    )
}

export default ContentSlider;