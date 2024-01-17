import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { experiences } from "@/data/experiences"
export const Experiences = () => {
    return (
        <section className="grid gap-2 p-4 border-2 border-pink-100 rounded dark:border-none dark:bg-zinc-900/20">
            <h1 className="font-bold text-black md:text-2xl dark:text-white">Minhas experiências 🧳</h1>
            {experiences.map((item, index) => (
                <div key={index} className="flex flex-col gap-4 px-4 py-2 border-pink-100 rounded md:items-center md:flex-row dark:border-none">
                <Avatar className="hidden mt-2 md:block md:mt-0 ring-1 ring-primary ring-offset-2 dark:ring-offset-slate-900">
                    <AvatarImage
                        src={item.url}    
                        className="object-cover"
                    />
                        <AvatarFallback>{item.alt}</AvatarFallback>
                </Avatar>
                <img src={item.mobile_url ? item.mobile_url : item.url} alt={item.alt} className="self-start object-cover w-24 h-24 rounded md:hidden"/>
                <div>
                    <h1 className="text-regular">{item.name}</h1>
                    <span className="block text-xs md:text-sm text-muted-foreground ">{item.role}</span>
                        <span className="block text-xs md:text-sm text-muted-foreground">{item.period} {item.length}</span>
                </div>
            </div>
            ))}
        </section>
    )
}