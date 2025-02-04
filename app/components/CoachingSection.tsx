'use client';

import { useState, useRef, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { sendEvent } from '../../analytics-service/analytics';

export default function CoachingSection() {
    const [currentTimestamp, setCurrentTimestamp] = useState(0);
    const [isClient, setIsClient] = useState(false);
    const playerRef = useRef<ReactPlayer | null>(null);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const timestamps = [
        { time: 5, title: 'Static top drill', description: 'Get a feel for the optimal wrist position at Top of your swing' },
        { time: 14, title: 'Dynamic top drill', description: 'Dynamically train your wrist position at Top' },
        { time: 24, title: 'Top full swing challenge', description: 'Train your maximum power swing' },
    ];

    const handleProgress = (state: { playedSeconds: number }) => {
        setCurrentTimestamp(state.playedSeconds);
    };

    const handleVideoEnd = () => {
        sendEvent('FullVideoWatch', {
          user: {
            id: 'user-123',
            browserInfo: navigator.userAgent,
            deviceInfo: window.innerWidth >= 768 ? 'Desktop' : 'Mobile'
          },
        });
      };

    const calculateProgress = (currentTime: number) => {
        if (currentTime < 5) return 0;
        if (currentTime < 14) return 0.33;
        if (currentTime < 24) return 0.66;
        return 1;
    };

    const progress = calculateProgress(currentTimestamp);

    const activeIndex = timestamps.findIndex(
        (timestamp, index) =>
            currentTimestamp >= timestamp.time &&
            (index === timestamps.length - 1 || currentTimestamp < timestamps[index + 1].time)
    );

    if (!isClient) {
        return null;
    }

    return (
        <div className="flex flex-col items-center p-6 font-sans">
            <h1 className="text-2xl font-semibold mb-4" style={{ color: 'var(--text-color)' }}>
                The best solution for you: Impact Training Program
            </h1>
            <div className="border-t border-black-400 pt-4 w-full" />

            <div className="sm:flex flex-col md:flex-row items-center w-full max-w-screen-lg mx-auto">
                <div className="w-full md:w-2/3 mb-4 md:mb-0">
                    <ReactPlayer
                        ref={playerRef}
                        url="/assets/impactdrill.mp4"
                        playing
                        controls
                        onProgress={handleProgress}
                        onEnded={handleVideoEnd}
                        className="shadow-lg overflow-hidden"
                        width="100%"
                        height="100%"
                        style={{ maxWidth: '746px', maxHeight: '510px' }}
                    />
                </div>


                <div className="w-full mt-4 mb-4 p-2 rounded-lg md:hidden" style={{ backgroundColor: 'var(--color-white)' }}>
                    <div
                        style={{ width: `${progress * 100}%`, backgroundColor: 'var(--text-color)' }}
                        className="h-2 md:h-full md:w-2 rounded-lg transition-all duration-200 ease-in-out"
                    />
                </div>

                <div style={{ height: "210px" }} className='hidden md:block m-6'>
                    <div className="h-full p-2 rounded-lg" style={{ backgroundColor: 'var(--color-white)' }}>
                        <div
                            style={{ height: `${progress * 100}%`, backgroundColor: 'var(--text-color)' }}
                            className="w-2 rounded-lg transition-all duration-200 ease-in-out"
                        />
                    </div>
                </div>

                <div className="w-full md:w-1/3 flex flex-col items-center md:items-start">
                    {timestamps.map(({ time, title, description }, index) => (
                        <div key={time} className="mb-2 w-full md:w-auto">
                            <div className="flex items-center p-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="var(--text-color)"
                                    className={`w-5 h-5 transition-transform ${index === activeIndex ? 'rotate-180' : ''}`}
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <h2 style={{ color: 'var(--text-color)' }} className="text-lg font-semibold ml-2">
                                    {title}
                                </h2>
                            </div>

                            {index === activeIndex && (
                                <div className="mt-2 transition-all duration-500 ease-in-out">
                                    <p className="text-sm">{description}</p>
                                </div>
                            )}

                            <div className="border-b border-gray-300 mt-2" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}