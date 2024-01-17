import { HomeIcon } from "lucide-react"
export const HomeItem = () => {
    return (
        <a  
            className="flex items-center w-full h-16 gap-2 px-4 text-black dark:text-white hover:animate-pulse md:text-sm md:dark:hover:bg-zinc-800 md:hover:bg-pink-50"
            href="/"
        >
            <HomeIcon width="24px" height="24px" stroke="#933B56"/>
            <span>Início</span>
        </a>
    )
}

