import { audioType } from './audio';

export enum typeActionAudio {
    PICK = 'PICK',
    NEXT = 'NEXT',
    PREV = 'PREV',
    PLAY = 'PLAY',
    PAUSE = 'PAUSE',
    LOOP = 'LOOP',
}

export type actionAudioType = {
    type: typeActionAudio;
    payload: audioType;
};
