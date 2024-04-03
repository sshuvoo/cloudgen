import TechCard from "./tech-card";
import { techData } from "./tech-data";

export default function Technology() {
  return (
    <section>
      <div className="mx-auto max-w-screen-2xl space-y-10 px-4 py-10">
        <h1 className="text-center text-[40px] font-bold text-[#284B82] md:text-[50px] xl:text-[60px] 2xl:text-[70px]">
          Our Technology
        </h1>
        <div className="grid grid-cols-[repeat(auto-fit,260px)] justify-center gap-4">
          {techData.map((tech) => (
            <TechCard key={tech.id} {...tech} />
          ))}
        </div>
      </div>
    </section>
  );
}
