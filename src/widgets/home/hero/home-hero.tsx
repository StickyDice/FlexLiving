import Image from "next/image";

export default function HomeHero() {
  return (
    <section>
      <div className="relative overflow-hidden w-360 h-191 mb-40">
        <Image src="/hero.jpg" alt="Hero image" fill objectFit="fill" />
        <div className="absolute px-16 py-16 left-0 top-36 bg-white rounded-r-3xl max-w-lg">
          <h2 className="text-black font-bold text-6xl mb-6">
            We&nbsp;rent&nbsp;your property
          </h2>
          <p className="text-black text-xl">
            Vel mattis integer pulvinar morbi quis amet eu. In nunc facilisis
            proin fermentum, consectetur cursus.
          </p>
        </div>
      </div>
    </section>
  );
}
