import React from 'react';
import Button from '../ui/Button';
import { BiSolidLeftArrow } from 'react-icons/bi';

const ButtonPrev = ({ onClick }: { onClick: () => void }) => {
    return (
        <Button onClick={onClick}>
            <BiSolidLeftArrow className="text-xl md:text-base" />
            <BiSolidLeftArrow className="-ml-2 text-xl md:text-base" />
        </Button>
    );
};

export default ButtonPrev;
