import { TMenuItem } from '@/types/menu';
import { MdOutlineChangeCircle } from 'react-icons/md';
import { MdOutlineAreaChart } from 'react-icons/md';
import { MdOutlineQueueMusic } from 'react-icons/md';
import { MdOutlineLibraryMusic } from 'react-icons/md';
import { PiMusicNotesPlus } from 'react-icons/pi';
import { BiCategory } from 'react-icons/bi';
import { MdStarBorder } from 'react-icons/md';
import { IoMdAdd } from 'react-icons/io';
export const menuMain: TMenuItem[] = [
    { id: 'explore', icon: <MdOutlineChangeCircle />, link: '/', name: 'Khám Phá' },
    {
        id: 'zingchart',
        icon: <MdOutlineAreaChart />,
        link: '/',
        name: '#zingchart',
    },
    {
        id: 'radio',
        icon: <MdOutlineQueueMusic />,
        link: '/',
        name: 'Radio',
    },
    {
        id: 'library',
        icon: <MdOutlineLibraryMusic />,
        link: '/',
        name: 'Thư Viện',
    },
];

export const menuSecond: TMenuItem[] = [
    {
        id: 'new-music-chart-ranking',
        icon: <PiMusicNotesPlus />,
        link: '/',
        name: 'BXH Nhạc Mới',
    },
    {
        id: 'topic-category',
        icon: <BiCategory />,
        link: '/',
        name: 'Chủ đề & Thể Loại',
    },
    {
        id: 'top-100',
        icon: <MdStarBorder />,
        link: '/',
        name: 'Top 100',
    },
];

export const menuBottom: TMenuItem = {
    id: 'create-new-play-list',
    icon: <IoMdAdd />,
    link: '/',
    name: 'Tạo playlist mới',
};
