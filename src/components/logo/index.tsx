// third-party

import { MdMusicNote } from 'react-icons/md';

// project import

// Interface
interface ILogoProps {}

// ==============================|| Logo ||============================== //

const Logo = (props: ILogoProps) => {
    return (
        <>
            <div className="h-16 flex justify-start items-center gap-3">
                <div className="border-2 p-2 border-white rounded-full bg-layout-bg">
                    <MdMusicNote className="h-4 w-4" />
                </div>
                <span className="text-lg">Memories</span>
            </div>
        </>
    );
};

export default Logo;
