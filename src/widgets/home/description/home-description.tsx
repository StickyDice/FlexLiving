import Image from "next/image";

export default function HomeDescription() {
  return (
    <>
      <section className="flex justify-center">
        <div className="flex max-w-320 rounded-5xl overflow-hidden">
          <div className="grid grid-cols-2 gap-0 basis-1/2">
            <Image
              src="/meeting.png"
              alt="decorative"
              width={320}
              height={189}
            />
            <Image
              src="/look-in-the-future.jpg"
              alt="decorative"
              width={320}
              height={189}
            />
            <Image src="/dial.png" alt="decorative" width={320} height={189} />
            <Image
              src="/high-five.jpg"
              alt="decorative"
              width={320}
              height={189}
            />
          </div>
          <div className="text-black bg-milk basis-1/2 flex justify-center flex-col px-20">
            <h2 className="text-13.5 font-bold text-center mb-6">
              The&nbsp;future&nbsp;is&nbsp;flexible
            </h2>
            <p className="text-xl">
              We believe in a world where finding a home is just a click away.
              Whether you’re selling your home, travelling for work or moving to
              a new city. Just bring your bags, and we’ll handle the rest.
            </p>
          </div>
        </div>
      </section>
      <section />
    </>
  );
}
