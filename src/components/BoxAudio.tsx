import React, { useCallback, useEffect, useRef, useState } from 'react';
import Box from './ui/Box';
import { BiSolidLeftArrow, BiSolidRightArrow } from 'react-icons/bi';
import { ImLoop } from 'react-icons/im';
import { FaPause } from 'react-icons/fa';
import Button from './ui/Button';
import useAudio from '@/hooks/useAudio';
import _ from 'lodash';
import Audio from './ui/Audio';
import Image from 'next/image';

const ButtonNext = ({ onClick }: { onClick: () => void }) => {
    return (
        <Button onClick={onClick}>
            <BiSolidRightArrow className="-mr-2 text-xl md:text-base" />
            <BiSolidRightArrow className="text-xl md:text-base" />
        </Button>
    );
};
const ButtonPrev = ({ onClick }: { onClick: () => void }) => {
    return (
        <Button onClick={onClick}>
            <BiSolidLeftArrow className="text-xl md:text-base" />
            <BiSolidLeftArrow className="-ml-2 text-xl md:text-base" />
        </Button>
    );
};

const BoxAudio = () => {
    const audioRef = useRef<Audio>(null);
    const { audio, onClickNext, onClickPrev, onClickToggleLoop, onClickPause, onClickPlay } = useAudio();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const handlePlay = useCallback(() => {
        audioRef.current?.play();
        onClickPlay();
    }, []);

    const handlePause = useCallback(() => {
        audioRef.current?.pause();
        onClickPause();
    }, []);

    const handleClick = useCallback(() => {
        audio.isPlaying ? handlePause() : handlePlay();
    }, [audio, audioRef.current]);

    useEffect(() => {
        if (audioRef.current) {
            audio.isPlaying && audioRef.current.play();
            setIsLoading(false);
        }
    }, [audio, audioRef.current]);

    return (
        <Box classN="w-full md:w-3/4 p-4 flex flex-col items-center justify-center gap-6">
            <h3 className="text-lg font-light text-white select-none">{audio.name}</h3>
            <div className="relative">
                <img
                    src={audio.image}
                    className={`rounded-full w-[200px] h-[200px] select-none ${audio.isPlaying && 'animate-spin-slow'}`}
                    alt={audio.name}
                    loading="lazy"
                />
                {isLoading && (
                    <div className="absolute top-0 left-0">
                        <div
                            className={`w-[200px] h-[200px] border-4 border-opacity-secondary border-l-opacity-gray rounded-full animate-spin `}
                        ></div>
                    </div>
                )}
            </div>
            <div className="w-full lg:w-2/3 flex flex-row justify-between items-center px-2 md:px-4 gap-4 ">
                <div className="invisible">
                    <ImLoop />
                </div>
                <div className="w-7/12 lg:w-6/12 flex flex-row justify-between items-center">
                    <ButtonPrev onClick={() => onClickPrev(audio)} />
                    <Button onClick={handleClick} classN="rounded-full p-2 bg-opacity-secondary">
                        {audio.isPlaying ? (
                            <FaPause className="text-xl md:text-base" />
                        ) : (
                            <BiSolidRightArrow className="text-xl md:text-base" />
                        )}
                    </Button>
                    <ButtonNext onClick={() => onClickNext(audio)} />
                </div>
                <div
                    className={`cursor-pointer ${audio.isLoop && 'text-opacity-secondary'}`}
                    onClick={onClickToggleLoop}
                >
                    <ImLoop className="text-xl md:text-lg" />
                </div>
            </div>
            <Audio ref={audioRef} />
        </Box>
    );
};

export default BoxAudio;
