import { Button } from "@/components/ui/button";

interface CartProps {
  id: number;
  image: string;
  title: string;
  date: string;
}

const data: CartProps[] = [
  {
    id: 1,
    image: "https://res.cloudinary.com/dldtrjalo/image/upload/v1731238070/fwvruqbhsqwk1a3u4g5a.png",
    title: "A Toast to Love: Valentine’s Day Stories with a Splash of Wine",
    date: "Tuesday, January 30th, 2024"
  },
  {
    id: 1,
    image: "https://res.cloudinary.com/dldtrjalo/image/upload/v1731238108/h4u9ok54qrezwh9nxuad.png",
    title: "Wedding Cocktails Ideas",
    date: "Thursday, April 6th, 2023"
  },
  {
    id: 1,
    image: "https://res.cloudinary.com/dldtrjalo/image/upload/v1731238108/h4u9ok54qrezwh9nxuad.png",
    title: "Celebrate National Mojito Day With An Easy To Make Mount Gay Rum Mojito Recipe",
    date: "Thursday, April 6th, 2023"
  }
];

const BlogSection = () => {
  return (
    <div className="">
      <div className="px-10 md:px-0">
        <h1 className="text-primary md:text-[25px] text-[18px] uppercase font-extrabold font-mulish text-center">
          BLOG
        </h1>
        <p className="text-center font-mulish text-[12px] md:text-[14px]  font-normal text-[#686868] md:text-bgSecondary leading-[26px] md:leading-[37px] ">
          Explore the exotic world of French Wines and the finest Single Malts.
          Visit our blog to learn more about your favourite spirits,
          <br className="hidden md:block"/> mixing tips and more.
        </p>
      </div>
      <div className="flex mt-3 justify-center">
        <Button className="bg-secondary font-arimo text-white px-8 hidden md:block text-[13px] font-semibold">
          Read More
        </Button>
        <Button className="bg-secondary md:hidden font-arimo text-white px-8 text-[13px] font-semibold">
          View Blog
        </Button>
      </div>
      <div className="grid sm:grid-cols-2 grid-cols-1 md:grid-cols-3 gap-2 mt-10">
        {data.map((cart) => (
          
        <BlogCart data={cart} />
        ))}
        
      </div>
    </div>
  );
};

export default BlogSection;

const BlogCart = ({data}: {data: CartProps}) => {
  return (
    <div className="relative rounded-[8px] overflow-hidden border border-[#D9D9D9]">
      <img
        src={data.image}
        className="md:h-[261px] h-[161px] object-cover w-full"
        alt=""
      />
      <div className="px-3">
        <h1 className="font-mulish min-h-[52px] font-bold text-[12px] md:text-[16px] leading-[21px] text-primary mt-5 w-[90%]">
          {data.title}
        </h1>
        <p className="font-mulish font-normal text-[10px] md:text-[12px] leading-[316%] uppercase text-[#646464]">
          {data.date}
        </p>
      </div>
      <div className="h-[50px]"></div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-end p-5">
        <p className="text-orange font-mulish text-[10px] md:text-[13px] font-bold md:uppercase">
          Read More
        </p>
      </div>
    </div>
  );
};
