import * as React from 'react';
interface SidebarProps {
    archives: ReadonlyArray<{
        url: string;
        title: string;
    }>;
    description: string;
    social: ReadonlyArray<{
        icon: React.ElementType;
        name: string;
    }>;
    title: string;
}
export default function Sidebar(props: SidebarProps): JSX.Element;
export {};
