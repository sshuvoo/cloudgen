import { inter } from "@/fonts/fonts";

export default function MotoSection() {
  return (
    <section className="mt-10 bg-[#3F9DD6]">
      <div
        className={`mx-auto max-w-screen-2xl space-y-6 px-4 py-20 text-white sm:px-6 lg:px-10 xl:px-20 ${inter.className}`}
      >
        <h1 className="text-[30px] font-bold sm:text-[35px] md:text-[40px] lg:text-center lg:text-[45px] xl:px-20 xl:text-[56px]">
          Mission Is To Protect your Businesses & Much More Secure Label
        </h1>
        <p className="text-[18px] md:text-[20px] lg:text-center lg:font-semibold xl:px-10 xl:text-[25]">
          A robust business strategy lays the foundation for sustainable growth
          by aligning organizational goals with market dynamics and customer
          needs. It involves strategic decision-making,
        </p>
      </div>
    </section>
  );
}
