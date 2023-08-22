export type audioType = {
    link: string;
    name: string;
    id: number;
    image: string;
    duration: number;
    isPlaying?: boolean;
    isLoop?: boolean;
};

export type AudioContextType = {
    audio: audioType;
    onPickAudio: (audio: audioType) => void;
    onClickNext: (audio: audioType) => void;
    onClickPrev: (audio: audioType) => void;
    onClickPlay: () => void;
    onClickPause: () => void;
    onClickToggleLoop: () => void;
};
