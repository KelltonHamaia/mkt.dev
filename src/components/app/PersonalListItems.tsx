import { personalData } from "@/data/aside";
import { Menuitem } from "./MenuItem";

export const PersonalListItems = () => {
    return (
        <li className='flex flex-col items-center gap-2'>
            <p className="self-start px-4 font-bold text-zinc-400 text-md">Eu</p>
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