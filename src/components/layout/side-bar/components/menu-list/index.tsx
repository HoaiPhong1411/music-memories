// third-party

import { TMenuItem } from '@/types/menu';
import _ from 'lodash';
import MenuItem from '../menu-item';

// project import

// Interface
interface IMenuListProps {
    menus: TMenuItem[];
}

// ==============================|| MenuList ||============================== //

const MenuList = (props: IMenuListProps) => {
    const { menus } = props;
    const id = 'zingchart';
    return (
        <>
            <ul className="flex flex-col">
                {_.map(menus, (menu: TMenuItem) => (
                    <MenuItem key={menu.id} menu={menu} active={menu.id === id} />
                ))}
            </ul>
        </>
    );
};

export default MenuList;
