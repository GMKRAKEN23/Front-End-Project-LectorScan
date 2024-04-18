import { useState, useEffect } from "react";

function TimerPromotionChapter() {
    const [days, setDays] = useState('');
    const [hours, setHours] = useState('');
    const [minutes, setMinutes] = useState('');
    const [seconds, setSeconds] = useState('');

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date();
            const futureDate = new Date('December 31, 2024 23:59:59');

            let totalSeconds = (futureDate - now) / 1000;

            if (totalSeconds > 0) {
                const days = Math.floor(totalSeconds / (60 * 60 * 24));
                const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
                const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
                const seconds = Math.floor(totalSeconds % 60);

                setDays(formatValue(days));
                setHours(formatValue(hours));
                setMinutes(formatValue(minutes));
                setSeconds(formatValue(seconds));
            }
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatValue = (value) => {
        return value < 10 ? '0' + value : value;
    };

    return (
        <div className="flex justify-around my-7">
            <div className="flex items-center flex-col ">
                <div className="text-4xl text-neutral-50 bg-black border-black text-center rounded-lg mx-1 p-3 h-19 w-21">{days}</div>
                <span className="text-xl">Days</span>
            </div>
            <div className="flex items-center flex-col">
                <div className="text-4xl text-neutral-50 bg-black border-black text-center rounded-lg mx-1 p-3 h-19 w-20">{hours}</div>
                <span className="text-xl">Hours</span>
            </div>
            <div className="flex items-center flex-col">
                <div className="text-4xl text-neutral-50 bg-black border-black text-center rounded-lg mx-1 p-3 h-19 w-20">{minutes}</div>
                <span className="text-xl">Minutes</span>
            </div>
            <div className="flex items-center flex-col">
                <div className="text-4xl text-neutral-50 bg-black border-black text-center rounded-lg mx-1 p-3 h-19 w-20">{seconds}</div>
                <span className="text-xl">Seconds</span>
            </div>
        </div>
    );
}



export default TimerPromotionChapter;