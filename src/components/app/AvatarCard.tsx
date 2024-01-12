import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { StackBadges } from "./StackBadges"
  

export const AvatarCard = () => {
    return (
        <Card className="flex flex-col border-none md:flex-row bg-zinc-900">
            <div>
                <img
                    src="/images/profile.jpg"
                    alt="profile pic"
                    className="object-cover w-full h-48 mx-auto md:max-w-56 md:max-h-56"
                />
            </div>
            <div>
            <CardHeader>
                <CardTitle>
                    <h1 className="text-white">Kellton Hamaia</h1>
                </CardTitle>
                <CardDescription className="text-zinc-400">Desenvolvedor Fullstack</CardDescription>
            </CardHeader>
            <CardFooter className="flex flex-wrap items-center justify-start gap-2 md:pt-3">
                <StackBadges />
            </CardFooter>
            </div>
        </Card>
    )
}