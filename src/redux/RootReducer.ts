import { persistReducer } from 'redux-persist';
import { audioSlice } from './slices/audioSlice';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'audio',
    storage,
};

const rootReducer = {
    audio: persistReducer(persistConfig, audioSlice.reducer),
};

export default rootReducer;
