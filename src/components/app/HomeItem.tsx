import { HomeIcon } from "lucide-react"
export const HomeItem = () => {
    return (
        <a  
            className="flex items-center w-full h-16 gap-2 p-4 font-bold text-regular text-primary dark:text-white hover:animate-pulse md:text-md md:dark:hover:bg-zinc-800 md:hover:bg-pink-50"
            href="/"
        >
            <HomeIcon width="24px" height="24px" stroke="#933B56"/>
            <span>Início</span>
        </a>
    )
}

