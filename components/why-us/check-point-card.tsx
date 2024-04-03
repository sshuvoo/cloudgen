import Image from "next/image";

interface WhyUsDataTypes {
  title: string;
  desc: string;
}

export default function CheckPointCard({ title, desc }: WhyUsDataTypes) {
  return (
    <div className="grid grid-cols-[auto,1fr] gap-x-3">
      <div className="h-[30px] w-[30px] lg:h-[38px] lg:w-[38px]">
        <div className="relative h-[30px] w-[30px] translate-y-1 lg:h-[38px] lg:w-[38px]">
          <Image
            className="absolute left-1/2 top-1/2 w-[18px] -translate-x-1/2 -translate-y-1/2 lg:w-[24px]"
            src="/assets/check-point.svg"
            alt="check-point"
            width={24}
            height={22}
          />
          <Image
            className="w-[30px] lg:w-[38px]"
            src="/assets/check-circle.svg"
            alt="check-point"
            width={38}
            height={38}
          />
        </div>
      </div>
      <div>
        <p className="text-[#284B82] sm:text-xl lg:text-2xl">
          <span className="font-semibold">{title}</span> {desc}
        </p>
      </div>
    </div>
  );
}
