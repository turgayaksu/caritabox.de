import { IconCard } from "@/components";
import { IconType } from "react-icons";

type IconCardProps = {
  card1: { icon: IconType; title: string; text: string };
  card2: { icon: IconType; title: string; text: string };
  card3: { icon: IconType; title: string; text: string };
  card4: { icon: IconType; title: string; text: string };
  card5: { icon: IconType; title: string; text: string };
  card6: { icon: IconType; title: string; text: string };
};

const IconCards = ({
  card1,
  card2,
  card3,
  card4,
  card5,
  card6,
}: IconCardProps) => {
  return (
    <section className="bg-slate-100/80 dark:bg-slate-900">
      <div className="container mx-auto grid grid-cols-1 gap-x-24 px-4 pt-16 lg:grid-cols-3 lg:flex-row lg:px-44">
        <IconCard icon={card1.icon} title={card1.title}>
          {card1.text}
        </IconCard>
        <IconCard icon={card2.icon} title={card2.title}>
          {card2.text}
        </IconCard>
        <IconCard icon={card3.icon} title={card3.title}>
          {card3.text}
        </IconCard>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-24 px-4 lg:grid-cols-3 lg:flex-row lg:px-44">
        <IconCard icon={card4.icon} title={card4.title}>
          {card4.text}
        </IconCard>
        <IconCard icon={card5.icon} title={card5.title}>
          {card5.text}
        </IconCard>
        <IconCard icon={card6.icon} title={card6.title}>
          {card6.text}
        </IconCard>
      </div>
    </section>
  );
};

export default IconCards;
