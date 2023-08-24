import React, { useCallback, useEffect, useRef, useState } from 'react';
import { BiSolidLeftArrow, BiSolidRightArrow } from 'react-icons/bi';
import { TfiMenu } from 'react-icons/tfi';
import { ImLoop } from 'react-icons/im';
import { FaPause } from 'react-icons/fa';
import useAudio from '@/hooks/useAudio';
import _ from 'lodash';
import Image from 'next/image';
import Button from '../ui/Button';
import Box from '../ui/Box';
import Audio from './Audio';
import { useDispatch, useSelector } from 'react-redux';
import { AudioState, setLoadingState } from '@/redux/slices/audioSlice';
import { RooteState } from '@/redux/store';

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

const BoxAudio = ({ clickShowMenu }: { clickShowMenu: () => void }) => {
    const audioRef = useRef<Audio>(null);
    const { audio, isPlaying, isLoop, onClickNext, onClickPrev, onClickToggleLoop, onClickPause, onClickPlay } =
        useAudio();
    const { isLoading } = useSelector((state: any) => state.audio);
    const dispatch = useDispatch();

    const handlePlay = useCallback(() => {
        audioRef.current?.play();
        onClickPlay();
    }, []);

    const handlePause = useCallback(() => {
        audioRef.current?.pause();
        onClickPause();
    }, []);

    const handleClick = () => {
        isPlaying ? handlePause() : handlePlay();
    };

    useEffect(() => {
        if (audioRef.current) {
            setTimeout(() => {
                isPlaying && audioRef.current?.play();
                dispatch(setLoadingState(false));
            }, 400);
        }
    }, [audio, audioRef.current]);

    return (
        <Box classN="w-full md:w-3/4 p-4 flex flex-col items-center justify-center gap-6">
            <div className="w-full flex flex-row justify-between md:justify-center items-center">
                <div onClick={clickShowMenu} className="hover:text-opacity-white md:hidden">
                    <TfiMenu className="text-xl" />
                </div>
                <h3 className="text-lg font-light text-white select-none">{audio.name}</h3>
                <div className="invisible md:hidden">
                    <TfiMenu />
                </div>
            </div>
            <div className="relative">
                <img
                    src={audio.image}
                    className={`rounded-full w-[150px] h-[150px] md:w-[200px] md:h-[200px] select-none ${
                        isPlaying && 'animate-spin-slow'
                    }`}
                    alt={audio.name}
                    loading="lazy"
                />
                {isLoading && (
                    <div className="absolute top-0 left-0">
                        <div
                            className={`w-[150px] h-[150px] md:w-[200px] md:h-[200px] border-4 border-opacity-secondary border-l-opacity-gray rounded-full animate-spin `}
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
                        {isPlaying ? (
                            <FaPause className="text-xl md:text-base" />
                        ) : (
                            <BiSolidRightArrow className="text-xl md:text-base" />
                        )}
                    </Button>
                    <ButtonNext onClick={() => onClickNext(audio)} />
                </div>
                <div className={`cursor-pointer ${isLoop && 'text-opacity-secondary'}`} onClick={onClickToggleLoop}>
                    <ImLoop className="text-xl md:text-lg" />
                </div>
            </div>
            <Audio ref={audioRef} />
        </Box>
    );
};

export default BoxAudio;
