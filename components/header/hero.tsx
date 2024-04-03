import { inter } from "@/fonts/fonts";
import Image from "next/image";
import HeroButton from "./hero-button";

export default function Hero() {
  return (
    <section className={inter.className}>
      <div className="mx-auto flex max-w-screen-2xl flex-col-reverse gap-y-6 px-4 py-10 md:px-10 lg:px-20 xl:grid xl:grid-cols-[1fr,auto]">
        <div className="flex flex-col justify-between space-y-10">
          <h1 className="text-[40px] font-bold text-[#75E2FF] lg:text-[60px] xl:text-[70px] 2xl:text-[80px]">
            Web Development
          </h1>
          <p className="text-lg font-medium text-[#FFFBFB] sm:text-xl  sm:leading-[150%] md:text-[25px] md:leading-[150%] xl:leading-[150%]">
            Web development is the process of creating and maintaining websites,
            encompassing everything from designing the layout and functionality
            to writing code and optimizing for performance. It involves a range
            of skills and disciplines to produce a seamless, user-friendly
            online experience.
          </p>
          <div className="flex gap-x-4">
            <HeroButton title="Free Consultation" />
            <HeroButton title="Get Started" />
          </div>
        </div>
        <div className="flex justify-center">
          <Image
            className="w-[440px] md:w-[480px] lg:w-[520px] xl:w-[560px] 2xl:w-[600px]"
            src="/assets/hero-texture.svg"
            width={640}
            height={595}
            alt="hero-texture"
          />
        </div>
      </div>
    </section>
  );
}
