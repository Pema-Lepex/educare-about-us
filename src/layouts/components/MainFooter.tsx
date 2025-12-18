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

const MainFooter: React.FC = () => {
  const followMedia: SocialMediaProps[] = [
    { id: 1, title: "Facebook", img: Facebook, url: "" },
    { id: 2, title: "Tiktok", img: Tiktok, url: "" },
    { id: 3, title: "Instagram", img: Instragram, url: "" },
    { id: 4, title: "Youtube", img: Youtube, url: "" },
  ];

  const chatMedia: SocialMediaProps[] = [
    { id: 1, title: "Messenger", img: Messanger, url: "" },
    { id: 2, title: "Telegram", img: Telegram, url: "" },
    { id: 3, title: "Whatsapp", img: Whatsapp, url: "" },
  ];

  return (
    <footer
      className="relative w-full bg-cover bg-top bg-no-repeat"
      style={{ backgroundImage: `url(${FooterImage})` }}
    >
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-12 relative z-10 space-y-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white text-[11px] uppercase tracking-wider text-center md:text-left">
            © {new Date().getFullYear()} Educare Skill Pvt. Ltd. | Developed By BEST
              <a className="hover:underline hover:text-customOriange-100" href="/"> STUDIOS</a> &<a className="hover:underline hover:text-customOriange-100" href="/"> TECHNOLOGIES</a>
          </p>

          <nav className="flex space-x-8">
            {["About Us", "FAQ", "Contact", "Privacy", "Terms of Use"].map(
              (link) => (
                <a
                  key={link}
                  href="#"
                  className="text-white text-xs  transition-transform duration-300 ease-out hover:scale-110 hover:text-customOriange-100"
                >
                  {link}
                </a>
              )
            )}
          </nav>
        </div>
        {/* Column 2: Follow Us */}
        <div className="flex flex-row gap-10">
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-white font-semibold mb-5 uppercase tracking-widest text-xs">
              Follow us
            </h4>
            <div className="flex flex-wrap gap-4">
              {followMedia.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  className="footer-social-icon border rounded-full size-10 flex justify-center items-center transition-transform duration-300 ease-out hover:scale-110"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="object-contain"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: Let's Chat */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-white font-semibold mb-5 uppercase tracking-widest text-xs">
              Let's Chat
            </h4>
            <div className="flex flex-wrap gap-4">
              {chatMedia.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  className="footer-social-icon border rounded-full size-10 flex justify-center items-center transition-transform duration-300 ease-out hover:scale-110"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="object-contain"
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
