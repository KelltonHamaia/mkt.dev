import { MenuIcon } from "lucide-react";
import { personalData, socials } from '@/data/menu';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Menuitem } from "./MenuItem";

export const MenuMobile = () => {
    return (
        <nav className="flex items-center justify-end p-4 md:hidden">
            <DropdownMenu>
                <DropdownMenuTrigger><MenuIcon width="24px" height="24px" stroke="#933B56" /></DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>
                        <a href="/" className="text-base font-bold text-zinc-700">Início</a>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />

                    {personalData.map((item, index) => (
                        <DropdownMenuItem key={index}>
                            <Menuitem
                                icon={item.icon}
                                url={item.url}
                                content={item.content}
                            />
                        </DropdownMenuItem>
                    ))}
                    {socials.map((item, index) => (
                        <DropdownMenuItem key={index}>
                            <Menuitem
                                icon={item.icon}
                                url={item.url}
                                content={item.content}
                            />
                        </DropdownMenuItem>
                    ))}

                </DropdownMenuContent>
            </DropdownMenu>
        </nav>
    )
};
