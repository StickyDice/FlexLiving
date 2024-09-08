import IAppButtonVM from "~/shared/ui/app-button/i-app-button-vm";

export default function useHomeBookingGoToBookingPageAppButtonVM(): IAppButtonVM {
  return {
    props: {
      disabled: false,
    },
  };
}
