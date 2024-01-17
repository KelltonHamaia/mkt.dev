"use client"
import { Palette } from "lucide-react";

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useTheme } from "next-themes";

export const ThemeMenu = () => {
    const { setTheme } = useTheme();
    
    return (
        <DropdownMenu>
            <DropdownMenuTrigger
                className="flex w-full gap-2 px-4 py-2 font-bold rounded outline-none text-primary dark:text-white hover:animate-pulse md:text-sm md:dark:hover:bg-zinc-800 md:hover:bg-pink-50"
            >
                <Palette width="24px" height="24px" stroke="#933B56" /> Tema
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>
                    Tema 
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => setTheme("light")}>Claro</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>Escuro</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}