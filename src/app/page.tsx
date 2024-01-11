import { HomeItem } from "@/components/app/HomeItem";
import { PersonalListItems } from "@/components/app/PersonalListItems";
import { SocialList } from "@/components/app/SocialListItems";

const Page = () => {

  return (
    <div className="flex w-full min-h-screen bg-zinc-950">
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