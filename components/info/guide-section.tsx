export default function GuideSection() {
  return (
    <section className="bg-guide-texture bg-cover bg-center bg-no-repeat">
      <div className="bg-[#32548F] bg-opacity-80">
        <div className="mx-auto flex max-w-screen-2xl flex-col items-center gap-y-6 px-4 py-20 md:gap-y-12 md:px-10 lg:gap-y-16 xl:gap-y-20 xl:px-20">
          <h1 className="max-w-full text-center text-[40px] font-bold text-white md:text-[45px] lg:max-w-[800px] lg:text-[55px] xl:text-[65px] 2xl:max-w-[998px] 2xl:text-[75px]">
            Why is a website important for your brand
          </h1>
          <p className="text-center text-xl font-medium text-white md:text-2xl xl:text-[30px] xl:leading-relaxed">
            A website is the digital storefront of your brand, providing a 24/7
            platform for engagement and interaction with your audience. It
            offers credibility, accessibility, and visibility in today&apos;s
            digital landscape, serving as a vital tool for showcasing your
            products, services, and brand story. With a website, you establish a
            strong online presence, reach a wider audience, and create
            opportunities for growth and success. Don&apos;t miss out on the
            countless benefits a website brings to your brand&apos;s journey.
          </p>
          <button className="rounded-md bg-[#3F9DD6] px-4  py-2 text-[20px] font-medium text-white md:px-6 md:py-3 lg:text-2xl xl:px-8 xl:py-4">
            See More
          </button>
        </div>
      </div>
    </section>
  );
}
