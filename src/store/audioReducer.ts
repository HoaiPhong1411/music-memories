import { audios } from "@/data/audios";
import { audioType } from "@/types/audio";
import { actionAudioType, typeActionAudio } from "@/types/reducer";


export const initialStateAudio: audioType = audios[0]

const audioReducer = (state = initialStateAudio,action:actionAudioType ) => {
    const currentIndex = audios.findIndex(audio => audio.id === state.id)
    switch (action.type) {
        case typeActionAudio.PICK:
            return action.payload
        case typeActionAudio.NEXT:
            const nextAudio = currentIndex + 1 < audios.length ? audios[currentIndex + 1] : audios[0]
            return nextAudio
        case typeActionAudio.PREV:
            const prevAudio = currentIndex - 1 >= 0 ? audios[currentIndex - 1] : audios[audios.length - 1]
            return prevAudio
        default:
            return state
            
    }
}

export default audioReducer