interface ServicesType {
  id: number;
  title: string;
  desc: string;
  icon: string;
}

export const serviceData: ServicesType[] = [
  {
    id: 1,
    title: "Ecommerce",
    desc: "“Trust  your online business with CloudGen’s tailored ecommerce solutions, driving sales and enhancing customer experience.”",
    icon: "/assets/service-eccomerce-icon.svg",
  },
  {
    id: 2,
    title: "Corporate",
    desc: "“strengthen your corporate identity with CloudGen’s professional web development services, tailored to reflect your brand’s values and objectives.”",
    icon: "/assets/service-corporate-icon.svg",
  },
  {
    id: 3,
    title: "Business",
    desc: "“optimize your business’s full potential with CloudGen’s comprehensive web development solutions, designed to optimize operations and drive growth.”",
    icon: "/assets/service-business-icon.svg",
  },
  {
    id: 4,
    title: "Personal",
    desc: "“Change your online presence into a personal showcase with CloudGen’s customized web development services, highlighting your unique talents and passions.”",
    icon: "/assets/service-personal-icon.svg",
  },
];
