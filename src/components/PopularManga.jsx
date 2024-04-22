import ChapterBerserk from "../data/ChapterBerserk.json";
import ChapterOnePiece from "../data/ChapterOnePiece.json";

function PopularManga() {
    const mangaData = [...ChapterBerserk.CollectionBerserk, ...ChapterOnePiece.CollectionOnePiece];

    return (
        <div className="h-96">
            <div className="flex flex-col h-96">
                <div>
                    <h2 className='text-neutral-50'>Popular Manga</h2>
                </div>
                <div>
                    {mangaData.map((manga, index) => (
                        <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg bg-neutral-50 m-2">
                            <img className="w-full" src={`/src/${manga.chapter[0].image}`} alt="Sunset in the mountains" />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                                <p className="text-gray-700 text-base">
                                    {manga.chapter[0].pages}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PopularManga;
