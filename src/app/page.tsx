import { AvatarCard } from "@/components/app/AvatarCard";
import { HomeItem } from "@/components/app/HomeItem";
import { MenuMobile } from "@/components/app/MobileMenu";
import { PersonalListItems } from "@/components/app/PersonalListItems";
import { SocialList } from "@/components/app/SocialListItems";
const Page = () => {

  return (
    <div className="flex flex-col w-full min-h-screen md:flex-row bg-zinc-950">
      <MenuMobile />

      <aside className='hidden h-screen p-4 border-r md:flex w-72 border-zinc-700'>
        <ul className='w-full '>
            <HomeItem />
            <PersonalListItems />
            <SocialList />
        </ul>
      </aside>
      <main className="flex flex-col items-center justify-center flex-1 p-4 md:gap-8">
        <AvatarCard />

      </main>
    </div>
  );

}

export default Page;