import MangaData from "../utils/joinsImport.js"; 

function NewChapterManga(){
    const numbers = [1, 2, 3, 4, 5];

    const {
        OnePieceData,
        DBSData,
        VinlandSagaData,
        DemonSlayerData,
        JujutsuKaizenData,
    } = MangaData;

    const mangaData =
        [
            ...OnePieceData.CollectionOnePiece,          
            ...DemonSlayerData.CollectionDemonSlayer,
            ...JujutsuKaizenData.CollectionJujutsuKaizen,
            ...DBSData.CollectionDragonBallSuper,
            ...VinlandSagaData.CollectionVindlandSaga,
        ];


    return (
        <div className="hidden sm:block">
            <div><h2 className="text-neutral-50 text-center tracking-widest font-bold py-5 text-2xl">New chapter Manga</h2></div>
            {mangaData.map(( manga, index) => (
                <div key={index} className="flex items-center card w-[21rem] h-32 sm:w-96 sm:h-32 border-2 rounded-xl my-5 px-4  bg-[#1d1e20] cursor-pointer">
                    <div className=""><span className="sm:text-7xl text-6xl text-red-600">{numbers[index]}</span></div>
                    <div className="flex jusitfy-center items-center">
                        <div className="h-full mx-2">
                            <img className="w-28 h-24 object-cover" src={`/src/${manga.chapter[1].image}`} alt="popular_manga" />
                        </div>
                        <div className="flex flex-col">
                            <h3 className="text-neutral-50 tracking-widest text-base font-bold text-nowrap">{manga.title}</h3>
                            <h4 className="font-bold text-xs text-neutral-50 tracking-widest py-4">{manga.chapter[1].title}</h4>
                            <div className="flex py-1">
                            <p className="text-gray-700 text-xs text-neutral-50 tracking-widest bg-red-600 px-2 border mr-2">n°{manga.chapter[1].number}</p>
                            <p className="text-gray-700 text-xs text-neutral-50 tracking-widest bg-red-600 px-2 border">P. {manga.chapter[1].pages}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default NewChapterManga;

