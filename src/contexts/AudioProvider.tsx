import { audios } from '@/data/audios';
import useAudioReducer from '@/hooks/useAudioReducer';
import audioReducer, { initialStateAudio } from '@/store/audioReducer';
import { AudioContextType, audioType } from '@/types/audio';
import { typeActionAudio } from '@/types/reducer';
import React, { ReactNode, createContext, useEffect, useReducer } from 'react';

export const AudioContext = createContext<AudioContextType | null>(null);

const AudioProvider = ({ children }: { children: ReactNode }) => {
    //   const {state} = useAudioReducer();
    const [audio, dispatch] = useReducer(audioReducer, initialStateAudio);

    const onPickAudio = (audio: audioType) => {
        dispatch({ type: typeActionAudio.PICK, payload: audio });
    };

    const onClickNext = (audio: audioType) => {
        dispatch({ type: typeActionAudio.NEXT, payload: audio });
    };

    const onClickPrev = (audio: audioType) => {
        dispatch({ type: typeActionAudio.PREV, payload: audio });
    };

    return (
        <AudioContext.Provider value={{ audio, onPickAudio, onClickNext, onClickPrev }}>
            {children}
        </AudioContext.Provider>
    );
};

export default AudioProvider;
