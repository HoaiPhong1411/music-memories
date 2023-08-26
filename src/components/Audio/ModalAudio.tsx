import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import ListAudio from './ListAudio';
import { AudioType } from '@/types/audio';

type ModalAudioType = {
    hidden: () => void;
    show: () => void;
};

const ModalAudio = forwardRef(({ audios }: { audios: AudioType[] }, ref: React.ForwardedRef<ModalAudioType>) => {
    const modalRef = useRef<any>(null);
    const modalElementList = useRef<any>(null);

    useImperativeHandle(ref, () => ({
        hidden: () => handleHidden(),
        show: () => handleShow(),
    }));

    const handleHidden = () => {
        setTimeout(() => {
            modalRef.current.classList.add('hidden');
        }, 300);
        modalElementList.current.classList.remove('animate-up-modal');
        modalElementList.current.classList.add('animate-down-modal');
    };

    const handleShow = () => {
        modalRef.current.classList.remove('hidden');
        modalElementList.current.classList.add('animate-up-modal');
        modalElementList.current.classList.remove('animate-down-modal');
    };

    const handleClickOutSide = (event: React.MouseEvent<HTMLElement>) => {
        if (event.target == modalRef.current) {
            handleHidden();
        }
    };

    return (
        <div
            onClick={handleClickOutSide}
            ref={modalRef}
            className="fixed top-0 left-0 z-10 overflow-hidden w-full h-full bg-opacity-black flex items-end hidden transition-all"
        >
            <div
                ref={modalElementList}
                className="w-full min-h-2/4 px-4 pt-4 pb-8 bg-black flex flex-col justify-start items-center gap-4 rounded-t-md transition-all duration-400 delay-75"
            >
                <div className="w-12 h-1 bg-opacity-white rounded-lg"></div>
                <div className="w-full flex flex-col gap-4 items-center">
                    <ListAudio audios={audios} handleClickItem={() => handleHidden()} />
                </div>
            </div>
        </div>
    );
});

ModalAudio.displayName = 'ModalAudio';

type ModalAudio = ModalAudioType;

export default ModalAudio;
