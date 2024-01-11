import { HomeItem } from "@/components/app/HomeItem";
import { MenuMobile } from "@/components/app/MenuMobile";
import { PersonalListItems } from "@/components/app/PersonalListItems";
import { SocialList } from "@/components/app/SocialListItems";
const Page = () => {

  return (
    <div className="flex flex-col w-full min-h-screen md:flex-row bg-zinc-950">

      <nav className="flex items-center justify-end p-4 md:hidden">
        <MenuMobile />
      </nav>

      <aside className='hidden h-screen p-4 border-r md:flex w-72 border-zinc-400'>
        <ul className='w-full '>
            <HomeItem />
            <PersonalListItems />
            <SocialList />
        </ul>
      </aside>
    </div>
  );

}

export default Page;