import { persistReducer } from 'redux-persist';
import { audioSlice } from './slices/audioSlice';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const persistConfig = {
    key: 'audio',
    storage,
    stateReconciler: autoMergeLevel2,
};

const rootReducer = {
    audio: persistReducer(persistConfig, audioSlice.reducer),
};

export default rootReducer;
