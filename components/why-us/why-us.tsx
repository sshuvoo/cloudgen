import Image from "next/image";
import { whyUsData } from "./why-us-data";
import CheckPointCard from "./check-point-card";
import Link from "next/link";

export default function WhyUsSection() {
  return (
    <section>
      <div className="mx-auto flex max-w-screen-2xl flex-col-reverse gap-y-8 px-4 py-10 md:px-10 lg:px-20 xl:grid xl:grid-cols-[1fr,auto] xl:gap-y-0">
        <div className="space-y-12">
          <h1 className="text-[40px] font-bold text-[#284B82] md:text-[50px] xl:text-[60px] 2xl:text-[70px]">
            Why CloudGen?
          </h1>
          <div className="space-y-8">
            {whyUsData.map((point) => (
              <CheckPointCard key={point.id} {...point} />
            ))}
          </div>
          <div>
            <Link
              className="flex h-[48px] w-[172px] items-center justify-center gap-x-3 rounded-[5.2px] bg-[#3F9DD6]"
              href={"/show-more"}
            >
              <span className="text-[20px] font-medium text-white">
                Show More
              </span>
              <Image
                className="translate-y-[2px]"
                src={"/assets/right-arrow.svg"}
                alt="right-arrow"
                width={20}
                height={17}
              />
            </Link>
          </div>
        </div>
        <div className="flex justify-center xl:items-center">
          <Image
            className="w-[500px]"
            src="/assets/why-us-texture.svg"
            alt="why-us-texture"
            width={538}
            height={538}
          />
        </div>
      </div>
    </section>
  );
}
