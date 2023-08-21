import { AudioContext } from '@/contexts/AudioProvider';
import React, { useContext } from 'react'

const useAudio = () => {
    const context = useContext(AudioContext)
  if(!context) throw 'err';

  return context
}

export default useAudio