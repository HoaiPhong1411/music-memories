import { AudioType } from '@/types/audio';
import Box from '../ui/Box';
import ListAudio from './ListAudio';

const BoxListAudio = ({ audios }: { audios: AudioType[] }) => {
    return (
        <Box classN="w-full md:w-2/5 px-2 py-4 md:px-4 hidden md:flex flex-col items-center gap-4 ">
            <ListAudio audios={audios} />
        </Box>
    );
};

export default BoxListAudio;
