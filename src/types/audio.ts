export type AudioType = {
    link: string;
    name: string;
    id: number;
    image: string;
    duration: number;
    isPlaying?: boolean;
    isLoop?: boolean;
};

export type AudioContextType = {
    audio: AudioType;
    onPickAudio: (audio: AudioType) => void;
    onClickNext: (audio: AudioType) => void;
    onClickPrev: (audio: AudioType) => void;
    onClickPlay: () => void;
    onClickPause: () => void;
    onClickToggleLoop: () => void;
};
