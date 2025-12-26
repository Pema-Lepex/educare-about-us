import React, { useEffect, useState } from "react";
import { PolicySectionsProps, SectionsProps } from "props/Commonprops";
import PolicyContentRenderer from "../components/PolicyContentRenderer";
import {
  privacyPolicy,
  privacyPolicyMenu,
} from "assets/content/privacy-policy/PrivacyPolicy";
import { CommonHeader4 } from "components";

const PrivacyPolicySection = () => {
  const [activeSection, setActiveSection] = useState<string>("introduction");
  const [isTocOpen, setIsTocOpen] = useState(false);

  // const scrollToSection = (id: string) => {
  //   setActiveSection(id);
  //   document.getElementById(id)?.scrollIntoView({
  //     behavior: "smooth",
  //     block: "start",
  //   });
  // };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-20% 0px -95% 0px",
        threshold: 0,
      }
    );

    privacyPolicy.sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex bg-white min-h-screen">
      {/* LEFT NAVIGATION */}
      <aside className="hidden lg:block w-1/4 border-r px-6 py-8 sticky top-0 h-screen overflow-y-auto mb-28 hide-scrollbar">
        <h2 className="text-lg font-semibold mb-6">Contents</h2>

        <ul className="space-y-4 text-sm">
          {privacyPolicyMenu.sections.map((section) => (
            <li
              key={section.id}
              onClick={() => {
                document.getElementById(section.id)?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
              className={`cursor-pointer transition-all duration-200 pl-3
          ${
            activeSection === section.id
              ? "text-primary-600 font-semibold border-l-2 border-primary-500"
              : "text-gray-600 hover:text-primary-400 hover:font-semibold border-l-2 border-transparent"
          }
        `}
            >
              {section.heading}
            </li>
          ))}
        </ul>
      </aside>

      {/* RIGHT CONTENT */}
      <main className="w-full lg:w-3/4 px-6 md:px-10 py-10 overflow-y-auto max-h-screen hide-scrollbar">
        <h1 className="text-3xl md:text-4xl font-bold mb-5">
          {privacyPolicy.title}
        </h1>

        {privacyPolicy.sections.map((section: PolicySectionsProps,index) => (
          <section
            key={section.id}
            id={section.id}
            className="md:mb-8 mb-5 scroll-mt-24 hide-scrollbar"
          >
            <CommonHeader4 className="uppercase mb-3 font-bold">
              {index+1}.{section.heading}
            </CommonHeader4>

            <PolicyContentRenderer
              content={section?.content}
              contentWithNO={section?.contentWithNO}
            />
          </section>
        ))}
        <div className=" h-20"></div>
      </main>
    </div>
  );
};

export default PrivacyPolicySection;
