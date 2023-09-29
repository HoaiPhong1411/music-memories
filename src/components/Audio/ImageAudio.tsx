import { AudioType } from '@/types/audio';
import React from 'react';

interface ImageAudioProps {
    isLoading: boolean;
    isPlaying: boolean;
    audio: AudioType;
}

const ImageAudio = ({ isLoading, isPlaying, audio }: ImageAudioProps) => {
    return (
        <div className="relative">
            <img
                src={audio.image}
                className={`rounded-full border-2 border-primary-light w-[150px] h-[150px] md:w-[200px] md:h-[200px] select-none ${
                    isPlaying ? 'animate-spin-slow' : ''
                }`}
                alt={audio?.name}
                loading="lazy"
            />

            {/* loading element */}
            {isLoading && (
                <div className="absolute top-0 left-0">
                    <div
                        className={`w-[150px] h-[150px] md:w-[200px] md:h-[200px] border-4 border-primary-light border-l-opacity-gray rounded-full animate-spin `}
                    ></div>
                </div>
            )}
        </div>
    );
};

export default ImageAudio;
