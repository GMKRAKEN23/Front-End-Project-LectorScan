import ImageSlider from "../../components/ImageSlider";
import Copyright from "../../components/Footer/Copyright";
import Footer from "../../components/Footer/Footer";
import PromotionChapter from "../../components/PromotionChapter";
import ServiceDescription from "../../components/ServiceDescription";
import PopularManga from "../../components/PopularManga";
import RecentlyAddedManga from "../../components/RecentlyAddedManga";
import MangaList from "../../components/MangaList";


function Content() {
 
    return (
        <div>
            <ImageSlider />
            <PopularManga />
            <ServiceDescription />
            <RecentlyAddedManga />
            <PromotionChapter />
            <MangaList />
            <Footer />
            <Copyright />
        </div>
    )
}

export default Content;