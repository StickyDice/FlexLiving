import { ReactNode } from "react";

export type ICardProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

export default function Card(props: ICardProps) {
  const { icon, title, description } = props;
  return (
    <div className="max-w-[305px] py-9 px-12 bg-light-green rounded-[30px]">
      <div className="w-[60px] h-[60px] flex justify-center items-center">
        {icon}
      </div>
      <h3 className="my-4 font-bold">{title}</h3>
      <p>{description}</p>
    </div>
  );
}
