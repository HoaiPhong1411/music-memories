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
    const { audio, onClickNext, onClickPrev, onClickToggleLoop } = useAudio();

    const handleClick = useCallback(() => {
        audio.isPlaying ? audioRef.current?.pause() : audioRef.current?.play();
    }, [audio, audioRef]);

    return (
        <Box classN="w-full md:w-3/4 p-4 flex flex-col items-center justify-center gap-4">
            <h3 className="text-lg font-light text-white select-none">{audio.name}</h3>
            <img src={audio.image} className="rounded-md w-2/3 select-none" alt={audio.name} loading="lazy" />
            <div className="w-2/3 flex flex-row justify-between px-2 md:px-4 gap-4 md:gap-4">
                <div className="invisible">
                    <ImLoop />
                </div>
                <div className="w-6/12 md:w-8/12 flex flex-row gap-4 md:gap-8 justify-center">
                    <ButtonPrev onClick={() => onClickPrev(audio)} />
                    <Button onClick={handleClick}>
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
