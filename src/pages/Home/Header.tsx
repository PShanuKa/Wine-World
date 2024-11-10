import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Header = () => {
  const carouselItems = [
    {
      id: 1,
      title: (
        <>
          FIND YOUR FAVOURITE <br /> WINES & SPIRITS
        </>
      ),
      description: "Delivered to your door",
      buttonText: "SHOP NOW",
      imageUrl:
        "https://res.cloudinary.com/dldtrjalo/image/upload/v1731228015/o4ao6ny0rdsyygouudjk.jpg",
    },
    {
      id: 2,
      title: (
        <>
          FIND YOUR FAVOURITE <br /> WINES & SPIRITS
        </>
      ),
      description: "Delivered to your door",
      buttonText: "SHOP NOW",
      imageUrl:
        "https://res.cloudinary.com/dldtrjalo/image/upload/v1731228015/o4ao6ny0rdsyygouudjk.jpg",
    },
  ];

  return (
    <Carousel>
      <CarouselContent>
        {carouselItems.map((item) => (
          <CarouselItem key={item.id}>
            <div className="w-full rounded-lg overflow-hidden relative">
              <div className="absolute right-0 h-[140px] sm:h-[250px] md:h-[400px] flex items-center">
                <div className="md:pr-32 pr-10">
                  <h1 className="md:text-[40px] sm:text-[30px] text-[13px] md:font-bold font-newsreader text-right text-white">
                    {item.title}
                  </h1>
                  <p className="md:text-[20px] text-[10px] sm:text-[15px] md:my-8  my-2 font-normal text-white text-right">
                    {item.description}
                  </p>
                  <div className="flex justify-end">
                    <button className="md:text-[13px] sm:text-[11px] text-[9px] text-[#000] font-mulish md:font-bold bg-white h-[24px] md:h-[38px] w-[95px] md:w-[133px] rounded-[4px]">
                      {item.buttonText}
                    </button>
                  </div>
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
      <CarouselPrevious className="translate-x-[100px] hidden md:block" />
      <CarouselNext className="translate-x-[-100px] hidden md:block" />
    </Carousel>
  );
};

export default Header;
