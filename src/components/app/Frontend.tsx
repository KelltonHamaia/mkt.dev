import { frontend } from "@/data/techs"
import { AlertItem } from "./AlertItem"
import { TechCard } from "./TechCard"

export const Frontend = () => { 
    return (
        <main className="grid gap-4 p-4 border-pink-100 rounded md:grid-cols-4 dark:border-none">
            <div className="grid col-span-4 gap-2">
                <h1 className="font-bold text-black md:text-2xl dark:text-white dark:bg-none">Tecnologias e ferramentas</h1>
                <p className="leading-relaxed">
                    As tecnologias e ferramentas listadas abaixo são as que eu estudo e utilizo em meus projetos.
                </p>
                <AlertItem description="Obs: Passe o mouse por cima das imagens!"/> 
            </div>
            
            {frontend.map((item, key) => (
                <TechCard url={item.url} name={item.name} learning={item.learning} key={key} />
            ))}
        </main>
    )
}