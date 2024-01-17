"use client"
import { personalData } from "@/data/menu";
import { Menuitem } from "./MenuItem";

export const PersonalListItems = () => {
    return (
        <li className='flex flex-col items-center gap-2'>
            <p className="self-start px-4 font-bold text-primary md:text-base">Eu</p>
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