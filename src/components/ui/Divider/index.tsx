// third-party

import { DetailedHTMLProps, HTMLAttributes } from 'react';

// project import

// Interface
type Tvariant = 'fullWidth' | 'inset' | 'middle';
interface IDividerProps extends DetailedHTMLProps<HTMLAttributes<HTMLHRElement>, HTMLHRElement> {
    variant?: Tvariant;
}

// ==============================|| Divider ||============================== //

const Divider = (props: IDividerProps) => {
    const { className, variant = 'fullWidth', ...rest } = props;
    const margin: Record<Tvariant, string> = {
        fullWidth: 'mx-0',
        inset: 'ml-4',
        middle: 'mx-4',
    };
    return <hr className={`border-[1px] border-grey-primary-light ${margin[variant]} ${className}`} {...rest} />;
};

export default Divider;
