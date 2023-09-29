import { handleShowVolumeAudio } from '@/redux/slices/audioSlice';
import { dispatch } from '@/redux/store';
import { ChangeEvent, LegacyRef, MouseEvent, MouseEventHandler, ReactNode, useRef } from 'react';
import { ImVolumeHigh, ImVolumeLow, ImVolumeMedium, ImVolumeMute, ImVolumeMute2 } from 'react-icons/im';
import { useClickAway } from 'react-use';

interface VolumeAudioProps {
    volume: number;
    isShowVolume: boolean;
    handleVolumeChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const VolumeAudio = ({ volume, isShowVolume, handleVolumeChange }: VolumeAudioProps) => {
    const inputVolumeRef = useRef<any>(null);
    const elementVolumeRef = useRef<any>(null);
    let Element: ReactNode = <ImVolumeHigh />;
    if (volume >= 0.8) {
        Element = <ImVolumeMedium />;
    } else if (volume >= 0.5) {
        Element = <ImVolumeLow />;
    } else if (volume > 0) {
        Element = <ImVolumeMute />;
    } else {
        Element = <ImVolumeMute2 />;
    }

    const handleToggleVolume = (event: MouseEvent<HTMLDivElement> | MouseEvent | TouchEvent | Event) => {
        if (elementVolumeRef.current && elementVolumeRef.current.contains(event.target)) {
            return;
        }
        dispatch(handleShowVolumeAudio(false));
    };

    useClickAway(inputVolumeRef, (event: MouseEvent<HTMLDivElement> | MouseEvent | TouchEvent | Event) => {
        handleToggleVolume(event);
    });

    const handleShowVolume = () => {
        dispatch(handleShowVolumeAudio(!isShowVolume));
    };
    return (
        <div className="relative hover:text-opacity-white w-4 h-4 cursor-pointer">
            <div ref={elementVolumeRef} onClick={handleShowVolume} className="text-xl text-white">
                {Element}
            </div>
            <input
                ref={inputVolumeRef}
                className={`absolute ${
                    isShowVolume ? 'block' : 'hidden'
                } top-0 translate-y-[5.5rem] rotate-90 -right-full translate-x-[2.3rem] accent-opacity-primary transition-all`}
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
            />
        </div>
    );
};

export default VolumeAudio;
