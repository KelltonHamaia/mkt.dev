import { socials } from "@/data/aside";
import { Menuitem } from "./MenuItem";

export const SocialList = () => {
  return (
    <li className="flex flex-col items-center flex-1 gap-2 pt-10">
      <p className="self-start px-4 font-bold text-zinc-400 text-md">Redes Sociais</p>
      {socials.map((item) => (
        <Menuitem
          key={item.content}
          icon={item.icon}
          url={item.url}
          content={item.content}
        />
      ))}
    </li>
  );
};
