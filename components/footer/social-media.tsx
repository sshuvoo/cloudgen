import Link from "next/link";

interface PropTypes {
  children: React.ReactNode;
  href: string;
}

export default function SocialMedia({ children, href }: PropTypes) {
  return (
    <Link
      target="_blank"
      className="inline-block rounded-full border-2 border-[#284B82] p-2"
      href={href}
    >
      {children}
    </Link>
  );
}
