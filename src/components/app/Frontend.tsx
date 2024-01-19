import { frontend, backend, database, design, versionControl, testingTools, otherApps } from "@/data/techs"
import { AlertItem } from "./AlertItem"
import { TechCard } from "./TechCard"

export const Frontend = () => { 
    return (
        <section className="grid grid-cols-2 gap-4 border-pink-100 rounded md:grid-cols-2 lg:grid-cols-4 dark:border-none">
            
            <div className="grid gap-4 col-span-full">
                <h1 className="text-lg font-bold text-left text-black text-md md:text-2xl dark:text-white dark:bg-none">💻Tecnologias e Aplicativos </h1>
                <p className="leading-relaxed">
                    Observe as tecnologias e ferramentas que venho utilizando.
                    <br />
                    Acredito que conhecimento nunca é demais, então não se surpreenda pois, esse grid vai aumentar ;)
                </p>
                <AlertItem description="Obs: Passe o mouse por cima das imagens - Especialmente as destacadas :0"/> 
                <h2 className="text-lg font-bold text-pink-600 md:text-xl"> Front-end </h2>
            </div>
            
            {frontend.map((item, key) => (
                <TechCard url={item.url} name={item.name} learning={item.learning} key={key} />
            ))}

            <h2 className="text-lg font-bold text-pink-600 md:text-xl col-span-full"> Back-end </h2>

            {backend.map((item, key) => (
                <TechCard url={item.url} name={item.name} learning={item.learning} key={key} />
            ))}
            
            <h2 className="text-lg font-bold text-pink-600 md:text-xl col-span-full"> Banco de dados </h2>

            {database.map((item, key) => (
                <TechCard url={item.url} name={item.name} learning={item.learning} key={key} />
            ))}

            <h2 className="text-lg font-bold text-pink-600 md:text-xl col-span-full"> Versionamento de código </h2>
            
            {versionControl.map((item, key) => (
                <TechCard url={item.url} name={item.name} learning={item.learning} key={key} />
            ))}

            <h2 className="text-lg font-bold text-pink-600 md:text-xl col-span-full"> Design </h2>
            <TechCard url={design.url} name={design.name} learning={design.learning} key={design.name} />
            
            <h2 className="text-lg font-bold text-pink-600 md:text-xl col-span-full"> Testes </h2>            
            {testingTools.map((item, key) => (
                <TechCard url={item.url} name={item.name} learning={item.learning} key={key} />
            ))}

            <h2 className="text-lg font-bold text-pink-600 md:text-xl col-span-full"> Aplicativos em geral </h2>            
            {otherApps.map((item, key) => (
                <TechCard url={item.url} name={item.name} learning={item.learning} key={key} />
            ))}
            
        </section>
    )
}