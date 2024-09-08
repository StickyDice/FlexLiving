import Image from "next/image";
import AppButton from "~/shared/ui/app-button/app-button";
import useViewAllLocationAppButtonVM from "~/widgets/home/location/vm/view-all/use-view-all-location-app-button-vm";

export default function HomeLocation() {
  const vm = useViewAllLocationAppButtonVM();
  return (
    <section className="mb-35">
      <div className="centralize-container flex flex-col items-center">
        <h2 className="font-bold text-5xl mb-23">Choose your location</h2>
        <ul className="flex gap-5 mb-15">
          <li className="max-w-49">
            <h3 className="text-center font-bold text-2xl">Shoreditch</h3>
            <Image
              src="/temp/shoreditch.jpg"
              width={196}
              height={196}
              alt="shoreditch"
            />
          </li>
          <li className="max-w-49">
            <h3 className="text-center font-bold text-2xl">City of London</h3>
            <Image
              src="/temp/city-of-london.jpg"
              width={196}
              height={196}
              alt="shoreditch"
            />
          </li>
          <li>
            <h3 className="text-center font-bold text-2xl">The West End</h3>
            <Image
              src="/temp/the-west-end.jpg"
              width={196}
              height={196}
              alt="shoreditch"
            />
          </li>
          <li>
            <h3 className="text-center font-bold text-2xl">Kensington</h3>
            <Image
              src="/temp/kensington.jpg"
              width={196}
              height={196}
              alt="shoreditch"
            />
          </li>
          <li>
            <h3 className="text-center font-bold text-2xl">
              Kingston-Upon-Thames
            </h3>
            <Image
              src="/temp/kingston-upon-thames.jpg"
              width={196}
              height={196}
              alt="shoreditch"
            />
          </li>
          <li>
            <h3 className="text-center font-bold text-2xl">Hammersmith</h3>
            <Image
              src="/temp/hammersmith.jpg"
              width={196}
              height={196}
              alt="shoreditch"
            />
          </li>
        </ul>
        <AppButton vm={vm} className="font-bold">
          View all spaces
        </AppButton>
      </div>
    </section>
  );
}
