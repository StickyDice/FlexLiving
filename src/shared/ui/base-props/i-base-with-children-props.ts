import { ReactElement, ReactNode } from "react";

export default interface IBaseWithChildrenProps {
  className?: string;
  children?: ReactNode[] | ReactElement | string | number;
}
