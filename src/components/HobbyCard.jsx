import { Icons } from "/src/components/utils/icons";

const HobbyCard = ({ title, icon }) => {
  const IconComponent = Icons[icon];

  if (!IconComponent) return null;
  return (
    <div
      className="group flex items-center gap-x-5 py-4 px-4 
    bg-[#0F172A] border border-[#1E293B] rounded-xl 
    transition-all duration-300 hover:border-[#06b6d4] hover:scale-105"
    >
      <div
        className="h-14 w-14 rounded-xl bg-[#06b5d41f] 
      rotate-45 flex justify-center items-center 
      group-hover:bg-[#06b6d4] transition-all duration-300"
      >
        <div
          className="-rotate-45 text-[#06b6d4] 
        group-hover:text-white transition-all duration-300"
        >
          <IconComponent className="text-xl" />
        </div>
      </div>

      <div
        className="text-white text-[17px] font-medium 
      group-hover:text-[#06b6d4] transition-all duration-300"
      >
        {title}
      </div>
    </div>
  );
};

export default HobbyCard;
