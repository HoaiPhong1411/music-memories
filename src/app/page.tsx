'use client';

import { createContext, useRef } from 'react';
import _ from 'lodash';
import { AudioType } from '@/types/audio';
import Box from '../components/ui/Box';
import { audios } from '@/data/audios';
import AudioProvider from '@/contexts/AudioProvider';
import BoxListAudio from '@/components/Audio/BoxListAudio';
import BoxAudio from '@/components/Audio/BoxAudio';
import ModalAudio from '@/components/Audio/ModalAudio';

export default function Home() {
    const modalRef = useRef<any>(null);
    return (
        <>
            <AudioProvider>
                <div className="bg-home-mobile md:bg-home w-full h-screen flex justify-center items-center bg-cover">
                    <Box classN="w-full md:w-3/4 p-4 md:p-6 flex flex-col-reverse md:flex-row gap-4 md:gap-6 mx-4">
                        <BoxListAudio audios={audios} />
                        <BoxAudio clickShowMenu={() => modalRef.current?.show()} />
                    </Box>
                    <ModalAudio audios={audios} ref={modalRef} />
                </div>
            </AudioProvider>
        </>
    );
}
