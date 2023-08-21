import React, { useEffect, useRef, useState } from 'react';
import Box from './ui/Box';
import { BiSolidLeftArrow, BiSolidRightArrow } from 'react-icons/bi';
import { ImLoop } from 'react-icons/im';
import { FaPause } from 'react-icons/fa';
import Button from './ui/Button';
import useAudio from '@/hooks/useAudio';
import _ from 'lodash';
import moment, { duration } from 'moment';
import useAudioReducer from '@/hooks/useAudioReducer';
import { typeActionAudio } from '@/types/reducer';
import { useToggle } from 'react-use';

const ButtonNext = ({ onClick }: { onClick: () => void }) => {
    return (
        <Button onClick={onClick}>
            <BiSolidRightArrow className="-mr-2" />
            <BiSolidRightArrow />
        </Button>
    );
};
const ButtonPrev = ({ onClick }: { onClick: () => void }) => {
    return (
        <Button onClick={onClick}>
            <BiSolidLeftArrow />
            <BiSolidLeftArrow className="-ml-2" />
        </Button>
    );
};

const TextTime = ({ children }: { children: string }) => {
    return <div className="text-gray text-sm font-light w-2/12 text-center">{children}</div>;
};

const BoxAudio = () => {
    const [isPlay, setIsPlay] = useState<boolean>(false);
    const [startTime, setStartTime] = useState<number>(0);
    const interVal = useRef<any>(null);
    const audioRef = useRef<any>(null);
    const progressBarRef = useRef<any>(null);
    const { audio, onClickNext, onClickPrev } = useAudio();
    // const [duration, setDuration] = useState<any>(0);
    const [isReplay, setIsReplay] = useToggle(false);

    useEffect(() => {
        if (audio && audioRef.current) {
            audioRef.current.play();
        }
    }, [audio]);

    useEffect(() => {
        if (isPlay && audioRef.current) {
            interVal.current = setInterval(() => {
                const percent = ((audioRef.current?.duration / 100) * audioRef.current.currentTime).toFixed(2);
                console.log(percent);
                progressBarRef.current.style.cssText = `width: ${percent}%`;
                setStartTime(audioRef.current.currentTime);
            }, 200);
        } else {
            interVal.current && clearInterval(interVal.current);
        }
    }, [isPlay]);

    const formatTime = (duration: number) => {
        return duration ? `${Math.floor(duration / 60)}:${(duration % 60).toFixed().padStart(2, '0')}` : '0:00';
    };

    const handlePlay = () => {
        audioRef.current?.play();
        setIsPlay(true);
    };
    const handlePause = () => {
        audioRef.current?.pause();
        setIsPlay(false);
    };

    return (
        <Box classN="w-full md:w-3/4 p-4 flex flex-col items-center justify-center gap-4">
            <h3 className="text-lg font-light text-white select-none">{audio.name}</h3>
            <img src={audio.image} className="rounded-md w-2/3 select-none" />
            <div className="w-2/3 flex flex-row justify-between px-4 gap-4">
                <div className="invisible">
                    <ImLoop />
                </div>
                <div className="w-8/12 flex flex-row gap-4 md:gap-8 justify-center">
                    <ButtonPrev onClick={() => onClickPrev(audio)} />
                    <Button onClick={isPlay ? handlePause : handlePlay}>
                        {isPlay ? <FaPause /> : <BiSolidRightArrow />}
                    </Button>
                    <ButtonNext onClick={() => onClickNext(audio)} />
                </div>
                <div className={`cursor-pointer ${isReplay && 'text-opacity-secondary'}`} onClick={() => setIsReplay()}>
                    <ImLoop className="text-lg" />
                </div>
            </div>
            <div className="w-full flex flex-row gap-4 justify-center items-center">
                <TextTime>{formatTime(startTime)}</TextTime>
                <div className="w-8/12 h-2 bg-opacity-gray rounded-lg flex flex-row items-center">
                    <div ref={progressBarRef} className={`h-full bg-white relative rounded-lg`}>
                        <div className="w-3 h-3 bg-white rounded-full absolute -right-2 top-0 -translate-y-[2px]" />
                    </div>
                    <audio src={audio.link} ref={audioRef} controls autoPlay hidden loop={isReplay} />
                </div>
                <TextTime>
                    {(audioRef.current?.duration && formatTime(audioRef.current.duration)) || formatTime(startTime)}
                </TextTime>
            </div>
        </Box>
    );
};

export default BoxAudio;
