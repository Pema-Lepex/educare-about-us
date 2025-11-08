import { appleStoreImage, DCDDImage, playStoreImage } from "assets";
import { CommonHeader } from "components";

const DCDDImpactSection: React.FC = () => {
  return (
    <section className="bg-primary-200 py-12 px-4 md:px-8 lg:px-16 space-y-4">
      <div className="text-center">
        <CommonHeader>DCDD Free Subscription </CommonHeader>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full">
        <div className="w-1/2 h-auto flex items-center justify-center">
          <img src={DCDDImage} className="" />
        </div>
        <div className="flex flex-col w-1/2 items-center justify-center">
          <h4 className="text-xl font-bold">Transforming Learning in Bhutan and beyond</h4>
          <p>Makeing learning fun like never before</p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full">
            {/* <img src={playStoreImage}/>
            <img src={appleStoreImage}/> */}
          </div>
        </div>
      </div>
    </section>
  );
};
export default DCDDImpactSection;
