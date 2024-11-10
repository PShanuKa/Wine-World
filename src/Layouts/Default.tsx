import Navbar from "./Navbar";

const Default = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>{children}</div>
    </>
  );
};

export default Default;
