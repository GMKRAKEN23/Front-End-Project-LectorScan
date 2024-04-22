import { useState, useEffect } from "react";
import ImageSlider from "../../components/ImageSlider";
import Copyright from "../../components/Footer/Copyright";
import Footer from "../../components/Footer/Footer";
import PromotionChapter from "../../components/PromotionChapter";
import ServiceDescription from "../../components/ServiceDescription";
import PopularManga from "../../components/PopularManga";

import MangaData from "../../utils/joinsImport";

function Content() {
    const [mangaData, setMangaData] = useState([]);

    useEffect(() => {
        const combinedData = Object.values(MangaData).flatMap(collection => collection); 
        setMangaData(combinedData);
    }, []);

    return (
        <div>
            <ImageSlider />
            <PopularManga mangaData={mangaData}/>
            <ServiceDescription />
            <PromotionChapter />
            <Footer />
            <Copyright />
        </div>
    )
}

export default Content;
