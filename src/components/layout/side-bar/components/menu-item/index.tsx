// third-party

import { TMenuItem } from '@/types/menu';
import Link from 'next/link';
import { DetailedHTMLProps, LiHTMLAttributes } from 'react';

// project import

// Interface
interface IMenuItemProps extends DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> {
    menu: TMenuItem;
    active?: boolean;
}

// ==============================|| MenuItem ||============================== //

const MenuItem = (props: IMenuItemProps) => {
    const { menu, active = false, ...rest } = props;
    return (
        <>
            <li className="w-full list-none" {...rest}>
                <Link
                    href={menu.link}
                    className={`w-full px-4 py-3 text-2xl border-l-2 text-text-placeholder hover:text-white-primary inline-flex justify-start items-center gap-3 ${
                        active
                            ? 'bg-grey-primary-light border-l-primary-main text-white-primary'
                            : 'border-l-transparent'
                    }`}
                >
                    {menu.icon}
                    <span className="text-sm">{menu.name}</span>
                </Link>
            </li>
        </>
    );
};

export default MenuItem;
