import { Card, CardDescription, CardTitle } from "@/components/ui/card"

export const AboutMe = () => {
    return (
        <Card className="flex flex-col gap-2 p-4 mt-5 bg-transparent border-2 border-pink-100 dark:bg-zinc-900/20 dark:border-none">
            <CardTitle className="text-black dark:text-white"> 
                Olá! 😃 
            </CardTitle>
            <CardDescription className="p-2 leading-relaxed text-black break-words dark:text-white md:text-md">
                Meu nome é Kellton Hamaia, e sou desenvolvedor fullstack!
                Atualmente estou no quarto semestre da graduação em Tecnologias em Sistemas para a Internet, pelo IFPR de Jacarezinho.
                Amo este mundo da programação, pois através dos códigos, sou capaz de trazer a vida minhas ideias do zero :)
            </CardDescription>
        </Card>
    )    
}