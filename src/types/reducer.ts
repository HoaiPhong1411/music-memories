import { audioType } from "./audio"

export enum typeActionAudio {PICK= 'PICK', NEXT= 'NEXT', PREV = 'PREV'}

export type actionAudioType = {
    type: typeActionAudio,
    payload: audioType
}