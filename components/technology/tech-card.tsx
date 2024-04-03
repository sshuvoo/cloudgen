import { roboto } from "@/fonts/fonts";
import Image from "next/image";

interface TechDataType {
  title: string;
  icon: string;
}

export default function TechCard({ title, icon }: TechDataType) {
  return (
    <div className="flex w-[260px] flex-col items-center bg-[#284B82] py-10 transition-all hover:bg-[#3F9DD6] space-y-6">
      <Image src={icon} alt={`${title}-icon`} width={48} height={48} />
      <h2 className={`text-4xl font-medium text-white ${roboto.className}`}>
        {title}
      </h2>
    </div>
  );
}
