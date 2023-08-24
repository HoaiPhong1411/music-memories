import { audioSlice } from './slices/audioSlice';

const RootReducer = {
    audio: audioSlice.reducer,
};

export default RootReducer;
