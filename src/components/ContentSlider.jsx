function ContentSlider({name="One Piece", chapter="",  date="", time="10", content="", slider }){

    return(
        <div className='flex justify-around items-center h-full'>
            <div className='w-4/12 mx-3 flex flex-col'>
                <h2 className='text-6xl font-semibold text-neutral-50 my-3 tracking-widest'>{name}</h2>
                <h3 className='text-4xl font-semibold text-neutral-50 my-3 tracking-widest'>{chapter}</h3>
                <p className='text-neutral-50 my-3 tracking-widest'>{date}</p>
                <p className='text-neutral-50 my-3 tracking-widest text-lg'>{content}</p>
                <p className='text-neutral-50 my-3 text-xl'>Reading time : <span className="bg-red-600 border-2 border-[#0a0a0a] text-lg px-1">{time} min</span></p>
                <a href="#" className='text-neutral-50 my-3 uppercase text-2xl py-5 text-center transition duration-700 tracking-widest relative hover:bg-red-600 
                  shadow_custom_red'>
                <div className="button_read_before"></div>
                <div className="button_read_after "></div>
                read now
                </a>

            </div>
            <div>
                <div className='mx-3'>
                   <img src={slider} alt="one_piece_content_one" className='w-full h-[70vh] rounded rounded-2xl brightness-110 shadow-custom'/> 
                </div>
            </div>
        </div>
    )
}

export default ContentSlider;