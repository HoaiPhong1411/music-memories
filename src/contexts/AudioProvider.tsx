import { audios } from '@/data/audios';
import useAudioReducer from '@/hooks/useAudioReducer';
import audioReducer, { initialStateAudio } from '@/store/audioReducer';
import { AudioContextType, AudioType } from '@/types/audio';
import { ActionAudioEnum } from '@/types/reducer';
import React, { ReactNode, createContext, useEffect, useReducer } from 'react';

export const AudioContext = createContext<AudioContextType | null>(null);

const AudioProvider = ({ children }: { children: ReactNode }) => {
    const [audio, dispatch] = useReducer(audioReducer, initialStateAudio);

    const onPickAudio = (audio: AudioType) => {
        dispatch({ type: ActionAudioEnum.PICK, payload: audio });
    };

    const onClickNext = (audio: AudioType) => {
        dispatch({ type: ActionAudioEnum.NEXT, payload: audio });
    };

    const onClickPrev = (audio: AudioType) => {
        dispatch({ type: ActionAudioEnum.PREV, payload: audio });
    };

    const onClickPlay = () => {
        dispatch({ type: ActionAudioEnum.PLAY, payload: audio });
    };

    const onClickPause = () => {
        dispatch({ type: ActionAudioEnum.PAUSE, payload: audio });
    };

    const onClickToggleLoop = () => {
        dispatch({ type: ActionAudioEnum.LOOP, payload: audio });
    };

    return (
        <AudioContext.Provider
            value={{ audio, onPickAudio, onClickNext, onClickPrev, onClickPlay, onClickPause, onClickToggleLoop }}
        >
            {children}
        </AudioContext.Provider>
    );
};

export default AudioProvider;
