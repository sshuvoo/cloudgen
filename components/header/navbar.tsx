import Image from "next/image";
import { navlinkData } from "./navlink-data";
import Link from "next/link";
import { inter, roboto } from "@/fonts/fonts";

export default function Navbar() {
  return (
    <nav>
      <div className="mx-auto grid max-w-screen-2xl grid-cols-[auto,1fr] px-4 py-2 md:px-10 lg:px-20">
        <div className="flex items-center">
          <Image
            className="w-[80px] md:w-[100px] lg:w-[120px] xl:w-[130px] 2xl:w-[146px]"
            src="/assets/cloudgen-logo.svg"
            alt="logo"
            width={146}
            height={85}
          />
        </div>
        <div className="flex items-center justify-end gap-x-10">
          <ul className="hidden items-center justify-between gap-x-4 text-white xl:flex xl:h-[61px] xl:gap-x-6">
            {navlinkData.map(({ id, title, href }) => (
              <li key={id}>
                <Link
                  className={`${roboto.className} text-xl font-medium leading-[183%] tracking-[3%] md:text-2xl`}
                  href={href}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
          <div className={`${inter.className} flex gap-x-4`}>
            <button className="rounded-[10px] border border-[#3F9DD6] px-2 py-1 text-lg font-medium text-white md:px-4 md:text-2xl lg:px-5 lg:py-3 xl:text-[29px]">
              Sign In
            </button>
            <button className="lg-py-3 rounded-[10px] border border-[#3F9DD6] bg-[#3F9DD6] px-2 py-1 text-lg font-medium text-white md:px-4 md:py-2 md:text-2xl lg:px-5 lg:py-3 xl:text-[29px]">
              Log In
            </button>
            {/* Hamburger Menu */}
            <button className="w-6 space-y-[6px] xl:hidden">
              <span className="block h-[2px] bg-white"></span>
              <span className="block h-[2px] bg-white"></span>
              <span className="block h-[2px] bg-white"></span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
