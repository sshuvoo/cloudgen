export default function HeroButton({ title }: { title: string }) {
  return (
    <button className="rounded-[6px] text-white bg-[#3F9DD6] xl:h-14 py-2 lg:py-3 xl:py-4 px-4 md:px-5 xl:px-6 text-lg xl:text-xl">
      {title}
    </button>
  );
}
