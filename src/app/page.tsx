'use client';

import { createContext } from 'react';
import _ from 'lodash';
import { audioType } from '@/types/audio';
import Box from '../components/ui/Box';
import BoxAudio from '../components/BoxAudio';
import BoxListAudio from '../components/BoxListAudio';
import { audios } from '@/data/audios';
import AudioProvider from '@/contexts/AudioProvider';

export default function Home() {
    return (
        <>
            <AudioProvider>
                <div className="bg-home-mobile md:bg-home w-full h-screen flex justify-center items-center bg-contain">
                    <Box classN="w-full md:w-3/4 p-4 md:p-6 flex flex-col-reverse md:flex-row gap-4 md:gap-6 mx-4">
                        <BoxListAudio audios={audios} />
                        <BoxAudio />
                    </Box>
                </div>
            </AudioProvider>
        </>
    );
}
