type Props = {
    icon: string,
    url: string,
    content: string;
    
}
export const Menuitem = ({ icon, url, content}: Props) => {
    return (
        <a  
            className="flex items-center w-full gap-2 px-4 py-2 text-white rounded hover:animate-pulse hover:bg-zinc-800 md:text-sm"
            href={url}
        >
            <img src={icon} alt="icon"/>
            <span>{content}</span>
        </a>
    )
}