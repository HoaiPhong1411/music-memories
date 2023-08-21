import useAudio from '@/hooks/useAudio';
import useAudioReducer from '@/hooks/useAudioReducer'
import { audioType } from '@/types/audio'
import { typeActionAudio } from '@/types/reducer';
import React from 'react'

const AudioItem = ({audio,isSelected = false}: {audio: audioType, isSelected?: boolean}) => {
    const {onPickAudio} = useAudio();

    const handleClickItem = () => {
      onPickAudio(audio)
    }
  return (
    <li onClick={handleClickItem} className={`flex flex-row items-center w-full gap-2 cursor-pointer rounded-md p-2 active:bg-opacity-white hover:bg-hover-secondary transition-all ${isSelected && 'bg-opacity-secondary'}`} >
        <img src={audio.image} alt="" className='w-12 h-12 rounded-full ' />
        <span className='text-base font-light md:w-[80%] truncate'>{audio.name}</span>
    </li>
  )
}

export default AudioItem