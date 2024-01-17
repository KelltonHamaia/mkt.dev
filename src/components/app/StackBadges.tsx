import { Badge } from "@/components/ui/badge";
import { BadgeContent } from "@/data/BadgeContent";

export const StackBadges = () => {
    return (
        <>
            {BadgeContent.map(item => (
                <Badge variant="default" className="font-semibold text-black dark:text-white" key={item}>
                    {item}
                </Badge>
            ))}
        </>
    )
}