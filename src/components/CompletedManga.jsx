import MangaData from "../utils/joinsImport.js"; 

function CompletedManga() {
    const numbers = [1, 2, 3, 4, 5];

    const {
        OnePieceData,
        SNKData,
        BleachData,
        DemonSlayerData,
        JujutsuKaizenData,
    } = MangaData;

    const mangaData =
        [
            ...OnePieceData.CollectionOnePiece,          
            ...DemonSlayerData.CollectionDemonSlayer,
            ...JujutsuKaizenData.CollectionJujutsuKaizen,
            ...SNKData.CollectionSNK,
            ...BleachData.CollectionBleach,
        ];


    return (
        <div className="hidden xl:block">
            <div><h2 className="text-neutral-50 text-center tracking-widest font-bold py-5 text-3xl">Completed Manga</h2></div>
            {mangaData.map(( manga, index) => (
                <div key={index} className="flex items-center h-32 w-96 border-2 rounded-xl my-5 px-4  bg-[#1d1e20] cursor-pointer hover:scale-[102%] transform transition duration-300 
                ease-in-out shadow_custom_red-20">
                    <div className="mx-1"><span className="sm:text-7xl text-6xl text-red-600">{numbers[index]}</span></div>
                    <div className="flex w-full jusitfy-center mx-2 items-center">
                        <div className=" h-full w-28 mx-2">
                            <img className=" h-24 object-cover" src={`/src${manga.imageCollection}`} alt="completed_manga" />
                        </div>
                        <div className="flex flex-col mx-2">
                            <h3 className="text-neutral-50 tracking-widest text-base font-bold text-nowrap">{manga.title}</h3>
                            <h4 className="font-bold text-xs text-neutral-50 tracking-widest rounded p-1 bg-red-600 my-3 w-28 text-center border">{manga.completed ? 'Completed' : 'Incompleted'}</h4>
                            <div className="flex py-1">
                            <p className="text-gray-700 text-xs text-neutral-50 tracking-widest bg-red-600 px-2 border mr-2">n°{manga.volume}</p>
                            <p className="text-gray-700 text-xs text-neutral-50 tracking-widest bg-red-600 px-2 border">{manga.language}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CompletedManga;
