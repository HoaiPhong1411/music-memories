import { audios } from '@/data/audios';
import { setAudioList } from '@/redux/slices/audioSlice';
import { dispatch } from '@/redux/store';
import { useEffect, useRef } from 'react';
import Box from '../ui/Box';
import BoxAudio from './BoxAudio';
import ModalAudio from './ModalAudio';

const WapperPageAudio = () => {
    const modalRef = useRef<any>(null);
    useEffect(() => {
        dispatch(setAudioList(audios));
    }, []);
    return (
        <div className="w-[calc(100%-240px)] h-full flex justify-center items-end">
            <Box classN="w-full md:w-3/4 pb-24 md:p-6 flex flex-col-reverse md:flex-row justify-center gap-4 md:gap-6">
                {/* <BoxListAudio audios={audios} /> */}
                <BoxAudio clickShowMenu={() => modalRef.current?.show()} />
            </Box>
            <ModalAudio audios={audios} ref={modalRef} />
        </div>
    );
};

export default WapperPageAudio;
