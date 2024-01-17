"use client"
import { Palette } from "lucide-react";

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useTheme } from "next-themes";

export const ThemeMenu = () => {
    const getTheme = useTheme().theme;
    const { setTheme } = useTheme();
    
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="flex gap-2 font-bold outline-none text-primary">
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