import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import downarror from "../../assets/home/downarror.gif";

const Header = () => {
  const carouselItems = [
    {
      id: 1,
      content: (
        <div className="absolute right-0 h-[140px] sm:h-[250px] md:h-[400px] flex items-center">
          <div className="md:pr-32 pr-10">
            <h1 className="md:text-[40px] sm:text-[30px] text-[13px] md:font-bold font-newsreader text-right text-white">
              FIND YOUR FAVOURITE <br /> WINES & SPIRITS
            </h1>
            <p className="md:text-[20px] text-[10px] sm:text-[15px] md:my-8  my-2 font-normal text-white text-right">
              Delivered to your door
            </p>
            <div className="flex justify-end">
              <button className="md:text-[13px] sm:text-[11px] text-[9px] text-[#000] font-mulish md:font-bold bg-white h-[24px] md:h-[38px] w-[95px] md:w-[133px] rounded-[4px]">
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
      ),

      imageUrl:
        "https://res.cloudinary.com/dldtrjalo/image/upload/v1731228015/o4ao6ny0rdsyygouudjk.jpg",
    },
    {
      id: 2,
      content: <></>,
      imageUrl:
        "https://res.cloudinary.com/dldtrjalo/image/upload/v1731306442/ppruyngpx7ap0ckgqsey.jpg",
    },
    {
      id: 2,
      content: (
        <div className="absolute left-0 h-[140px] sm:h-[250px] md:h-[400px] flex items-center">
          <div className="md:pl-32 pl-10">
            <h1 className="md:text-[40px] sm:text-[30px] text-[13px] md:font-bold font-newsreader text-left text-[#000]">
              FIND YOUR FAVOURITE <br /> WINES & SPIRITS
            </h1>
            <p className="md:text-[20px] text-[10px] sm:text-[15px] md:my-8  my-2 font-normal text-[#000] text-left">
              Delivered to your door
            </p>
            <div className="flex ">
              <button className="md:text-[13px] sm:text-[11px] text-[9px] text-[#000] font-mulish md:font-bold bg-white h-[24px] md:h-[38px] w-[95px] md:w-[133px] rounded-[4px]">
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
      ),
      imageUrl:
        "https://res.cloudinary.com/dldtrjalo/image/upload/v1731306199/bff0moeur1yd7mjqj45n.png",
    },
  ];

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 4000,
        }),
      ]}
    >
      <CarouselContent>
        {carouselItems.map((item) => (
          <CarouselItem key={item.id}>
            <div className="w-full rounded-lg overflow-hidden relative">
              {item.content}
              <div className="absolute hidden md:block right-0 bottom-0">
                <div className="flex items-center gap-1 p-3">
                  <p className="text-[12px] font-mulish text-white opacity-35">
                    Scroll down
                  </p>
                  <img src={downarror} className="w-[33px] h-[33px]" alt="" />
                </div>
              </div>

              <img
                src={item.imageUrl}
                className="w-full h-[140px] md:h-[400px] sm:h-[250px] object-cover"
                alt="Carousel item"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="translate-x-[100px] bg-white bg-opacity-25 border-none p-[7px] hidden md:block" />
      <CarouselNext className="translate-x-[-100px] bg-white bg-opacity-25 border-none p-[7px] hidden md:block" />
    </Carousel>
  );
};

export default Header;
