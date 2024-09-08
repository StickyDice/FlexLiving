import { MouseEvent } from "react";

export default interface IAppButtonVM {
  props: {
    disabled?: boolean;
  };
  onClick?: (e: MouseEvent) => void;
}
