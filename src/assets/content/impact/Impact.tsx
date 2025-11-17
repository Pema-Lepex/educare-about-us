export const impactOfEducare = {
  title: "The Impact of Educare",
  content: `Our platform is designed to make learning Dzongkha, the national language of Bhutan, fun, engaging, and accessible for students of all ages. Through interactive animations, read-aloud videos, and multimedia lessons, we aim to inspire curiosity and strengthen language skills among young learners.

By combining technology with cultural education, we help preserve and promote Dzongkha while making it easier for students to connect with their linguistic heritage.

This initiative is proudly supported by the Dzongkha Development Commission Department (DCDD), under the Royal Government of Bhutan, ensuring that our content aligns with national educational standards and linguistic goals.`,
};

export const ImpactOfEducare: React.FC = () => {
  return (
    <>
      <p>
        Our platform is designed to make learning <strong>Dzongkha</strong>, the
        national language of Bhutan, fun, engaging, and accessible for students
        of all ages. Through <strong> interactive animations</strong>,
        <strong> read-aloud videos</strong>, and
        <strong> multimedia lessons</strong>, we aim to inspire curiosity and
        strengthen language skills among young learners.
      </p>
      <br />
      <p>
        By combining technology with cultural education, we help preserve and
        promote Dzongkha while making it easier for students to connect with
        their linguistic heritage.
      </p>
      <br />
      <p>
        This initiative is proudly supported by the{" "}
        <strong
          onClick={() => window.open("https://doc.gov.bt/", "_blank")}
          className="hover:underline cursor-pointer"
        >
          Department of Culture and Dzongkha Development(DCDD)
        </strong>
        , under the Royal Government of Bhutan, ensuring that our content aligns
        with national educational standards and linguistic goals.
      </p>
    </>
  );
};
