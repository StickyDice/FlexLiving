import Features from "~/widgets/home/features/view/features";
import Header from "~/widgets/header/view/header";
import HomeDescription from "~/widgets/home/description/home-description";
import HomeHero from "~/widgets/home/hero/home-hero";
import Location from "~/widgets/home/location/view/location";

export default function HomePage() {
  return (
    <>
      <Header />
      <HomeHero />
      <HomeDescription />
      <Features />
      <Location />
    </>
  );
}
