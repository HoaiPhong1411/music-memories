import AudioProvider from '@/contexts/AudioProvider';
import audioReducer, { initialStateAudio } from '@/store/audioReducer';
import { AudioType } from '@/types/audio';
import React, { ReducerWithoutAction, useContext, useReducer } from 'react';

const useAudioReducer = () => {
    const [state, dispatch] = useReducer(audioReducer, initialStateAudio);

    return {
        state,
        dispatch,
    };
};

export default useAudioReducer;
