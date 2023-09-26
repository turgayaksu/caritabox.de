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
        className="rounded-md bg-primary-100 p-3 text-primary-500 dark:bg-primary-800"
      />
      <div className="text-xl font-medium">{title}</div>
      <p>{children}</p>
    </div>
  );
};

export default IconCard;
