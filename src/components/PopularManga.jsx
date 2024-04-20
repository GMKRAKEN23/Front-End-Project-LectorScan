import { useState, useEffect } from 'react';
import OnePieceData from '../data/ChapterOnePiece.json'

function PopularManga() {

    const [popularManga, setPopularManga] = useState([]);
    useEffect(() => {

        setTimeout(() => {
            setPopularManga(OnePieceData.slice(0,1))
        }, 1000);

    }, []);

    return (
        <div>
            <div className="flex flex-col">
                <div>
                    <h2>Popular Manga</h2>
                </div>
                <div>
                    {popularManga.map((manga, index) => (
                        <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg bg-neutral-50">
                            <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains" />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                                <p className="text-gray-700 text-base">
                                    {manga.title}
                                </p>
                            </div>
                            <div className="px-6 pt-4 pb-2">
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                            </div>
                        </div>
                    ))};
                </div>
            </div>
        </div>
    )
}

export default PopularManga;