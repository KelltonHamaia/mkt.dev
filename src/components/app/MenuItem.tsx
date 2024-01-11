type Props = {
    icon: string,
    url: string,
    content: string;
}
export const Menuitem = ({ icon, url, content }: Props) => {
    return (
        <a  
            className="flex items-center w-full gap-2 px-4 py-2 rounded md:text-white hover:animate-pulse md:text-sm md:hover:bg-zinc-800"
            href={url}
        >
            <img src={icon} alt="icon"/>
            <span className="text-base md:text-sm">{content}</span>
        </a>
    )
}