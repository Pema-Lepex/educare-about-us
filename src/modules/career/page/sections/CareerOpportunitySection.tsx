import { CareerOpportunityImage } from "assets";

export default function CareerOpportunitySection() {
    return (
        <section className="w-full relative overflow-hidden">
            <div className="relative w-full h-[250px] sm:h-[350px] md:h-auto">
                <img
                    src={CareerOpportunityImage}
                    alt="Career Opportunities"
                    className="w-full h-full object-cover md:h-96 md:block"
                />
                <div className="absolute inset-0 bg-black/40 md:bg-transparent md:bg-gradient-to-r md:from-black/90 md:via-black/40 md:to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-12 md:px-20 lg:px-32">
                    {/* Small White Heading: Scales from text-base to 4xl */}
                    <h2 className="text-white text-base sm:text-xl md:text-3xl lg:text-4xl font-light mb-1 md:mb-4 drop-shadow-md">
                        Career Opportunities
                    </h2>

                    {/* Large Yellow Quote: Scales from text-xl to 7xl */}
                    <h1 className="text-yellow-400 font-bold text-xl sm:text-3xl md:text-5xl lg:text-7xl max-w-[90%] md:max-w-4xl leading-tight drop-shadow-xl">
                        Join our team and <br className="hidden sm:block" />
                        unleash your hidden <br className="hidden sm:block" />
                        potential!
                    </h1>
                </div>
            </div>
        </section>
    );
}