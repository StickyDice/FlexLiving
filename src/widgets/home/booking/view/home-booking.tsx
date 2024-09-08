import Image from "next/image";
import AppButton from "~/shared/ui/app-button/app-button";
import useHomeBookingGoToBookingPageAppButtonVM from "~/widgets/home/booking/vm/go-to-booking-page-app-button/use-home-booking-go-to-booking-page-app-button-vm";

export default function HomeBooking() {
  const buttonVm = useHomeBookingGoToBookingPageAppButtonVM();
  return (
    <section>
      <div className="centralize-container relative overflow-hidden w-360 h-[506] mb-35">
        <Image
          src="/bespoke-spaces.jpg"
          alt="Bespoke spaces"
          width={1440}
          height={506}
        />
        <div className="absolute left-20 top-35 rounded-r-3xl max-w-lg">
          <h2 className="text-white font-bold text-[52px] mb-4 leading-[60px]">
            Bespoke spaces
          </h2>
          <p className="text-xl text-white mb-15">
            Expertly designed to create extraordinary spaces with the flexible
            renter in mind
          </p>
          <AppButton vm={buttonVm}>Start booking</AppButton>
        </div>
      </div>
    </section>
  );
}
