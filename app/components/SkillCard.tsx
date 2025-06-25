import React from "react";

type SkillCardProps = {
  Icon: React.ComponentType<{ size?: number }>;
  label: string;
  iconSize?: number;
};

const SkillCard: React.FC<SkillCardProps> = ({ Icon, label, iconSize = 50 }) => (
  <div className="bg-black flex text-white rounded-md p-2   flex-col justify-around items-center text-center h-30  w-30 ">
    <Icon size={iconSize} />
    <p>{label}</p>
  </div>
);

export default SkillCard;
