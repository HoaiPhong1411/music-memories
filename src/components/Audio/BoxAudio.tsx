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
import Audio from './Audio';
import { useDispatch, useSelector } from 'react-redux';
import { setLoadingState, setShowVolume, setVolumeState } from '@/redux/slices/audioSlice';

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
    const { isLoading, volume, isShowVolume } = useSelector((state: any) => state.audio);

    const dispatch = useDispatch();

    const handlePlay = useCallback(() => {
        audioRef.current?.play();
        onClickPlay();
    }, [onClickPlay]);

    const handlePause = useCallback(() => {
        audioRef.current?.pause();
        onClickPause();
    }, [onClickPause]);

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
    }, [audio, dispatch, isPlaying]);

    const handleVolumeChange = (event: any) => {
        const newVolume = parseFloat(event.target.value);
        dispatch(setVolumeState(newVolume));
    };

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
            dispatch(setShowVolume(!isShowVolume));
        };

        return (
            <div className="relative hover:text-opacity-white w-4 h-4 cursor-pointer">
                <div onClick={handleClickVolume}>{Element}</div>
                <input
                    className={`absolute ${
                        isShowVolume ? 'block' : 'hidden'
                    } top-0 left-0 translate-x-4 accent-opacity-secondary transition-all`}
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
    return (
        <Box classN="w-full md:w-3/4 p-4 flex flex-col items-center justify-center gap-6">
            <div className="w-full flex flex-row justify-between items-center">
                <div onClick={clickShowMenu} className="hover:text-opacity-white md:invisible">
                    <TfiMenu className="text-xl" />
                </div>
                <h3 className="text-lg font-light text-white select-none">{audio.name}</h3>
                <div className="invisible">
                    <TfiMenu className="text-xl" />
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
                <div className="invisible"></div>
                {/* <VolumeElement /> */}
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
            <Audio ref={audioRef} audio={audio} isLoop={isLoop} onClickNext={onClickNext} />
        </Box>
    );
};

export default BoxAudio;
