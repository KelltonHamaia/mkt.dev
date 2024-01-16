import { StackBadges } from "./StackBadges"

export const AvatarCard = () => {
    return (
      <div className="flex flex-col items-center gap-6 md:items-center md:flex-row">
        <div className="w-24 h-24 overflow-hidden rounded-lg aspect-square">
          <img src="/images/profile.jpg" alt="Saitama" className="object-cover w-full h-full"/>
        </div>
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-center text-white sm:text-3xl md:text-left">Kellton Hamaia</h1>
          <span className="block text-center text-gray-700 md:text-left">Desenvolvedor Fullstack</span>
          <div className="flex flex-wrap justify-center gap-2 mt-2 md:justify-start">
            <StackBadges />
          </div>
        </div>
      </div>
    )
}