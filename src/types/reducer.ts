import { AudioType, InitialStateAudioType } from './audio';

export enum ActionAudioEnum {
    PICK = 'PICK',
    NEXT = 'NEXT',
    PREV = 'PREV',
    PLAY = 'PLAY',
    PAUSE = 'PAUSE',
    LOOP = 'LOOP',
}

export type ActionAudioType = {
    type: ActionAudioEnum;
    payload: InitialStateAudioType;
};
