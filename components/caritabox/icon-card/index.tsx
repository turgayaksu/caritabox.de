import React from "react";
import { IconType } from "react-icons";

type IconCartProps = {
  icon: IconType;
  title: string;
  children: React.ReactNode;
};

const IconCard = ({ icon: Icon, title, children }: IconCartProps) => {
  return (
    <div className="mx-10 mb-20 flex flex-col space-y-8 lg:mx-0">
      <Icon
        size={60}
        className="bg-caritabox-100 text-caritabox-500 dark:bg-caritabox-800 rounded-md p-3"
      />
      <div className="text-xl font-medium">{title}</div>
      <p>{children}</p>
    </div>
  );
};

export default IconCard;
