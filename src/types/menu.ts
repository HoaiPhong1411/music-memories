import { ReactNode } from 'react';

export interface TMenuItem {
    id: string;
    icon: ReactNode;
    name: string;
    link: string;
    target?: string;
}
