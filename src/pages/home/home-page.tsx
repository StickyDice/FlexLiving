import HomeFeatures from "~/widgets/home/features/view/home-features";
import Header from "~/widgets/header/view/header";
import HomeDescription from "~/widgets/home/description/home-description";
import HomeHero from "~/widgets/home/hero/home-hero";
import HomeLocation from "~/widgets/home/location/view/home-location";
import HomeBooking from "~/widgets/home/booking/view/home-booking";

export default function HomePage() {
  return (
    <>
      <Header />
      <HomeHero />
      <HomeDescription />
      <HomeFeatures />
      <HomeLocation />
      <HomeBooking />
    </>
  );
}
