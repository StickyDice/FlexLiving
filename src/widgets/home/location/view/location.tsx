import Image from "next/image";

export default function Location() {
  return (
    <section>
      <div className="centralize-container flex flex-col items-center">
        <h2 className="font-bold text-5xl mb-23">Choose your location</h2>
        <ul className="flex gap-5">
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
      </div>
    </section>
  );
}
