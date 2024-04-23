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
                        <div key={index} className="max-w-sm w-72 h-96 border-2 border-[] flex flex-col justfify-between rounded-lg overflow-hidden shadow-lg bg-[#1d1e20] m-2 hover:scale-[102%] transform transition duration-300 ease-in-out shadow_custom_red-20">
                            <img className="w-full " src={`/src/${manga.chapter[0].image}`} alt="Sunset in the mountains" />
                            <div className="px-6 py-4 h-full flex flex-col justify-between">
                                <h4 className="font-bold text-xl mb-2 text-neutral-50 tracking-widest">{manga.title}</h4>
                                <div className="flex justify-between">
                                    <p className="text-gray-700 text-lg text-neutral-50 tracking-widest">{manga.language}</p>
                                    <p className="text-gray-700 text-lg text-neutral-50 tracking-widest">{manga.volume}</p>
                                    <p className="text-gray-700 text-lg text-neutral-50"><i className='bx bxs-book-add'></i></p> 
                                </div>
                                <div className="flex justify-center my-1">
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
