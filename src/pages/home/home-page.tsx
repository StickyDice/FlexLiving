import Header from "~/widgets/header/view/header";
import HomeDescription from "~/widgets/home/description/home-description";
import HomeHero from "~/widgets/home/hero/home-hero";

export default function HomePage() {
  return (
    <>
      <Header />
      <HomeHero />
      <HomeDescription />
    </>
  );
}
