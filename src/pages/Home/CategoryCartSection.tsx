const CategoryCart = [
  {
    id: 1,
    title: "Spirits ",
    imageUrl:
      "https://res.cloudinary.com/dldtrjalo/image/upload/v1731230343/agq2fot2l3cxrgr5hwow.png",
    color: "#225451",
  },
  {
    id: 2,
    title: "WINE ",
    imageUrl:
      "https://res.cloudinary.com/dldtrjalo/image/upload/v1731230347/fepnbf6vcaxyma4wpook.png",
    color: "#BEC599",
  },
  {
    id: 3,
    title: "Sparkling & Champagne ",
    imageUrl:
      "https://res.cloudinary.com/dldtrjalo/image/upload/v1731230343/egqqpwocus3szczrd0lg.png",
    color: "#DCC369",
  },
  {
    id: 4,
    title: "BEER ",
    imageUrl:
      "https://res.cloudinary.com/dldtrjalo/image/upload/v1731230350/suj3ebsp045gbrgkdyli.png",
    color: "#03412D",
  },
];

const CategoryCartSection = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {CategoryCart.map((category) => (
        <div
          key={category.id}
          className="md:h-[438px]  group  h-[250px] overflow-hidden rounded-[4px] md:rounded-[8px] relative"
        >
          <div className="absolute bottom-0 left-0 right-0 flex items-end">
            <div className="md:p-3 p-[6px] bg-gradient-to-t h-[200px] flex items-end   w-full">
              <div className="md:h-[47px] h-[27px] rounded-[6px] w-full transition-opacity duration-300 bg-black bg-opacity-40 group-hover:opacity-100  opacity-100 md:opacity-0 backdrop-blur-md flex justify-between items-center md:px-5 px-3">
                <p className="text-white font-bold font-mulish text-[10px] md:text-[13px]">Shop Now</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="14"
                  viewBox="0 0 16 14"
                  fill="none"
                  className="w-[12px] h-[14px] md:w-[16px] md:h-[14px]"
                >
                  <path
                    d="M15.0001 7L1.00012 7M15.0001 7L9.00012 13M15.0001 7L9.00012 1"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div
            className="absolute h-[150px] md:h-[300px]  w-full bg-gradient-to-b"
            style={{
              background: `linear-gradient(to bottom, ${category.color} 30%, rgba(0,0,0,0) 100%)`,
            }}
          >
            <h1 className="text-white md:mt-[24px] mt-[14px] ml-[14px] md:ml-[26px] font-mulish text-[13px] sm:*:text-[20px] md:text-[30px] font-bold md:leading-[32px] uppercase">
              {category.title} <br className="md:hidden" /> COLLECTION
            </h1>
          </div>
          <img
            src={category.imageUrl}
            className="md:h-[438px] h-[250px] w-full object-cover"
            alt={category.title}
          />
        </div>
      ))}
    </div>
  );
};

export default CategoryCartSection;
