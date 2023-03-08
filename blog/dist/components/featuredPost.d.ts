interface FeaturedPostProps {
    post: {
        date: string;
        description: string;
        image: string;
        imageLabel: string;
        title: string;
    };
}
export default function FeaturedPost(props: FeaturedPostProps): JSX.Element;
export {};
