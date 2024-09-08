import IAppButtonVM from "~/shared/ui/app-button/i-app-button-vm";
import IBaseWithChildrenProps from "~/shared/ui/base-props/i-base-with-children-props";

export interface IAppButtonProps extends IBaseWithChildrenProps {
  vm: IAppButtonVM;
}

export default function AppButton(props: IAppButtonProps) {
  const { vm, children, className } = props;
  return (
    <button
      disabled={vm.props.disabled}
      onClick={vm.onClick}
      className={`bg-forest-green px-10 py-3 rounded-3xl text-white text-[18px] leading-6 disabled:bg-slate-400 ${className}`}
    >
      {children}
    </button>
  );
}
