import React from "react";
import {
  Facebook,
  FooterImage,
  Instragram,
  Messanger,
  Telegram,
  Tiktok,
  Whatsapp,
  Youtube,
} from "assets";
import { SocialMediaProps } from "props/Commonprops";
import { useLocation } from "react-router-dom";

const MainFooter: React.FC = () => {
  const location = useLocation();
  const followMedia: SocialMediaProps[] = [
    { id: 1, title: "Facebook", img: Facebook, url: "https://www.facebook.com/educareskill" },
    { id: 2, title: "Tiktok", img: Tiktok, url: "https://www.tiktok.com/@educare.skill" },
    { id: 3, title: "Instagram", img: Instragram, url: "https://www.instagram.com/educare.skill/" },
    { id: 4, title: "Youtube", img: Youtube, url: "https://www.youtube.com/@educareskill" },
  ];

  const chatMedia: SocialMediaProps[] = [
    { id: 1, title: "Messenger", img: Messanger, url: "https://www.facebook.com/educareskill" },
    { id: 2, title: "Telegram", img: Telegram, url: "https://t.me/+97577718721" },
    { id: 3, title: "Whatsapp", img: Whatsapp, url: "https://wa.me/97577718721" },
  ];

  const otherPages = [
    { id: 1, title: "About Us", url: "/about" },
    { id: 1, title: "FAQ", url: "/faq" },
    { id: 1, title: "Contact", url: "/contact" },
    { id: 1, title: "Privacy Policy", url: "/privacy-policy" },
    { id: 1, title: "Terms of Use", url: "/terms-of-use" },
  ];

  return (
    <footer
      className="absolute bottom-0 left-0 w-full bg-cover bg-top bg-no-repeat z-40"
      style={{ backgroundImage: `url(${FooterImage})` }}
    >
      <div className="xl:max-w-full xl:px-20 4xl:px-52  max-w-7xl mx-auto px-6 pt-32 4xl:pt-48 pb-12 relative z-10 space-y-4">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center justify-start gap-6">
          <p className="text-white text-[8px] lg:text-[11px] 2xl:text-base 3xl:text-xl 4xl:text-2xl 5xl:text-3xl 6xl:text-4xl tracking-wider lg:text-center md:text-left">
            © {new Date().getFullYear()} Educare Skill Pvt. Ltd. | All rights
            reserved | Developed By iBEST
            <a
              target="_blank"
              className="hover:text-customOriange-100"
              href="https://www.ibeststudios.com/"
            >
              {" "}
              STUDIOS
            </a>{" "}
            &
            <a
              target="_blank"
              className="hover:text-customOriange-100"
              href="https://www.ibesttechnologies.bt/"
            >
              {" "}
              TECHNOLOGIES
            </a>
          </p>

          <nav className="flex lg:space-x-8 space-x-2">
            {otherPages.map((items) => {
              const isActive =
                location.pathname === items.url ||
                location.pathname.startsWith(items.url + "/");
              return (
                <a
                  key={items.id}
                  href={items.url}
                  className={` text-[9px] lg:text-xs 2xl:text-lg 3xl:text-xl 4xl:text-2xl 5xl:text-3xl 6xl:text-4xl transition-transform duration-300 ease-out hover:scale-110 hover:text-customOriange-100
                    ${
                      isActive
                        ? "text-customOriange-100 font-semibold border-b-2 border-customOriange-100"
                        : "text-white hover:text-customOriange-100"
                    }`}
                >
                  {items.title}
                </a>
              );
            })}
          </nav>
        </div>
        {/* Column 2: Follow Us */}
        <div className="flex flex-row gap-10">
          <div className="flex flex-col items-start">
            <h4 className="text-white font-semibold lg:mb-5 mb-2 uppercase tracking-widest text-[8px] lg:text-[11px] 2xl:text-base 3xl:text-xl 4xl:text-2xl 5xl:text-3xl 6xl:text-4xl">
              Follow us
            </h4>
            <div className="flex flex-wrap gap-4">
              {followMedia.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  className="footer-social-icon border rounded-full 4xl:size-20 lg:size-10 size-5 p-1 lg:p-0 flex justify-center items-center transition-transform duration-300 ease-out hover:scale-110"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="object-contain 4xl:size-9"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: Let's Chat */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-white font-semibold lg:mb-5 mb-2 uppercase tracking-widest text-[8px] lg:text-[11px] 2xl:text-base 3xl:text-xl 4xl:text-2xl 5xl:text-3xl 6xl:text-4xl">
              Let's Chat
            </h4>
            <div className="flex flex-wrap gap-4">
              {chatMedia.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  className="footer-social-icon border rounded-full 4xl:size-20 lg:size-10 size-5 p-1 lg:p-0 flex justify-center items-center transition-transform duration-300 ease-out hover:scale-110"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="object-contain 4xl:size-9"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
