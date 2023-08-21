export type audioType = {
    link: string;
    name: string;
    id: number;
    image: string;
    duration: number;
};

export type AudioContextType = {
    audio: audioType;
    onPickAudio: (audio: audioType) => void;
    onClickNext: (audio: audioType) => void;
    onClickPrev: (audio: audioType) => void;
};
