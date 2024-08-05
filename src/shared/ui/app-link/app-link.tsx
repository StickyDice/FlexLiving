import Link from "next/link";
import IAppLinkVM from "~/shared/ui/app-link/i-app-link-vm";
import IBaseWithChildrenProps from "~/shared/ui/base-props/i-base-with-children-props";

export interface IAppLinkProps extends IBaseWithChildrenProps {
  vm: IAppLinkVM;
}

export default function AppLink(props: IAppLinkProps) {
  const { className, children, vm } = props;
  return (
    <Link className={className} href={vm.href}>
      {children}
    </Link>
  );
}
