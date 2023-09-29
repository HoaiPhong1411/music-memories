import React from 'react';
import { TfiMenu } from 'react-icons/tfi';
import ButtonPrev from './ButtonPrev';
import Button from '../ui/Button';
import { FaPause } from 'react-icons/fa';
import { BiSolidRightArrow } from 'react-icons/bi';
import ButtonNext from './ButtonNext';
import { ImLoop } from 'react-icons/im';

interface ActionAudioProps {
    clickShowMenu: () => void;
    onClickPrevAudio: () => void;
    handleTogglePlay: () => void;
    onClickNextAudio: () => void;
    onClickToogleLoop: () => void;
    isLoop: boolean;
    isPlaying: boolean;
}

const ActionAudio = ({
    clickShowMenu,
    onClickPrevAudio,
    handleTogglePlay,
    onClickNextAudio,
    onClickToogleLoop,
    isLoop,
    isPlaying,
}: ActionAudioProps) => {
    return (
        <div className="w-full lg:w-2/3 flex flex-row justify-between items-center px-2 md:px-4 gap-4 ">
            {/* menu element */}
            <div onClick={clickShowMenu} className="hover:text-primary-main p-2 cursor-pointer select-none">
                <TfiMenu className="text-xl" />
            </div>

            {/* next pause prev element */}
            <div className="w-7/12 lg:w-6/12 flex flex-row justify-between items-center">
                <ButtonPrev
                    onClick={() => {
                        // onClickPrev(audio);
                        onClickPrevAudio();
                    }}
                />
                <Button onClick={handleTogglePlay} classN="rounded-full p-2 bg-primary-main hover:text-white">
                    {isPlaying ? (
                        <FaPause className="text-xl md:text-base" />
                    ) : (
                        <BiSolidRightArrow className="text-xl md:text-base" />
                    )}
                </Button>
                <ButtonNext
                    onClick={() => {
                        // onClickNext(audio);
                        onClickNextAudio();
                    }}
                />
            </div>

            {/* loop element */}
            <Button onClick={onClickToogleLoop} classN={`rounded-full p-2 ${isLoop ? 'text-primary-main ' : ''} `}>
                {/* <div className={`cursor-pointer ${isLoop ? 'text-primary-main' : ''}`} onClick={onClickToogleLoop}> */}
                <ImLoop className="text-xl md:text-lg" />
            </Button>
            {/* </div> */}
        </div>
    );
};

export default ActionAudio;
