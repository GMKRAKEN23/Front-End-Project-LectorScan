import MangaData from "../utils/joinsImport.js"; 

function BestChapterManga() {
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
        <div>
            <div><h2 className="text-neutral-50 text-center tracking-widest font-bold py-5 text-3xl">Best chapter Manga</h2></div>
            {mangaData.map(( manga, index) => (
                <div key={index} className={`flex items-center w-[23rem] mx-auto h-32  md:w-96 sm:h-32 border-2 rounded-xl my-5 px-4  bg-[#1d1e20] cursor-pointer hover:scale-[102%] transform transition duration-300 
                ease-in-out shadow_custom_red-20 hid ${index === 0 ? 'float' : ''}`} >
                    <div className="mx-1"><span className={`sm:text-7xl text-6xl text-red-600 ${index === 0 ? 'movingOpacity ease-in-out' : ''}`}>{numbers[index]}</span></div>
                    <div className={`flex justify-center items-center ${index == 0 ? 'ml-3' : ''}`}>
                        <div className="h-full w-28 mx-3">
                            <img className="h-24 object-cover" src={`../${manga.chapter[1].image}`} alt="best_chapter__manga" />
                        </div>
                        <div className="flex flex-col mx-3">
                            <h3 className="text-neutral-50 tracking-widest text-base font-bold text-nowrap">{manga.title}</h3>
                            <h4 className="font-bold text-xs text-neutral-50 tracking-widest py-4 text-nowrap">{manga.chapter[1].title}</h4>
                            <div className="flex py-1">
                            <p className="text-xs text-neutral-50 tracking-widest bg-red-600 px-2 border mr-2">n°{manga.chapter[1].number}</p>
                            <p className="text-xs text-neutral-50 tracking-widest bg-red-600 px-2 border">P. {manga.chapter[1].pages}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default BestChapterManga;
