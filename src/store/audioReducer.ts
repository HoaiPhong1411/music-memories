import { audios } from '@/data/audios';
import { AudioType, InitialStateAudioType } from '@/types/audio';
import { ActionAudioType, ActionAudioEnum } from '@/types/reducer';

export const initialStateAudio: InitialStateAudioType = {
    audio: audios[0],
    isPlaying: false,
    isLoop: false,
};

const audioReducer = (state = initialStateAudio, action: ActionAudioType) => {
    const currentIndex = audios.findIndex((audio) => audio.id === state.audio.id);
    switch (action.type) {
        case ActionAudioEnum.PICK:
            return { ...action.payload, isPlaying: true, isShow: true };
        case ActionAudioEnum.NEXT:
            const nextAudio = currentIndex + 1 < audios.length ? audios[currentIndex + 1] : audios[0];
            return { audio: nextAudio, isPlaying: true, isLoading: true };
        case ActionAudioEnum.PREV:
            const prevAudio = currentIndex - 1 >= 0 ? audios[currentIndex - 1] : audios[audios.length - 1];
            return { audio: prevAudio, isPlaying: true, isLoading: true };
        case ActionAudioEnum.PLAY:
            return { ...state, isPlaying: true };
        case ActionAudioEnum.PAUSE:
            return { ...state, isPlaying: false };
        case ActionAudioEnum.LOOP:
            return { ...state, isLoop: !state.isLoop };

        default:
            return state;
    }
};

export default audioReducer;
