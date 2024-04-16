function ContentSlider({name="One Piece", chapter="Chapitre 900",  date="30 juin 2025", time="10", slider }){

    return(
        <div className='flex justify-around items-center h-full'>
            <div className='w-4/12 mx-3 flex flex-col'>
                <h2 className='text-6xl font-semibold text-neutral-50 my-3 tracking-widest'>{name}</h2>
                <h3 className='text-4xl font-semibold text-neutral-50 my-3 tracking-widest'>{chapter}</h3>
                <p className='text-neutral-50 my-3 tracking-widest'>{date}</p>
                <p className='text-neutral-50 my-3 tracking-widest'>Alors qu&apos;ils voguent à travers les mers infinies, 
                    l&apos;équipage du Chapeau de Paille, mené par le charismatique Luffy, 
                    poursuit son rêve ultime : trouver le légendaire trésor du One Piece. 
                </p>
                <p className='text-neutral-50 my-3'>Reading time: <span>{time} min.</span></p>
                <a href="#" className='text-neutral-50 my-3 uppercase text-2xl py-5 text-center transition duration-400 tracking-widest
                before:button_read after:button_read '>read now</a>
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