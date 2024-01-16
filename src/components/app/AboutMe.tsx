import { Card, CardDescription, CardTitle } from "@/components/ui/card"

export const AboutMe = () => {
    return (
        <Card className="flex flex-col gap-2 p-4 mt-5 bg-transparent border-none bg-zinc-900">
            <CardTitle className="text-white"> 
                😃 Olá!
            </CardTitle>
            <CardDescription className="p-2 leading-relaxed text-white break-words md:text-md">
                Meu nome é Kellton Hamaia, e sou desenvolvedor fullstack!
                Atualmente estou no quarto semestre da graduação em Tecnologias em Sistemas para a Internet, pelo IFPR de Jacarezinho.
                Amo este mundo da programação, pois através dos códigos, sou capaz de trazer a vida minhas ideias do zero :)
            </CardDescription>
        </Card>
    )    
}