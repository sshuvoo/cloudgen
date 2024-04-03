import Image from "next/image";
import { serviceData } from "./service-data";
import ServiceCard from "./service-card";

export default function Services() {
  return (
    <section>
      <div className="mx-auto mt-5 max-w-screen-2xl px-4 md:px-10 xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-[auto,1fr]">
          <div className="flex items-center justify-center">
            <Image
              className="w-[400px] md:w-[600px]"
              src="/assets/service-texture.svg"
              alt="service-texture"
              width={856}
              height={789}
            />
          </div>
          <div className="space-y-10 py-10">
            <h1 className="text-[40px] font-bold leading-[1.2] text-[#1C256A] md:text-[50px] xl:text-[60px] 2xl:text-[70px]">
              Why we are best for web development?
            </h1>
            <p className="text-xl font-medium leading-[150%] text-[#2E4B86] xl:text-2xl">
              CloudGen excels in web development for several reasons. Our team
              combines expertise, creativity, and a client-centric approach to
              deliver unparalleled results. We prioritize user experience,
              ensuring every website we craft is visually stunning, highly
              functional, and optimized for performance. With a focus on
              innovation and collaboration, we tailor solutions to meet the
              unique needs of each client, ensuring satisfaction and success.
              Trust CloudGen for web development that sets your brand apart and
              drives tangible results.
            </p>
          </div>
        </div>
        <div className="mt-20 grid grid-cols-[repeat(auto-fit,300px)] justify-center gap-4">
          {serviceData.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
        <div className="flex justify-center py-10">
          <button className="rounded-md bg-[#3F9DD6] px-4  py-2 text-[20px] font-medium text-white md:px-6 md:py-3 lg:text-2xl xl:px-8 xl:py-4">
            See More
          </button>
        </div>
      </div>
    </section>
  );
}
