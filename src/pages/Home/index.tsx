import BlogSection from "./BlogSection";
import CategoryCartSection from "./CategoryCartSection";
import FeaturedProducts from "./FeaturedProducts";
import Header from "./Header";
import HighlightSection from "./HighlightSection";
import LogoSection from "./LogoSection";
import PeopleAlsoTried from "./PeopleAlsoTried";
import Review from "./Review";
import messageGif from "../../assets/home/message.gif";

const HomePage = () => {
  return (
    <div className="min-h-screen relative mt-5 w-full">
      <div className="container2">
        <Header />
      </div>
      <div className="container2">
      <LogoSection/>
      </div>
      <div className="mt-10 container2">
        <CategoryCartSection />
      </div>
      <div className="mt-10 container2">
        <FeaturedProducts />
      </div>
      <div className="md:mt-20 mt-10 container2">
        <HighlightSection />
      </div>
      <div className="bg-[#F5F5F5] py-10 mt-20">
        <div className=" container2">
          <BlogSection />
        </div>
      </div>
      <div className="mt-20 container2 ">
        <PeopleAlsoTried />
      </div>
      <div className="mt-20 container2 rounded-[8px] bg-[#F5F5F5] py-[66px] ">
        <Review />
      </div>
      <div className=" fixed hidden md:flex bottom-0 z-50 left-0 right-0  ">
        <div className="max-w-7xl mx-auto w-full flex">

        <div className="bg-primary rounded-full p-1.5 mb-10">
          <div className="pl-2 pt-2 pr-1.5 pb-1.5 border border-white rounded-full">
              <img src={messageGif} className="w-[43px] h-[43px]" alt="" />
          </div>
        </div>
        </div>
  
      </div>
    </div>
  );
};

export default HomePage;
