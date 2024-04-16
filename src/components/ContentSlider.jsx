import slider1 from '/assets/img_slides/slide_1.jpeg';

function ContentSlider({name="One Piece", chapter="Chapitre 900",  date="30 juin 2025" }){

    return(
        <div className='flex justify-around items-center h-full'>
            <div className='w-4/12 mx-3 flex flex-col'>
                <h2 className='text-6xl text-neutral-50 my-3'>{name}</h2>
                <h3 className='text-neutral-50 my-3'>{chapter}</h3>
                <p className='text-neutral-50 my-3'>{date}</p>
                <p className='text-neutral-50 my-3'>Alors qu&apos;ils voguent à travers les mers infinies, 
                    l&apos;équipage du Chapeau de Paille, mené par le charismatique Luffy, 
                    poursuit son rêve ultime : trouver le légendaire trésor du One Piece. 
                </p>
                <p className='text-neutral-50 my-3'>Reading time: <span>10 min.</span></p>
                <a href="#" className='text-neutral-50 my-3 uppercase'>read now</a>
            </div>
            <div>
                <div className='mx-3'>
                   <img src={slider1} alt="one_piece_content_one" className='w-full h-[70vh] rounded lg:rounded-2xl brightness-110'/> 
                </div>
            </div>
        </div>
    )
}

export default ContentSlider;