import { CommonParagraph } from "components";

const FacebookVideo: React.FC<{ src: string }> = ({ src }) => (
  <div className="relative w-full max-w-[476px] aspect-square">
    <iframe
      src={src}
      className="absolute inset-0 w-full h-full"
      style={{ border: "none", overflow: "hidden" }}
      scrolling="no"
      frameBorder="0"
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  </div>
);

const ThakurSPowdyelClip: React.FC = () => {
  return (
    <>
      <section className="flex flex-col items-center justify-center mt-10">
        <FacebookVideo src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Feducareskill%2Fvideos%2F398679313114855%2F&show_text=false&width=476&t=0" />
        <p className="font-semibold">Thakur S Powdyel</p>
        <p className="text-primary-400">The former education minister</p>
      </section>

      <article className="py-12 px-4 md:px-8 lg:px-16 bg-white space-y-4 max-w-5xl mx-auto">
        <CommonParagraph>
          <>
            <p>
              We are deeply overwhelmed by the profound commendation of our work
              by Thakur S Powdyel, the former education minister.
            </p>
            <br />
            <p>
              Such kind words of best wishes coming from one of the visionary
              education thinkers and pioneers in our country, and to receive
              them on Teacher’s Day fills our hearts with everlasting gratitude.
            </p>
            <br />
            <p>
              We are committed to doing our part in contributing to
              nation-building by supplementing the invaluable efforts of
              selfless teachers.
            </p>
            <br />
            <p>
              Currently, we're focusing on creating content for children to
              promote and help them learn Dzongkha, our national language.
            </p>
            <br />
            <p>
              Explore Educare Skill's visually appealing and engaging content by
              visiting{" "}
              <a
                href="https://www.educareskill.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                www.educareskill.com
              </a>{" "}
              or download our mobile app from{" "}
              <a
                href="https://bit.ly/3U3LOHw"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                this link
              </a>
              .
            </p>
          </>
        </CommonParagraph>
      </article>
    </>
  );
};

export default ThakurSPowdyelClip;
