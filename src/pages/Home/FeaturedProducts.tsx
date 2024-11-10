import Cart, { CartProps } from "@/components/common/Cart";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const cartData: CartProps[] = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dldtrjalo/image/upload/v1731233315/qa7i6tzmzpjiljqxijcf.png",
    title: "Monkey Shoulder 700ml",
    price: "21,900",
    category: "Blended",
    new: true,
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/dldtrjalo/image/upload/v1731233361/qz49r055ntl6nj11qvfq.png",
    title: "Glenfiddich IPA 700ml",
    price: "44,700",
    category: "Single Malt",
    new: false,
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/dldtrjalo/image/upload/v1731233361/ul736roauigyyg6qtk1c.png",
    title: "Jim Beam White Label 700ml",
    price: "15,500",
    category: "Whisky",
    new: false,
  },
  {
    id: 4,
    image:
      "https://res.cloudinary.com/dldtrjalo/image/upload/v1731233362/xvvmgpavms9fnln12t22.png",
    title: "Clan Macgregor 750ml",
    price: "12,800",
    category: "Whisky",
    new: false,
  },
];

const FeaturedProducts = () => {
  return (
    <div className=" max-w-[1100px] mx-auto">
      <h1 className="text-primary text-[20px] md:text-[25px] md:font-bold md:capitalize font-newsreader text-center uppercase">
        Featured Products
      </h1>
      <div className="flex  justify-center my-4">
        <div className="gap-3 flex flex-wrap justify-center">
          <Button className="bg-transparent hover:border-orange hover:text-orange transition-all duration-150 px-5 text-primary border border-primary font-normal hover:bg-white">
            Bestsellers
          </Button>
          <Button className="bg-transparent hover:border-orange hover:text-orange transition-all duration-150 px-5 text-gray-400 border border-gray-400 font-normal hover:bg-white">
            Recommended Products
          </Button>
          <Button className="bg-transparent hover:border-orange hover:text-orange transition-all duration-150 px-5 text-gray-400 border border-gray-400 font-normal hover:bg-white">
            New additions
          </Button>
        </div>
      </div>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 10000,
          }),
        ]}
      >
        <CarouselContent className="-ml-4">
          <CarouselItem className="pl-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-8 md:mt-16">
              {cartData.map((cart) => (
                <Cart data={cart} />
              ))}
            </div>
          </CarouselItem>
          <CarouselItem className="pl-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-8 md:mt-16">
              {cartData.map((cart) => (
                <Cart data={cart} />
              ))}
            </div>
          </CarouselItem>
          <CarouselItem className="pl-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-8 md:mt-16">
              {cartData.map((cart) => (
                <Cart data={cart} />
              ))}
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>

      <p className="md:mt-14 mt-8 text-orange text-center text-[13px] font-bold">
        See more
      </p>
    </div>
  );
};

export default FeaturedProducts;
