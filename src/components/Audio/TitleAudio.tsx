import { AudioType } from '@/types/audio';
import React from 'react';
import Typewriter from 'typewriter-effect';

const TitleAudio = ({ audio }: { audio: AudioType }) => {
    return (
        <h3 className="text-lg font-light text-white select-none">
            <Typewriter
                onInit={(typewriter) => {
                    typewriter.typeString(audio?.name).pauseFor(1500).deleteAll().start();
                }}
                options={{
                    strings: [audio?.name],
                    autoStart: true,
                    loop: true,
                }}
            />
        </h3>
    );
};

export default TitleAudio;
