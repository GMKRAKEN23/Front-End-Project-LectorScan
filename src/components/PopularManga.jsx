import ChapterBerserk from "../data/ChapterBerserk.json";
import ChapterOnePiece from "../data/ChapterOnePiece.json";
import ChapterChainsawMan from "../data/ChapterChainsawMan.json";
import ChapterJujutsuKaizen from "../data/ChapterJujutsuKaizen.json"

function PopularManga() {
    const mangaData = 
    [...ChapterBerserk.CollectionBerserk, 
    ...ChapterOnePiece.CollectionOnePiece,
    ...ChapterChainsawMan.CollectionChainsawMan,
    ...ChapterJujutsuKaizen.CollectionJujutsuKaizen,
];

    return (
        <div className="my-14">
            <div className="flex flex-col">
                <div className="h-auto flex justify-center lg:justify-start lg:mx-3 ">
                    <h2 className='text-neutral-50 tracking-widest font-semibold py-4 text-2xl lg:text-3xl'>Popular Manga</h2>
                </div>
                <div className="flex flex-col items-center lg:flex-row lg:justify-around cursor-pointer">
                    {mangaData.map((manga, index) => (
                        <div key={index} className="max-w-sm w-72 h-96 rounded-lg overflow-hidden shadow-lg bg-neutral-50 m-2">
                            <img className="w-full" src={`/src/${manga.chapter[0].image}`} alt="Sunset in the mountains" />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2"><h4>{manga.title}</h4></div>
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
