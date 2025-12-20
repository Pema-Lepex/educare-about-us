import Leader from "./section/Leader";

const LeadershipContent:React.FC = () => {
  return (
    <>
    <section className="text-center bg-primary-400 text-white py-10 md:py-20">
        <h1 className="text-2xl md:text-5xl font-semibold">Leadership</h1>
    </section>
    <Leader/>
    </>
  )
};
export default LeadershipContent;