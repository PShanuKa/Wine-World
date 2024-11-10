import Navbar from "./Navbar";

const Default = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div
       className="container2">{children}</div>
    </>
  );
};

export default Default;
