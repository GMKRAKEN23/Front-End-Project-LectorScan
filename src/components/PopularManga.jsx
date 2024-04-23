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
        <div className="mt-10 mb-20">
            <div className="flex flex-col justify-start">
                <div className="h-auto flex">
                    <h2 className='text-neutral-50 tracking-widest font-semibold pl-12 py-5 text-2xl lg:text-3xl mb-5'>Popular Manga</h2>
                </div>
                <div className="flex flex-col items-center lg:flex-row lg:justify-around cursor-pointer">
                    {mangaData.map((manga, index) => (
                        <div key={index} className="max-w-sm w-72 h-96 border-2 border-[]  rounded-lg overflow-hidden shadow-lg bg-[#1d1e20] m-2 hover:scale-[102%] transform transition duration-300 ease-in-out shadow_custom_red-20">
                            <img className="w-full h-15" src={`/src/${manga.chapter[0].image}`} alt="Sunset in the mountains" />
                            <div className="px-6 py-4">
                                <h4 className="font-bold text-xl mb-2 text-neutral-50 tracking-widest">{manga.title}</h4>
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
