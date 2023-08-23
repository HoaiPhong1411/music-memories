import { audios } from '@/data/audios';
import useAudioReducer from '@/hooks/useAudioReducer';
import audioReducer, { initialStateAudio } from '@/store/audioReducer';
import { AudioContextType, audioType } from '@/types/audio';
import { typeActionAudio } from '@/types/reducer';
import React, { ReactNode, createContext, useCallback, useEffect, useReducer } from 'react';

export const AudioContext = createContext<AudioContextType | null>(null);

const AudioProvider = ({ children }: { children: ReactNode }) => {
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

    const onClickPlay = useCallback(() => {
        dispatch({ type: typeActionAudio.PLAY, payload: audio });
    }, [audio]);

    const onClickPause = useCallback(() => {
        dispatch({ type: typeActionAudio.PAUSE, payload: audio });
    }, [audio]);

    const onClickToggleLoop = useCallback(() => {
        dispatch({ type: typeActionAudio.LOOP, payload: audio });
    }, [audio]);

    return (
        <AudioContext.Provider
            value={{ audio, onPickAudio, onClickNext, onClickPrev, onClickPlay, onClickPause, onClickToggleLoop }}
        >
            {children}
        </AudioContext.Provider>
    );
};

export default AudioProvider;
