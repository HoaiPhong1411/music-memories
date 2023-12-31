import React, { HTMLProps, ReactElement, ReactNode } from 'react';

const Box = ({
    children,
    classN,
}: {
    children?: ReactElement | ReactNode;
    classN?: HTMLProps<HTMLElement>['className'];
}) => {
    return <div className={`rounded-md md:p-6 ${classN}`}>{children}</div>;
};

export default Box;
