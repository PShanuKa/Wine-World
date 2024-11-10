import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const data = [
  {
    id: 1,
    name: "Jessica L.",
    comment:
      "I recently discovered Wine World and I am blown away by theselection and the convenience of shopping online. Whether I am looking for a special bottle of wine or a rare whiskey, I know I can find it here. The delivery is quick, and the packaging ensures that everything arrives safely.",
  },
  {
    id: 1,
    name: "Jessica L.",
    comment:
      "I recently discovered Wine World and I am blown away by theselection and the convenience of shopping online. Whether I am looking for a special bottle of wine or a rare whiskey, I know I can find it here. The delivery is quick, and the packaging ensures that everything arrives safely.",
  },
  {
    id: 1,
    name: "Jessica L.",
    comment:
      "I recently discovered Wine World and I am blown away by theselection and the convenience of shopping online. Whether I am looking for a special bottle of wine or a rare whiskey, I know I can find it here. The delivery is quick, and the packaging ensures that everything arrives safely.",
  },
  {
    id: 1,
    name: "Jessica L.",
    comment:
      "I recently discovered Wine World and I am blown away by theselection and the convenience of shopping online. Whether I am looking for a special bottle of wine or a rare whiskey, I know I can find it here. The delivery is quick, and the packaging ensures that everything arrives safely.",
  },
  {
    id: 1,
    name: "Jessica L.",
    comment:
      "I recently discovered Wine World and I am blown away by theselection and the convenience of shopping online. Whether I am looking for a special bottle of wine or a rare whiskey, I know I can find it here. The delivery is quick, and the packaging ensures that everything arrives safely.",
  },
];

const Review = () => {
  return (
    <div>
      <div className="md:grid md:grid-cols-3  gap-[20px] px-[28px]">
        <div className="md:min-h-[270px] flex items-center justify-center md:justify-start">
          <h1 className="font-mulish text-primary font-extrabold text-[18px] md:text-[40px] uppercase text-center md:text-start">
            WHAT OUR <br className="hidden md:block"/> CUSTOMERS <br className=""/> SAY
          </h1>
        </div>

        <Carousel
        className="md:hidden mt-5"
          
        >
          <CarouselContent >
            {data.map((info) => (
              <CarouselItem>
                <div className="relative min-h-[270px] p-[16px] bg-white rounded-[10px] ">
                  <p className="text-bgSecondary font-mulish text-[14px] font-normal text-center leading-[25px]">
                    {info.comment}
                  </p>

                  <div className="absolute bottom-0 left-0 right-0 p-[24px] flex flex-col items-center  gap-[6px]">
                    <h1>{info.name}</h1>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="77"
                        height="13"
                        viewBox="0 0 77 13"
                        fill="none"
                      >
                        <path
                          d="M6.5 0L7.95934 4.49139H12.6819L8.86126 7.26722L10.3206 11.7586L6.5 8.98278L2.6794 11.7586L4.13874 7.26722L0.318133 4.49139H5.04066L6.5 0Z"
                          fill="#FBDC3B"
                        />
                        <path
                          d="M22.5 0L23.9593 4.49139H28.6819L24.8613 7.26722L26.3206 11.7586L22.5 8.98278L18.6794 11.7586L20.1387 7.26722L16.3181 4.49139H21.0407L22.5 0Z"
                          fill="#FBDC3B"
                        />
                        <path
                          d="M38.5 0L39.9593 4.49139H44.6819L40.8613 7.26722L42.3206 11.7586L38.5 8.98278L34.6794 11.7586L36.1387 7.26722L32.3181 4.49139H37.0407L38.5 0Z"
                          fill="#FBDC3B"
                        />
                        <path
                          d="M54.5 0L55.9593 4.49139H60.6819L56.8613 7.26722L58.3206 11.7586L54.5 8.98278L50.6794 11.7586L52.1387 7.26722L48.3181 4.49139H53.0407L54.5 0Z"
                          fill="#B1B1B1"
                        />
                        <path
                          d="M70.5 0L71.9593 4.49139H76.6819L72.8613 7.26722L74.3206 11.7586L70.5 8.98278L66.6794 11.7586L68.1387 7.26722L64.3181 4.49139H69.0407L70.5 0Z"
                          fill="#B1B1B1"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
            
          </CarouselContent>
        </Carousel>

        {data.map((info) => (
          <div className="relative hidden md:block min-h-[270px] p-[16px] bg-white rounded-[10px]">
            <p className="text-bgSecondary font-mulish text-[14px] font-normal leading-[25px]">
              {info.comment}
            </p>

            <div className="absolute bottom-0 left-0 p-[24px] flex flex-col gap-[6px]">
              <h1>{info.name}</h1>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="77"
                  height="13"
                  viewBox="0 0 77 13"
                  fill="none"
                >
                  <path
                    d="M6.5 0L7.95934 4.49139H12.6819L8.86126 7.26722L10.3206 11.7586L6.5 8.98278L2.6794 11.7586L4.13874 7.26722L0.318133 4.49139H5.04066L6.5 0Z"
                    fill="#FBDC3B"
                  />
                  <path
                    d="M22.5 0L23.9593 4.49139H28.6819L24.8613 7.26722L26.3206 11.7586L22.5 8.98278L18.6794 11.7586L20.1387 7.26722L16.3181 4.49139H21.0407L22.5 0Z"
                    fill="#FBDC3B"
                  />
                  <path
                    d="M38.5 0L39.9593 4.49139H44.6819L40.8613 7.26722L42.3206 11.7586L38.5 8.98278L34.6794 11.7586L36.1387 7.26722L32.3181 4.49139H37.0407L38.5 0Z"
                    fill="#FBDC3B"
                  />
                  <path
                    d="M54.5 0L55.9593 4.49139H60.6819L56.8613 7.26722L58.3206 11.7586L54.5 8.98278L50.6794 11.7586L52.1387 7.26722L48.3181 4.49139H53.0407L54.5 0Z"
                    fill="#B1B1B1"
                  />
                  <path
                    d="M70.5 0L71.9593 4.49139H76.6819L72.8613 7.26722L74.3206 11.7586L70.5 8.98278L66.6794 11.7586L68.1387 7.26722L64.3181 4.49139H69.0407L70.5 0Z"
                    fill="#B1B1B1"
                  />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
