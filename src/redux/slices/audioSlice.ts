import { createSlice } from '@reduxjs/toolkit';
import { AudioType } from '@/types/audio';
import { audios } from '@/data/audios';

// Type for our state
export interface AudioState {
    audio: AudioType;
    isLoading?: boolean;
}

// Initial state
const initialState: AudioState = {
    audio: audios[0],
    isLoading: true,
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
    },
});

export const { setLoadingState } = audioSlice.actions;

export default audioSlice.reducer;
