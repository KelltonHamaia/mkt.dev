import { HomeItem } from "@/components/app/HomeItem";
import { MenuMobile } from "@/components/app/MobileMenu";
import { AvatarCard } from "@/components/app/AvatarCard";
import { PersonalListItems } from "@/components/app/PersonalListItems";
import { SocialMediaList } from "@/components/app/SocialMediaList";
import { AboutMe } from "@/components/app/AboutMe";
import { ThemeMenu } from "@/components/app/ThemeMenu";
import { Experiences } from "@/components/app/Experiences";

const Page = () => {

  return (
    <div className="flex flex-col w-full min-h-screen md:flex-row ">
      <MenuMobile />

      <aside className='fixed hidden h-screen p-4 border-r md:flex md: w-72 border-zinc-700'>
        <ul className='flex flex-col w-full'>
            <HomeItem />
            <PersonalListItems />
            <SocialMediaList />
            <div className="flex items-end justify-start flex-1 pb-2 text-black dark:text-white">
              <ThemeMenu />
            </div>
        </ul>
      </aside>
      <main className="flex flex-col items-center flex-1 p-4 md:ml-72">
        <div className="container grid max-w-4xl gap-5 md:mt-4">
          <AvatarCard />
          <AboutMe />
          <Experiences />
        </div>
      </main>
    </div>
  );
 
}


export default Page;