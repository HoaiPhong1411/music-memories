import { createSlice } from '@reduxjs/toolkit';
import { AudioType } from '@/types/audio';
import { audios } from '@/data/audios';
import _ from 'lodash';
import { getvolumeLocalstorage } from '@/utils/localstorage';
import storage from 'redux-persist/lib/storage';

// Type for our state
export interface AudioState {
    audios: AudioType[];
    audio: AudioType;
    isLoading?: boolean;
    volume?: number;
    isShowVolume?: boolean;
    isPlaying?: boolean;
    isLoop?: boolean;
}
const volume = _.toNumber(getvolumeLocalstorage);
const audio = audios[0];

const getDataLocalStorage: any = async () => {
    const dataAudio = await storage.getItem('persist:audio').then((res: any) => JSON.parse(res));
    return JSON.parse(dataAudio.audio);
};

// Initial state
const initialState: AudioState = {
    audios: audios,
    audio,
    isLoading: true,
    volume,
    isShowVolume: false,
    isPlaying: false,
};

initialState.audio = getDataLocalStorage();

// Actual Slice
export const audioSlice = createSlice({
    name: 'audio',
    initialState,
    reducers: {
        // Action to set the authentication status
        handleLoadingAudio(state, action) {
            state.isLoading = action.payload;
        },
        handleVolumeAudio(state, action) {
            state.volume = action.payload;
        },
        handleShowVolumeAudio(state, action) {
            state.isShowVolume = action.payload;
        },
        handlePickAudio(state, action) {
            state.audio = action.payload;
            state.isLoading = true;
            state.isPlaying = true;
        },
        handleNextAudio(state, action: { payload?: any; type: string }) {
            const currentIndex = audios.findIndex((audio) => audio.id === state.audio.id);
            state.audio = audios[(currentIndex + 1) % audios.length];
            state.isLoading = true;
            state.isPlaying = true;
        },
        handlePrevAudio(state, action: { payload?: any; type: string }) {
            const currentIndex = audios.findIndex((audio) => audio.id === state.audio.id);
            state.audio = audios[(currentIndex - 1) % audios.length];
            state.isLoading = true;
            state.isPlaying = true;
        },
        handlePlayAudio(state, action: { payload?: any; type: string }) {
            state.isPlaying = true;
        },
        handlePauseAudio(state, action: { payload?: any; type: string }) {
            state.isPlaying = false;
        },
        handleLoopAudio(state, action: { payload?: any; type: string }) {
            state.isLoop = !state.isLoop;
        },
    },
});

export const {
    handleLoadingAudio,
    handleVolumeAudio,
    handleShowVolumeAudio,
    handlePickAudio,
    handlePlayAudio,
    handlePauseAudio,
    handleLoopAudio,
    handleNextAudio,
    handlePrevAudio,
} = audioSlice.actions;

export default audioSlice.reducer;
