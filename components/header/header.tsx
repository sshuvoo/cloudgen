import Hero from "./hero";
import Navbar from "./navbar";

export default function Header() {
  return (
    <header className="bg-[#1C256A]">
      <Navbar />
      <Hero />
    </header>
  );
}
