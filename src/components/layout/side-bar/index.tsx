// third-party
import Logo from '@/components/logo';
import { MdMusicNote } from 'react-icons/md';
import MenuList from './components/menu-list';
import { menuBottom, menuMain, menuSecond } from '@/constants/menus';
import Divider from '@/components/ui/Divider';
import MenuItem from './components/menu-item';
import SubscriptionButton from './components/subscription-button';
// project import

// Interface
interface ISideBarProps {}

// ==============================|| SideBar ||============================== //

const SideBar = (props: ISideBarProps) => {
    return (
        <aside className="w-[240px] bg-grey-primary-main h-[calc(100vh-90px)] flex flex-col gap-3">
            <div className="pl-4">
                <Logo />
            </div>
            <MenuList menus={menuMain} />
            <Divider className="my-2" variant="middle" />
            <MenuList menus={menuSecond} />
            <SubscriptionButton />
            <MenuItem menu={menuBottom} />
        </aside>
    );
};

export default SideBar;
