import BestChapterManga from "./BestChapterManga";
import NewChapterManga from "./NewChapterManga";

function MangaList() {


    return (
        <div>
            <div className="flex justify-center items-center mx-auto">
                <BestChapterManga />
                <NewChapterManga />
            </div>
        </div>
    )
}

export default MangaList;