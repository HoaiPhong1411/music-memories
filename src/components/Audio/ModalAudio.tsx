import React, { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';
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
        const isMobile = window.matchMedia('(max-width: 767px)').matches;
        if (isMobile) {
            modalElementList.current.classList.remove('animate-up-modal');
            modalElementList.current.classList.add('animate-down-modal');
            setTimeout(() => {
                modalElementList.current.classList.remove('animate-down-modal');
            }, 500);
        } else {
            modalElementList.current.classList.remove('animate-left-modal');
            modalElementList.current.classList.add('animate-right-modal');
            setTimeout(() => {
                modalElementList.current.classList.remove('animate-right-modal');
            }, 500);
        }
    };

    const handleShow = () => {
        const isMobile = window.matchMedia('(max-width: 767px)').matches;
        modalRef.current.classList.remove('hidden');
        if (isMobile) {
            modalElementList.current.classList.add('animate-up-modal');
            modalElementList.current.classList.remove('animate-down-modal');
        } else {
            modalElementList.current.classList.add('animate-left-modal');
            modalElementList.current.classList.remove('animate-right-modal');
        }
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
            className="fixed top-0 left-0 z-10 overflow-hidden w-full h-full bg-opacity-primary flex items-end hidden transition-all"
        >
            <div
                ref={modalElementList}
                className="w-full min-h-2/4 md:w-1/3 md:h-full pt-4 pb-8 backdrop-blur-lg flex flex-col justify-start items-center gap-4 rounded-t-md transition-all duration-400 delay-75"
            >
                <div className="w-12 h-1 bg-opacity-white rounded-lg"></div>
                <div className="w-full pl-2 flex flex-col gap-6 md:gap-8 items-center">
                    <ListAudio audios={audios} handleClickItem={() => handleHidden()} />
                </div>
            </div>
        </div>
    );
});

ModalAudio.displayName = 'ModalAudio';

type ModalAudio = ModalAudioType;

export default ModalAudio;
