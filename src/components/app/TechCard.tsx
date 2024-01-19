import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type Props = {
  url: string;
  name: string;
  learning?: boolean;
};
export const TechCard = ({ url, name, learning }: Props) => {
  return (
    <div className={`
      flex flex-col items-start w-full gap-2 p-4 rounded ${learning ? "bg-fuchsia-950 dark:bg-fuchsia-950": "bg-pink-950"} dark:bg-zinc-900/60 md:items-center
    `}>
      <TooltipProvider>
        <Tooltip>
            <TooltipTrigger>
                <div className="flex items-center gap-2 rounded md:p-5 lg:w-36 lg:h-36 ">
                  <img src={url} alt={name} className="object-contain w-6 h-6 rounded md:w-32 md:h-32 lg:w-auto lg:h-auto" />
                  <span className="block text-sm text-white md:hidden">{name}</span>
                </div>    
            </TooltipTrigger>
            <TooltipContent>
            <p>{name} {learning && "- Estou iniciando meu aprendizado!"}</p>
            </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};
