import useAudio from '@/hooks/useAudio';
import useAudioReducer from '@/hooks/useAudioReducer';
import { handlePickAudio } from '@/redux/slices/audioSlice';
import { AudioType } from '@/types/audio';
import { ActionAudioEnum } from '@/types/reducer';
import React, { useEffect, useRef } from 'react';
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
    const liRef = useRef<any>(null);
    const dispatch = useDispatch();
    const handleClickAudioItem = () => {
        dispatch(handlePickAudio(audio));
        handleClickItem?.();
    };
    useEffect(() => {
        if (liRef.current && isSelected) {
            liRef.current?.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    }, [isSelected]);

    return (
        <li
            ref={liRef}
            onClick={handleClickAudioItem}
            className={`flex select-none flex-row items-center w-full gap-2 hover:text-primary-light cursor-pointer rounded-md p-3 md:p-2 hover:bg-primary-dark transition-all ${
                isSelected ? 'bg-primary-dark text-primary-light' : ''
            }`}
        >
            <img src={audio.image} alt={audio.name} loading="lazy" className="w-8 h-8 rounded-full" />
            <span className="text-sm font-light md:w-[80%] truncate">{audio.name}</span>
        </li>
    );
};

export default AudioItem;
