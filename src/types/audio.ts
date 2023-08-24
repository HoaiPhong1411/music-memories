export type AudioType = {
    link: string;
    name: string;
    id: number;
    image: string;
    duration: number;
};

export type AudioContextType = {
    audio: AudioType;
    isPlaying?: boolean;
    isLoop?: boolean;
    onPickAudio: (audio: AudioType) => void;
    onClickNext: (audio: AudioType) => void;
    onClickPrev: (audio: AudioType) => void;
    onClickPlay: () => void;
    onClickPause: () => void;
    onClickToggleLoop: () => void;
};

export type InitialStateAudioType = {
    audio: AudioType;
    isPlaying?: boolean;
    isLoop?: boolean;
};
