export const HomeItem = () => {
    return (
        <a  
            className="flex items-center w-full h-16 gap-2 px-4 text-white rounded hover:bg-zinc-800"
            href="/"
        >
            <img src="/icons/home.svg" alt="home" />
            <span>Início</span>
        </a>
    )
}