import React, { ChangeEvent, ChangeEventHandler, MouseEvent, ReactNode, useCallback, useEffect, useRef } from 'react';
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
import TitleAudio from './TitleAudio';
import ImageAudio from './ImageAudio';
import ActionAudio from './ActionAudio';
import VolumeAudio from './VolumeAudio';

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
    const handleTogglePlay = () => {
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
    const handleVolumeChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newVolume = parseFloat(event.target.value);
        dispatch(handleVolumeAudio(newVolume));
    };

    // Volume element

    // useEffect(() => {
    //     dispatch(handlePickAudio(song));
    // }, []);

    // useEffect(() => {
    //     console.log('run');
    //     setSong(audio);
    // }, audio);

    return (
        <Box classN="w-full md:w-3/5 p-4 flex flex-col items-center justify-center gap-6">
            <div className="w-full flex flex-row justify-between items-center">
                {/* hidden element */}
                <div className="invisible p-2">
                    <ImLoop className="text-xl md:text-lg" />
                </div>

                {/* <div onClick={clickShowMenu} className="hover:text-primary-light cursor-pointer">
                    <TfiMenu className="text-xl" />
                </div> */}

                {/* name song */}

                <TitleAudio audio={audio} />

                {/* <h3 className="text-lg font-light text-white select-none">{audio.name}</h3> */}

                {/* header right */}
                <div>
                    <VolumeAudio handleVolumeChange={handleVolumeChange} isShowVolume={isShowVolume} volume={volume} />

                    {/* <TfiMenu className="text-xl" /> */}
                </div>
            </div>

            {/* image element */}
            <ImageAudio audio={audio} isPlaying={isPlaying} isLoading={isLoading} />

            {/* action audio */}
            <ActionAudio
                clickShowMenu={clickShowMenu}
                isLoop={isLoop}
                isPlaying={isPlaying}
                onClickNextAudio={onClickNextAudio}
                handleTogglePlay={handleTogglePlay}
                onClickPrevAudio={onClickPrevAudio}
                onClickToogleLoop={onClickToogleLoop}
            />
            {/* Audio source */}
            <CustomAudio ref={audioRef} audio={audio} isLoop={isLoop} onClickNext={onClickNextAudio} />
        </Box>
    );
};

export default BoxAudio;
