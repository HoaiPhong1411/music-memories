import useAudio from '@/hooks/useAudio';
import _ from 'lodash';
import React, { ChangeEvent, Ref, forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';

interface AudioProps {}

type AudioTypeRef = {
    play: () => void;
    pause: () => void;
};

const TextTime = ({ children }: { children: string }) => {
    return <div className="text-gray text-sm font-light w-2/12 text-center">{children}</div>;
};

const Audio = forwardRef((props: AudioProps, ref: React.ForwardedRef<AudioTypeRef>) => {
    const { audio, onClickPlay, onClickPause, onClickNext } = useAudio();
    const [startTime, setStartTime] = useState<number>(0);
    const progressBarRef = useRef<any>(null);
    const audioRef = useRef<any>(null);

    useImperativeHandle(ref, () => ({
        play: () => {
            audioRef.current.play();
            onClickPlay();
        },
        pause: () => {
            audioRef.current.pause();
            onClickPause();
        },
    }));

    const handleChangeProgressBar = (e: ChangeEvent<HTMLInputElement>) => {
        const percent = (audioRef.current.duration / 100) * _.toNumber(e.target.value);
        if (audioRef.current) {
            audioRef.current.currentTime = percent;
            progressBarRef.current.value = percent;
        }
    };

    const handleTimeUpdate = () => {
        const duration = audioRef.current?.duration;
        const percent = _.toNumber(((duration / 100) * audioRef.current.currentTime).toFixed(2));
        setStartTime(percent);
        progressBarRef.current.value = audioRef.current.currentTime;
    };

    const formatTime = (duration: number) => {
        return duration ? `${Math.floor(duration / 60)}:${(duration % 60).toFixed().padStart(2, '0')}` : '0:00';
    };

    return (
        <div className="w-full flex flex-row gap-4 justify-center items-center">
            <TextTime>{formatTime(startTime)}</TextTime>
            <div className="w-8/12 h-2 bg-opacity-gray rounded-lg flex flex-row items-center">
                <input
                    defaultValue={0}
                    min={0}
                    max={audioRef.current?.duration || 0}
                    ref={progressBarRef}
                    onChange={handleChangeProgressBar}
                    type="range"
                    name="progress-bar"
                    id="progressBar"
                    className="w-full accent-opacity-secondary transition-all"
                />
                <audio
                    src={audio.link}
                    ref={audioRef}
                    controls
                    autoPlay
                    loop={audio.isLoop}
                    hidden
                    onEnded={() => {
                        onClickNext(audio);
                    }}
                    onTimeUpdate={handleTimeUpdate}
                />
            </div>
            <TextTime>
                {(audioRef.current?.duration && formatTime(audioRef.current.duration)) || formatTime(startTime)}
            </TextTime>
        </div>
    );
});

Audio.displayName = 'Audio';

type Audio = AudioTypeRef;

export default Audio;
