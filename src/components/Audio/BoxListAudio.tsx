import React from 'react';
import { AudioType } from '@/types/audio';
import _ from 'lodash';
import AudioItem from './AudioItem';
import useAudio from '@/hooks/useAudio';
import ListAudio from './ListAudio';
import Box from '../ui/Box';

const BoxListAudio = ({ audios }: { audios: AudioType[] }) => {
    return (
        <Box classN="w-full md:w-2/5 px-2 py-4 md:px-4 hidden md:flex flex-col items-center gap-4 ">
            <ListAudio audios={audios} />
        </Box>
    );
};

export default BoxListAudio;
