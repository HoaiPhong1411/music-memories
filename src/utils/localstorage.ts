import { audios } from '@/data/audios';
import { AudioType } from '@/types/audio';

export const getvolumeLocalstorage = () => {
    if (typeof window !== 'undefined') {
        return JSON.parse(localStorage.getItem('volume') || '1');
    } else {
        return 1;
    }
};

export const setvolumeLocalstorage = async (volume: number) => {
    if (typeof window !== 'undefined') {
        try {
            localStorage.setItem('volume', JSON.stringify(volume));
            return { message: 'success' };
        } catch (error) {
            return { message: 'error' };
        }
    } else {
        return { message: 'error' };
    }
};

export const getAudioLocalStorage = () => {
    if (typeof window !== 'undefined') {
        return JSON.parse(localStorage.getItem('audio') || JSON.stringify(audios[0]));
    } else {
        return audios[0];
    }
};

export const setAudioLocalStorage = async (audio: AudioType) => {
    if (typeof window !== 'undefined') {
        try {
            localStorage.setItem('audio', JSON.stringify(audio));
            return { message: 'success' };
        } catch (error) {
            return { message: 'error' };
        }
    } else {
        return { message: 'error' };
    }
};
