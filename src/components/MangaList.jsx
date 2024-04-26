import BestChapterManga from "./BestChapterManga";
import CompletedManga from "./CompletedManga";
import NewChapterManga from "./NewChapterManga";

function MangaList() {


    return (
        <div>
            <div className="flex justify-center md:justify-around items-center mx-auto lg:max-w-[1350px] lg:my-20">
                <BestChapterManga />
                <NewChapterManga />
                <CompletedManga />
            </div>
        </div>
    )
}

export default MangaList;