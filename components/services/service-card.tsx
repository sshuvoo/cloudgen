import Image from "next/image";
interface ServicesType {
  title: string;
  desc: string;
  icon: string;
}

export default function ServiceCard({ icon, title, desc }: ServicesType) {
  return (
    <div className="flex w-[300px] flex-col items-center gap-y-2 rounded-[15px] bg-[#284B82] px-8 py-12">
      <Image src={icon} width={45} height={45} alt={`${title}-icon`} />
      <h2 className="text-center text-[30px] font-semibold text-white">
        {title}
      </h2>
      <p className="text-lg font-light text-[#FEFEFF] text-center">{desc}</p>
    </div>
  );
}
