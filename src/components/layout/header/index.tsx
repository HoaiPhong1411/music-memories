'use client';
// third-party

import { useEffect, useState } from 'react';
import ArrowNavigate from './components/ArrowNavigate';
import SearchGlobal from './components/SearchGlobal';
import SettingSection from './components/SettingSection';
import ProfileSection from './components/ProfileSection';

// project import

// Interface
interface IHeaderProps {}

// ==============================|| Header ||============================== //

const Header = (props: IHeaderProps) => {
    return (
        <header className="fixed top-0 left-[240px] grid grid-cols-2 justify-between items-center w-[calc(100%-240px)] py-2 px-8">
            <div className="grid grid-cols-[] gap-4 items-center">
                <ArrowNavigate />
                <SearchGlobal />
            </div>
            <div className="">
                <SettingSection />
                <ProfileSection />
            </div>
        </header>
    );
};

export default Header;
