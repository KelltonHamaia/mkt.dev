'use client'
import { useState } from "react"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { SunDim } from "lucide-react"
import {useTheme } from 'next-themes'


export function ThemeMobileSwitch() {
    const [dark, setDark] = useState<boolean>(false);
    const theme = useTheme();
    
    const changeTheme = () => {
        setDark(!dark);
        if (dark) {
            theme.setTheme("dark");
        } else {
            theme.setTheme("light");
        }
    }

    return (
    <div className="flex items-center space-x-2">
        <Switch
            id="airplane-mode"
            checked={dark}
            onCheckedChange={changeTheme}
        />
        <Label htmlFor="airplane-mode">
            <SunDim />      
        </Label>
    </div>
  )
}