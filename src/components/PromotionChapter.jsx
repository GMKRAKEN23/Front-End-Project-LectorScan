import ImagePromotion from '../../public/assets/img_promotion/hunterPromotion.jpg'
import TimerPromotionChapter from './TimerPromotionChapter';

function PromotionChapter({ name = "One Piece", chapter = "Chapter 850", time = "15", content = "" }) {
    return (
        <div style={{
            backgroundImage: `linear-gradient(rgba(90, 88, 88, 0.628), rgba(59, 59, 59, 0.646)), url(${ImagePromotion})`,
        }} className='hidden lg:block bg-cover bg-center h-[55vh] lg:h-[90vh] '>

            <div className='flex justify-around items-center h-full lg:h-full'>
                <div className="lg:w-4/12 lg:mx-3 mt-4 flex flex-col gap-3 items-stretch">
                    <h2 className="text-3xl uppercase text-center md:text-5xl lg:text-6xl font-semibold text-neutral-50 tracking-widest">{name}</h2>
                    <h3 className="text-2xl uppercase text-center md:text-4xl lg:text-4xl font-semibold text-neutral-50 tracking-widest">{chapter}</h3>
                    <p className="text-sm mx-3 text-center mx-4 my-3  md:text-base lg:text-left mx-1 text-neutral-50 tracking-widest md:text-lg lg:text-lg">{content}</p>
                    <p className="text-sm text-center text-neutral-50 md:text-base lg:text-xl tracking-widest">Reading time : <span className="bg-red-600 border-2 border-[#0a0a0a] lg:text-lg px-1">{time} min</span></p>
                    <div>
                        <TimerPromotionChapter />
                    </div>
                </div>
                <div>
                    <div className='hidden lg:block  lg:mx-3'>
                        <img src={ImagePromotion} alt="one_piece_content_one" className='w-full min-w-[668px] h-[70vh] rounded rounded-2xl brightness-110 shadow-custom' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PromotionChapter;