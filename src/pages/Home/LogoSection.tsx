import logo1 from "../../assets/home/logoSetion/1.png";
import logo2 from "../../assets/home/logoSetion/2.png";
import logo3 from "../../assets/home/logoSetion/3.png";
import logo4 from "../../assets/home/logoSetion/4.png";
import logo5 from "../../assets/home/logoSetion/5.png";
import logo6 from "../../assets/home/logoSetion/6.png";
import logo7 from "../../assets/home/logoSetion/7.png";
import logo8 from "../../assets/home/logoSetion/8.png";
import logo9 from "../../assets/home/logoSetion/9.png";
import logo10 from "../../assets/home/logoSetion/10.png";
import Marquee from "react-fast-marquee";

const image = [
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  logo8,
  logo9,
  logo10,
];

const LogoSection = () => {
  return (
    <div>
        <Marquee speed={40}>
      <div className="flex mt-7 gap-3 overflow-hidden">
        {image.map((item, index) => (
          <img src={item}  className="h-[47px] sm:h-[67px] md:h-[97px]" alt="" key={index} />
        ))}
      </div>
      </Marquee>
    </div>
  );
};

export default LogoSection;
