import useAudio from '@/hooks/useAudio';
import useAudioReducer from '@/hooks/useAudioReducer';
import { handlePickAudio } from '@/redux/slices/audioSlice';
import { AudioType } from '@/types/audio';
import { ActionAudioEnum } from '@/types/reducer';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const AudioItem = ({
    audio,
    isSelected = false,
    handleClickItem,
}: {
    audio: AudioType;
    isSelected?: boolean;
    handleClickItem?: () => void;
}) => {
    const dispatch = useDispatch();
    const handleClickAudioItem = () => {
        dispatch(handlePickAudio(audio));
        handleClickItem?.();
    };
    return (
        <li
            onClick={handleClickAudioItem}
            className={`flex flex-row items-center w-full gap-2 cursor-pointer rounded-md p-2 active:bg-active-primary hover:bg-hover-primary transition-all border-b border-opacity-primary ${
                isSelected && 'bg-active-primary'
            }`}
        >
            <img src={audio.image} alt="" className="w-8 h-8 rounded-full " />
            <span className="text-sm font-light md:w-[80%] truncate">{audio.name}</span>
        </li>
    );
};

export default AudioItem;
