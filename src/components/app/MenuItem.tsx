type Props = {
    icon: string,
    url: string,
    content: string;
}
export const Menuitem = ({ icon, url, content }: Props) => {
    return (
        <a  
            className="flex items-center w-full gap-3 px-4 py-2 text-black rounded dark:text-white hover:animate-pulse md:text-sm md:dark:hover:bg-zinc-800 md:hover:bg-pink-50"
            href={url}
        >
            <img src={icon} alt="icon"/>
            <span className="text-base md:text-sm">{content}</span>
        </a>
    )
}