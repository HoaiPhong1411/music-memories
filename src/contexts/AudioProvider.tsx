import { audios } from '@/data/audios';
import useAudioReducer from '@/hooks/useAudioReducer';
import { handleLoadingAudio } from '@/redux/slices/audioSlice';
import audioReducer, { initialStateAudio } from '@/store/audioReducer';
import { AudioContextType, AudioType } from '@/types/audio';
import { ActionAudioEnum } from '@/types/reducer';
import React, { ReactNode, createContext, useEffect, useReducer, useState } from 'react';
import { useDispatch } from 'react-redux';

export const AudioContext = createContext<AudioContextType | null>(null);

const AudioProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(audioReducer, initialStateAudio);
    const dispatchRedux = useDispatch();

    const onPickAudio = (audio: AudioType) => {
        dispatchRedux(handleLoadingAudio(true));
        dispatch({ type: ActionAudioEnum.PICK, payload: { audio } });
    };

    const onClickNext = (audio: AudioType) => {
        dispatchRedux(handleLoadingAudio(true));
        dispatch({ type: ActionAudioEnum.NEXT, payload: { audio } });
    };

    const onClickPrev = (audio: AudioType) => {
        dispatchRedux(handleLoadingAudio(true));
        dispatch({ type: ActionAudioEnum.PREV, payload: { audio } });
    };

    const onClickPlay = () => {
        dispatch({ type: ActionAudioEnum.PLAY, payload: state });
    };

    const onClickPause = () => {
        dispatch({ type: ActionAudioEnum.PAUSE, payload: state });
    };

    const onClickToggleLoop = () => {
        dispatch({ type: ActionAudioEnum.LOOP, payload: state });
    };

    return (
        <AudioContext.Provider
            value={{
                ...state,
                onPickAudio,
                onClickNext,
                onClickPrev,
                onClickPlay,
                onClickPause,
                onClickToggleLoop,
            }}
        >
            {children}
        </AudioContext.Provider>
    );
};

export default AudioProvider;
