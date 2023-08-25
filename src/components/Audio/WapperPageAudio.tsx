import React, { useRef } from 'react';
import Box from '../ui/Box';
import BoxListAudio from './BoxListAudio';
import BoxAudio from './BoxAudio';
import ModalAudio from './ModalAudio';
import { audios } from '@/data/audios';

const WapperPageAudio = () => {
    const modalRef = useRef<any>(null);
    return (
        <div className="bg-home-mobile md:bg-home w-full h-screen flex justify-center items-center bg-cover overflow-hidden">
            <Box classN="w-full md:w-3/4 p-4 md:p-6 flex flex-col-reverse md:flex-row gap-4 md:gap-6 mx-4">
                <BoxListAudio audios={audios} />
                <BoxAudio clickShowMenu={() => modalRef.current?.show()} />
            </Box>
            <ModalAudio audios={audios} ref={modalRef} />
        </div>
    );
};

export default WapperPageAudio;
