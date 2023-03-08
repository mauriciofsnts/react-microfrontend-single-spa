interface HeaderProps {
    sections: ReadonlyArray<{
        title: string;
        url: string;
    }>;
    title: string;
}
export default function Header(props: HeaderProps): JSX.Element;
export {};
