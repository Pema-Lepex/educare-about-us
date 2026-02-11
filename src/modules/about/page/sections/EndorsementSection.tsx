import React from "react";

interface EndorsementSectionProps {
  paragraphs: React.ReactNode;
}

const EndorsementSection = ({ paragraphs }: EndorsementSectionProps) => {
  return (
    <section className="px-6 py-12 md:px-12 lg:px-20 bg-white">
      <div className="mx-auto max-w-6xl">
        <div
          className="relative p-8 md:p-14 lg:p-20 
                        bg-white 
                        border border-gray-200 
                        border-t-[12px] border-t-orange-500 
                        rounded-[40px] 
                        shadow-xl shadow-gray-100/50"
        >
          <div className="space-y-8 text-center text-gray-700 leading-relaxed md:text-lg">
            {paragraphs}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EndorsementSection;
