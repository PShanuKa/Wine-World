import BlogSection from "./BlogSection";
import CategoryCartSection from "./CategoryCartSection";
import FeaturedProducts from "./FeaturedProducts";
import Header from "./Header";
import HighlightSection from "./HighlightSection";
import PeopleAlsoTried from "./PeopleAlsoTried";
import Review from "./Review";

const HomePage = () => {
  return (
    <div className="min-h-screen mt-5 w-full">
      <div className="container2">
        <Header />
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
    </div>
  );
};

export default HomePage;
