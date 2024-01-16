import { HomeItem } from "@/components/app/HomeItem";
import { MenuMobile } from "@/components/app/MobileMenu";
import { AvatarCard } from "@/components/app/AvatarCard";
import { PersonalListItems } from "@/components/app/PersonalListItems";
import { SocialMediaList } from "@/components/app/SocialMediaList";
import { AboutMe } from "@/components/app/AboutMe";

const Page = () => {

  return (
    <div className="flex flex-col w-full min-h-screen md:flex-row bg-zinc-950">
      <MenuMobile />

      <aside className='hidden h-screen p-4 border-r md:flex w-72 border-zinc-700'>
        <ul className='w-full '>
            <HomeItem />
            <PersonalListItems />
            <SocialMediaList />
        </ul>
      </aside>
      <main className="flex flex-col items-center flex-1 p-4 md:mt-4 md:gap-8">
        <div className="container max-w-4xl">
          <AvatarCard />
          <AboutMe />
        </div>
      </main>
    </div>
  );

}

export default Page;