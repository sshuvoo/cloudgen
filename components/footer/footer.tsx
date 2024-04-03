import Image from "next/image";
import SocialMedia from "./social-media";

export default function Footer() {
  return (
    <section>
      <div className="md:py-30 sm:py-25 mx-auto max-w-screen-2xl space-y-4 px-4 py-20 text-[#284B82] sm:px-10 lg:px-20 lg:py-36 xl:px-40 xl:py-44">
        <h1 className="text-center text-[40px] font-semibold sm:text-[45px] md:text-[50px] lg:text-[56px] xl:text-[66px]">
          Follow Us
        </h1>
        <p className="text-center text-lg md:text-xl lg:text-2xl xl:text-3xl">
          We specialize in building skilled teams tailored to your needs,
          ensuring that your organization thrives through collaboration
        </p>
        <ul className="flex justify-center gap-x-4 lg:gap-x-8">
          <li>
            <SocialMedia href="https://facebook.com/cloudgen">
              <Image
                className="h-6 w-6 lg:h-8 lg:w-8"
                src="/assets/facebook.svg"
                alt="social-icon"
                width={36}
                height={20}
              />
            </SocialMedia>
          </li>
          <li>
            <SocialMedia href="https://x.com/cloudgen">
              <Image
                className="h-6 w-6 lg:h-8 lg:w-8"
                src="/assets/twitter.svg"
                alt="social-icon"
                width={36}
                height={36}
              />
            </SocialMedia>
          </li>
          <li>
            <SocialMedia href="https://instagram.com/cloudgen">
              <Image
                className="h-6 w-6 lg:h-8 lg:w-8"
                src="/assets/instagram.svg"
                alt="social-icon"
                width={36}
                height={36}
              />
            </SocialMedia>
          </li>
          <li>
            <SocialMedia href="https://linkedin.com/cloudgen">
              <Image
                className="h-6 w-6 lg:h-8 lg:w-8"
                src="/assets/linkedin-in.svg"
                alt="social-icon"
                width={36}
                height={36}
              />
            </SocialMedia>
          </li>
        </ul>
      </div>
    </section>
  );
}
