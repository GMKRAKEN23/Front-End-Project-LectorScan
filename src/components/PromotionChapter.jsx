import ImagePromotion from '../assets/images/img_promotion/hunterPromotion.jpg'

function PromotionChapter (){
    return (
        <section style={{
            backgroundImage: `linear-gradient(rgba(90, 88, 88, 0.628), rgba(59, 59, 59, 0.646)), url(${ImagePromotion})`,
        }} className='bg-cover bg-center h-[55vh] lg:h-[90vh] '>
        </section>
    )
}

export default PromotionChapter;