import Footer from "./Footer";
import Navbar from "./Navbar";

const Default = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />

      <div className="">{children}</div>
      <div className="max-w-[1280px] mx-auto">
        <Footer />
      </div>
    </>
  );
};

export default Default;
