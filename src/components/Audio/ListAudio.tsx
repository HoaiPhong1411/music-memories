import { AudioType } from '@/types/audio';
import React from 'react';
import AudioItem from './AudioItem';
import _ from 'lodash';
import useAudio from '@/hooks/useAudio';
import { useSelector } from 'react-redux';

const ListAudio = ({ audios, handleClickItem }: { audios: AudioType[]; handleClickItem?: () => void }) => {
    const { audio } = useSelector((state: any) => state.audio);

    return (
        <>
            <h4 className="text-white select-none md:mt-4">Danh sách bài hát</h4>
            <ul className="w-full flex flex-col max-h-[350px] md:max-h-[575px] overflow-y-auto gap-2">
                {_.map(audios, (audioItem: AudioType) => (
                    <AudioItem
                        key={audioItem.id}
                        audio={audioItem}
                        isSelected={audioItem.id === audio.id}
                        handleClickItem={handleClickItem}
                    />
                ))}
            </ul>
        </>
    );
};

export default ListAudio;
