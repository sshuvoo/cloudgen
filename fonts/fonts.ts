import { Roboto, Inter } from "next/font/google";

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  display: "swap",
});

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});
