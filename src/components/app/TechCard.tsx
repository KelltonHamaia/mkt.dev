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
    <div>
      <TooltipProvider>
        <Tooltip>
            <TooltipTrigger>
                <div className="p-5 rounded bg-pink-950 dark:bg-zinc-900/60">
                    {/* <span className="block mb-2 text-sm text-white"> {name} </span>       */}
                    <img src={url} alt={name} className="object-contain w-32 h-32"/> 
                </div>    
            </TooltipTrigger>
            <TooltipContent>
                <p>{name}</p>
            </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};
