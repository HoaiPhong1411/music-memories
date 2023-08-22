import React from 'react';
import Box from './ui/Box';
import { audioType } from '@/types/audio';
import _ from 'lodash';
import AudioItem from './AudioItem';
import useAudio from '@/hooks/useAudio';

const BoxListAudio = ({ audios }: { audios: audioType[] }) => {
    const { audio } = useAudio();
    return (
        <Box classN="w-full md:w-1/3 px-2 py-4 md:px-4 flex flex-col items-center gap-4">
            <h4 className="text-white">Danh sách bài hát</h4>
            <ul className="w-full flex flex-col max-h-[350px] overflow-y-auto gap-2">
                {_.map(audios, (audioItem: audioType) => (
                    <AudioItem key={audioItem.id} audio={audioItem} isSelected={audioItem.id === audio.id} />
                ))}
            </ul>
        </Box>
    );
};

export default BoxListAudio;
