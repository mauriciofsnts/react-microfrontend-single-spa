interface MainFeaturedPostProps {
    post: {
        description: string;
        image: string;
        imageText: string;
        linkText: string;
        title: string;
    };
}
export default function MainFeaturedPost(props: MainFeaturedPostProps): JSX.Element;
export {};
