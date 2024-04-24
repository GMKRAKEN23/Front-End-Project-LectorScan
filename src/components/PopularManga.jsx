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
                <div className="h-auto sm:flex">
                    <h2 className='text-neutral-50 text-center tracking-widest font-semibold sm:pl-12 py-5 text-2xl lg:text-3xl mb-5'>Popular Manga</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 cursor-pointer mx-auto h-auto">
                    {mangaData.map((manga, index) => (
                        <div key={index} className="max-w-sm w-80 border-2 flex flex-col justfify-between rounded-lg
                                overflow-hidden shadow-lg bg-[#1d1e20] m-3 hover:scale-[102%] transform transition duration-300 
                                ease-in-out shadow_custom_red-20">
                            <div className="h-full">
                                <img className="w-full h-full object-cover" src={`/src/${manga.chapter[0].image}`} alt="popular_manga" />
                            </div>

                            <div className="px-6 flex flex-col justify-between py-5">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h4 className="font-bold text-2xl text-neutral-50 tracking-widest">{manga.title}</h4>
                                    </div>
                                </div>

                                <div className="flex mt-3">
                                    <p className="text-gray-700 text-xs text-neutral-50 tracking-widest bg-red-600 px-2 border mr-2">{manga.language}</p>
                                    <p className="text-gray-700 text-xs text-neutral-50 tracking-widest bg-red-600 px-2 border">{manga.volume}</p>
                                </div>

                                <div className="flex flex-col justify-between">
                                    <p className="text-gray-700 text-sm text-neutral-50 tracking-widest break-all py-2">{manga.description}</p>

                                    <p className="hidden text-gray-700 text-sm text-neutral-50"><i className='bx bxs-book-add'></i></p>
                                </div>
                                <div className="flex justify-center my-2">
                                    <a href="#" className="text-neutral-50 px-5 py-2 bg-red-600 border rounded-md">see more</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PopularManga;
