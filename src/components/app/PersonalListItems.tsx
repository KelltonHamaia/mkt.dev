import { personalData } from "@/data/menu";
import { Menuitem } from "./MenuItem";

export const PersonalListItems = () => {
    return (
        <li className='flex flex-col items-center gap-2'>
            <p className="self-start px-4 font-bold md:text-base text-zinc-400">Eu</p>
            {personalData.map(item => (
                <Menuitem
                    key={item.content}
                    icon={item.icon}
                    url={item.url}
                    content={item.content}
                />
            ))}
        </li>
    )
}