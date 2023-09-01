import React, { ReactElement, ReactNode } from 'react';

const Button = ({
    children,
    onClick,
    classN,
}: {
    onClick: () => void;
    children: ReactElement | ReactNode;
    classN?: string;
}) => {
    return (
        <div
            className={`flex flex-rơw cursor-pointer hover:text-primary-main transition-colors ${classN}`}
            onClick={onClick}
        >
            {children}
        </div>
    );
};

export default Button;
