import { BiSolidRightArrow } from 'react-icons/bi';
import Button from '../ui/Button';

const ButtonNext = ({ onClick }: { onClick: () => void }) => {
    return (
        <Button onClick={onClick}>
            <BiSolidRightArrow className="-mr-2 text-xl md:text-base" />
            <BiSolidRightArrow className="text-xl md:text-base" />
        </Button>
    );
};

export default ButtonNext;
