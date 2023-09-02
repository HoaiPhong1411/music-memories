import React, { ReactNode, useCallback, useEffect, useRef } from 'react';
import { BiSolidLeftArrow, BiSolidRightArrow } from 'react-icons/bi';
import { TfiMenu } from 'react-icons/tfi';
import { ImLoop, ImVolumeHigh, ImVolumeMedium, ImVolumeLow, ImVolumeMute, ImVolumeMute2 } from 'react-icons/im';
import { FaPause } from 'react-icons/fa';
import useAudio from '@/hooks/useAudio';
import _ from 'lodash';
import Image from 'next/image';
import Button from '../ui/Button';
import Box from '../ui/Box';
import CustomAudio from './CustomAudio';
import { useDispatch, useSelector } from 'react-redux';
import {
    handleLoadingAudio,
    handleLoopAudio,
    handleNextAudio,
    handlePauseAudio,
    handlePickAudio,
    handlePlayAudio,
    handlePrevAudio,
    handleShowVolumeAudio,
    handleVolumeAudio,
} from '@/redux/slices/audioSlice';
import { useLocalStorage } from 'react-use';
import { localStorageEnum } from '@/types/localStorage';
import { audios } from '@/data/audios';

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
    const audioRef = useRef<CustomAudio>(null);
    const { isLoading, volume, isShowVolume, isPlaying, audio, isLoop } = useSelector((state: any) => state.audio);
    // const [song, setSong] = useLocalStorage(localStorageEnum.AUDIO, audios[0]);
    const dispatch = useDispatch();

    // handle when click next song
    const onClickNextAudio = () => {
        dispatch(handleNextAudio());
        audioRef.current?.play();
    };

    // handle when click previus song
    const onClickPrevAudio = () => {
        dispatch(handlePrevAudio());
        audioRef.current?.play();
    };

    // handle when click play song
    const onClickPlayAudio = () => {
        audioRef.current?.play();
        dispatch(handlePlayAudio());
    };

    // handle when click pause song
    const onClickPauseAudio = () => {
        audioRef.current?.pause();
        dispatch(handlePauseAudio());
    };

    const onClickToogleLoop = () => {
        dispatch(handleLoopAudio());
    };

    // click pause or play song
    const handleClick = () => {
        isPlaying ? onClickPauseAudio() : onClickPlayAudio();
    };

    // loading when song change
    useEffect(() => {
        if (audioRef.current) {
            setTimeout(() => {
                isPlaying && audioRef.current?.play();
                dispatch(handleLoadingAudio(false));
            }, 400);
        }
    }, [audio, dispatch, isPlaying]);

    // increase and decrease volume
    const handleVolumeChange = (event: any) => {
        const newVolume = parseFloat(event.target.value);
        dispatch(handleVolumeAudio(newVolume));
    };

    // Volume element
    const VolumeElement = ({ props }: any) => {
        let Element: ReactNode = <ImVolumeHigh {...props} />;
        if (volume >= 0.8) {
            Element = <ImVolumeMedium {...props} />;
        } else if (volume >= 0.5) {
            Element = <ImVolumeLow {...props} />;
        } else if (volume > 0) {
            Element = <ImVolumeMute {...props} />;
        } else {
            Element = <ImVolumeMute2 {...props} />;
        }
        const handleClickVolume = () => {
            dispatch(handleShowVolumeAudio(!isShowVolume));
        };

        return (
            <div className="relative hover:text-opacity-white w-4 h-4 cursor-pointer">
                <div onClick={handleClickVolume}>{Element}</div>
                <input
                    className={`absolute ${
                        isShowVolume ? 'block' : 'hidden'
                    } top-0 left-0 translate-x-4 accent-opacity-primary transition-all`}
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={volume}
                    onChange={handleVolumeChange}
                />
            </div>
        );
    };

    // useEffect(() => {
    //     dispatch(handlePickAudio(song));
    // }, []);

    // useEffect(() => {
    //     console.log('run');
    //     setSong(audio);
    // }, audio);

    return (
        <Box classN="w-full md:w-3/5 p-4 flex flex-col items-center justify-center gap-6">
            <div className="w-full flex flex-row justify-center items-center">
                {/* hidden element */}
                {/* <div className="invisible p-2">
                    <ImLoop className="text-xl md:text-lg" />
                </div> */}

                {/* <div onClick={clickShowMenu} className="hover:text-primary-light cursor-pointer">
                    <TfiMenu className="text-xl" />
                </div> */}

                {/* name song */}
                <h3 className="text-lg font-light text-white select-none">{audio.name}</h3>

                {/* header right */}
                <div className="invisible">
                    <TfiMenu className="text-xl" />
                </div>
            </div>
            <div className="relative">
                {/* image element */}
                <img
                    src={audio.image}
                    className={`rounded-full border-2 border-primary-light w-[150px] h-[150px] md:w-[200px] md:h-[200px] select-none ${
                        isPlaying ? 'animate-spin-slow' : ''
                    }`}
                    alt={audio?.name}
                    loading="lazy"
                />

                {/* loading element */}
                {isLoading && (
                    <div className="absolute top-0 left-0">
                        <div
                            className={`w-[150px] h-[150px] md:w-[200px] md:h-[200px] border-4 border-primary-light border-l-opacity-gray rounded-full animate-spin `}
                        ></div>
                    </div>
                )}
            </div>
            <div className="w-full lg:w-2/3 flex flex-row justify-between items-center px-2 md:px-4 gap-4 ">
                {/* menu element */}
                <div onClick={clickShowMenu} className="hover:text-primary-main p-2 cursor-pointer select-none">
                    <TfiMenu className="text-xl" />
                </div>

                {/* next pause prev element */}
                <div className="w-7/12 lg:w-6/12 flex flex-row justify-between items-center">
                    <ButtonPrev
                        onClick={() => {
                            // onClickPrev(audio);
                            onClickPrevAudio();
                        }}
                    />
                    <Button onClick={handleClick} classN="rounded-full p-2 bg-primary-main hover:text-white">
                        {isPlaying ? (
                            <FaPause className="text-xl md:text-base" />
                        ) : (
                            <BiSolidRightArrow className="text-xl md:text-base" />
                        )}
                    </Button>
                    <ButtonNext
                        onClick={() => {
                            // onClickNext(audio);
                            onClickNextAudio();
                        }}
                    />
                </div>

                {/* loop element */}
                <Button onClick={onClickToogleLoop} classN={`rounded-full p-2 ${isLoop ? 'text-primary-main ' : ''} `}>
                    {/* <div className={`cursor-pointer ${isLoop ? 'text-primary-main' : ''}`} onClick={onClickToogleLoop}> */}
                    <ImLoop className="text-xl md:text-lg" />
                </Button>
                {/* </div> */}
            </div>

            {/* Audio source */}
            <CustomAudio ref={audioRef} audio={audio} isLoop={isLoop} onClickNext={onClickNextAudio} />
        </Box>
    );
};

export default BoxAudio;
