import Cart, { CartProps } from "@/components/common/Cart"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const cartData: CartProps[] = [
    {
      id: 1,
      image: "https://res.cloudinary.com/dldtrjalo/image/upload/v1731233315/qa7i6tzmzpjiljqxijcf.png",
      title: "Monkey Shoulder 700ml",
      price: "21,900",
      category: "Blended",
      new: true
    },
    {
      id: 2,
      image: "https://res.cloudinary.com/dldtrjalo/image/upload/v1731233361/qz49r055ntl6nj11qvfq.png",
      title: "Glenfiddich IPA 700ml",
      price: "44,700",
      category: "Single Malt",
      new: false
    },
    {
      id: 3,
      image: "https://res.cloudinary.com/dldtrjalo/image/upload/v1731233361/ul736roauigyyg6qtk1c.png",
      title: "Jim Beam White Label 700ml",
      price: "15,500",
      category: "Whisky",
      new: false
    },
    {
      id: 4,
      image: "https://res.cloudinary.com/dldtrjalo/image/upload/v1731233362/xvvmgpavms9fnln12t22.png",
      title: "Clan Macgregor 750ml",
      price: "12,800",
      category: "Whisky",
      new: false
    },
  ]

const PeopleAlsoTried = () => {
  return (
    <div>
      <h1 className="md:font-mulish font-extrabold font-newsreader text-[20px] md:text-[25px] text-center text-primary uppercase">People Also Tried</h1>
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
              {cartData.map((cart, index) => (
                <div className={`${index >= 2 && "hidden"} md:block`}>
                <Cart  data={cart} />
                </div>
              ))}
            </div>
          </CarouselItem>
          <CarouselItem className="pl-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-8 md:mt-16">
              {cartData.map((cart, index) => (
                <div className={`${index >= 2 && "hidden"} md:block`}>
                <Cart  data={cart} />
                </div>
              ))}
            </div>
          </CarouselItem>
          <CarouselItem className="pl-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-8 md:mt-16">
              {cartData.map((cart, index) => (
                <div className={`${index >= 2 && "hidden"} md:block`}>
                <Cart  data={cart} />
                </div>
              ))}
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
         <p className="md:mt-14 mt-8 text-orange text-center text-[13px] md:font-bold">
        See more
      </p>
    </div>
  )
}

export default PeopleAlsoTried