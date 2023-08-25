import { createSlice } from '@reduxjs/toolkit';
import { AudioType } from '@/types/audio';
import { audios } from '@/data/audios';
import _ from 'lodash';

// Type for our state
export interface AudioState {
    audio: AudioType;
    isLoading?: boolean;
    volume?: number;
    isShowVolume?: boolean;
}
const volume = _.toNumber(JSON.parse(localStorage.getItem('volume') || '1'));

// Initial state
const initialState: AudioState = {
    audio: audios[0],
    isLoading: true,
    volume,
    isShowVolume: false,
};

// Actual Slice
export const audioSlice = createSlice({
    name: 'audio',
    initialState,
    reducers: {
        // Action to set the authentication status
        setLoadingState(state, action) {
            state.isLoading = action.payload;
        },
        setVolumeState(state, action) {
            state.volume = action.payload;
        },
        setShowVolume(state, action) {
            state.isShowVolume = action.payload;
        },
    },
});

export const { setLoadingState, setVolumeState, setShowVolume } = audioSlice.actions;

export default audioSlice.reducer;
