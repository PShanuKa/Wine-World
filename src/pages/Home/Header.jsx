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
              <div className="absolute right-0 h-[400px] flex items-center">
                <div className="pr-32">
                  <h1 className="text-[40px] font-bold font-newsreader text-right text-white">
                    {item.title}
                  </h1>
                  <p className="text-[20px] my-8 font-normal text-white text-right">
                    {item.description}
                  </p>
                  <div className="flex justify-end">
                    <button className="text-[13px] text-[#000] font-mulish font-bold bg-white h-[38px] w-[133px] rounded-[4px]">
                      {item.buttonText}
                    </button>
                  </div>
                </div>
              </div>
              <img
                src={item.imageUrl}
                className="w-full h-[420px] object-cover"
                alt="Carousel item"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="translate-x-[100px]" />
      <CarouselNext className="translate-x-[-100px]" />
    </Carousel>
  );
};

export default Header;
