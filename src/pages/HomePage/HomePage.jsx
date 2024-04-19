import ImageSlider from "../../components/ImageSlider";
import Copyright from "../../components/Footer/Copyright";
import Footer from "../../components/Footer/Footer";
import PromotionChapter from "../../components/PromotionChapter";

function Content () {

    return (
        <div>
            <ImageSlider />  
            <PromotionChapter />
            <Footer />
            <Copyright />
        </div>  
    )
}

export default Content;