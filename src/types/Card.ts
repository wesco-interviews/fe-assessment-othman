export type Card = {
    title: string;
    body: string;
    image?: {
        src: string;
        alt: string;
    }
    button?: {
        href: string;
        label: string;
    }
}