// third-party
import { useState } from 'react';
import { GoArrowRight } from 'react-icons/go';
import { GoArrowLeft } from 'react-icons/go';

// project imports

// Interface
interface IArrowNavigateProps {}

// ==============================|| ArrowNavigate ||============================== //

const ArrowNavigate = (props: IArrowNavigateProps) => {
    const [disable, setDisable] = useState<{ left: boolean; right: boolean }>({ left: true, right: false });

    const handleClickNext = () => {};
    const handleClickPrev = () => {};
    return (
        <>
            <div className="flex justify-between items-center gap-3">
                <GoArrowLeft
                    onClick={handleClickPrev}
                    className={`text-2xl ${disable.left ? 'text-grey-primary-light' : ''}`}
                />
                <GoArrowRight
                    onClick={handleClickNext}
                    className={`text-2xl ${disable.right ? 'text-grey-primary-light' : ''}`}
                />
            </div>
        </>
    );
};

export default ArrowNavigate;
