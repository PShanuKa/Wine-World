import { Button } from "@/components/ui/button";
import Logo from "../assets/logo/white.png";
import payhere from "../assets/payhere.png";

const data = [
  {
    id: 1,
    title: "ABOUT US",
    path: "",
    link: [
      {
        path: "/",
        title: "About Us",
      },
      {
        path: "/",
        title: "Careers",
      },
      {
        path: "/",
        title: "Contact Us",
      },
    ],
  },
  {
    id: 2,
    title: "PRODUCT RANGE",
    path: "",
    link: [
      {
        path: "/",
        title: "Wines",
      },
      {
        path: "/",
        title: "Champagne",
      },
      {
        path: "/",
        title: "Spirits",
      },
      {
        path: "/",
        title: "Mixers",
      },
    ],
  },
  {
    id: 3,
    title: "INFORMATION PAGES",
    path: "",
    link: [
      {
        path: "/",
        title: "Place an Order",
      },
      {
        path: "/",
        title: "Returns and Refunds",
      },
      {
        path: "/",
        title: "Privacy Policy",
      },
      {
        path: "/",
        title: "Terms and Conditions",
      },
      {
        path: "/",
        title: "Concierge Policy",
      },
    ],
  },
  {
    id: 3,
    title: "NAVIGATION",
    path: "",
    link: [
      {
        path: "/",
        title: "Wedding",
      },
      {
        path: "/",
        title: "Corporate",
      },
      {
        path: "/",
        title: "Services",
      },
      {
        path: "/",
        title: "Blog",
      },
    ],
  },
  {
    id: 3,
    title: "BEERS & MIXERS",
    path: "",
    link: [
      {
        path: "/",
        title: "Beers",
      },
      {
        path: "/",
        title: "Toddy",
      },
      {
        path: "/",
        title: "Bitters",
      },
      {
        path: "/",
        title: "Puree",
      },
      {
        path: "/",
        title: "Sauce",
      },
      {
        path: "/",
        title: "Syrup",
      },
      {
        path: "/",
        title: "Tonic",
      },
      {
        path: "/",
        title: "Natural Mineral Water",
      },
    ],
  },
];

const Footer = () => {
  return (
    <div className="mt-10 md:mt-20">
      <div className="grid md:grid-cols-12 gap-10 bg-[#1F2730] p-8 rounded-[8px] mx-5">
        <div className="md:col-span-4 col-span-6 flex justify-center md:justify-start w-full">
          <img src={Logo} className="w-[131px] md:w-[319px]" alt="" />
        </div>
        <div className="md:col-span-3 col-span-6 flex flex-col gap-4">
          <p className="text-white font-normal text-center md:text-left font-mulish text-[14px] leading-[25px]">
            Wine World, No 102 and 104,
            <br />
            Kumaran Ratnam Road, Colombo 2, <br />
            Sri Lanka | +94 71 234 5234
          </p>
          <div className="flex items-center mx-auto md:mx-0 gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="21"
              viewBox="0 0 22 21"
              fill="none"
            >
              <path
                d="M10.6071 15.407C10.7259 15.4748 10.8603 15.5104 10.9971 15.5104C11.1338 15.5104 11.2682 15.4748 11.387 15.407C11.6276 15.2686 17.2798 11.9726 17.2798 6.09012C17.2304 4.45862 16.5472 2.91042 15.3749 1.7736C14.2025 0.636768 12.6332 0.000638376 10.9994 4.8021e-07C9.36568 -0.000637415 7.79586 0.634267 6.62263 1.77018C5.4494 2.90609 4.76494 4.45375 4.71429 6.08521C4.71429 11.9726 10.3695 15.2637 10.6071 15.407ZM11 3.73025C11.4662 3.73025 11.9219 3.86836 12.3096 4.12713C12.6972 4.3859 12.9993 4.75369 13.1777 5.18401C13.3561 5.61432 13.4028 6.08783 13.3119 6.54464C13.2209 7.00146 12.9964 7.42108 12.6668 7.75043C12.3371 8.07977 11.9171 8.30406 11.4599 8.39493C11.0026 8.4858 10.5287 8.43916 10.098 8.26092C9.66725 8.08268 9.29911 7.78084 9.04011 7.39356C8.7811 7.00629 8.64286 6.55098 8.64286 6.08521C8.64286 5.46064 8.8912 4.86164 9.33325 4.42C9.7753 3.97836 10.3748 3.73025 11 3.73025ZM22 16.2901C22 19.3496 16.3321 21 11 21C5.66795 21 0 19.3496 0 16.2901C0 14.8584 1.29839 13.5907 3.65652 12.7213C3.8499 12.6575 4.06053 12.6712 4.24401 12.7595C4.42749 12.8478 4.56948 13.0038 4.64004 13.1947C4.7106 13.3856 4.70422 13.5964 4.62225 13.7826C4.54027 13.9689 4.38911 14.1161 4.20062 14.1932C2.57911 14.7927 1.57143 15.5954 1.57143 16.2901C1.57143 17.601 5.15821 19.43 11 19.43C16.8418 19.43 20.4286 17.601 20.4286 16.2901C20.4286 15.5954 19.4209 14.7927 17.7994 14.1941C17.6109 14.1171 17.4597 13.9699 17.3778 13.7836C17.2958 13.5974 17.2894 13.3866 17.36 13.1957C17.4305 13.0048 17.5725 12.8488 17.756 12.7605C17.9395 12.6722 18.1501 12.6585 18.3435 12.7223C20.7016 13.5907 22 14.8584 22 16.2901Z"
                fill="white"
              />
            </svg>
            <p className="font-mulish text-[14px] text-white font-medium leading-[30px]">
              Reach Us
            </p>
          </div>
          <div className="flex flex-col md:flex-row  items-center gap-4 ">
            <p className="text-white text-[13px]">Follow Us:</p>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="177"
                height="26"
                viewBox="0 0 177 26"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M100 6.76166V19.0829C100 22.804 103.041 25.8446 106.762 25.8446H119.083C122.804 25.8446 125.845 22.804 125.845 19.0829V6.76166C125.845 3.04054 122.804 0 119.083 0H106.762C103.041 0 100 3.04054 100 6.76166ZM116.043 8.94545C116.043 8.45048 116.44 8.05273 116.935 8.05273C117.421 8.05273 117.819 8.45048 117.828 8.94545C117.828 9.44042 117.43 9.83817 116.935 9.83817C116.44 9.83817 116.043 9.44042 116.043 8.94545ZM112.984 9.19141C110.925 9.19141 109.254 10.8619 109.254 12.9214C109.254 14.9808 110.925 16.6513 112.984 16.6513C115.044 16.6513 116.714 14.9808 116.714 12.9214C116.714 10.8619 115.044 9.19141 112.984 9.19141ZM112.984 15.3167C111.667 15.3167 110.598 14.2472 110.598 12.9302C110.598 11.6132 111.667 10.5437 112.984 10.5437C114.301 10.5437 115.371 11.6132 115.371 12.9302C115.371 14.2472 114.301 15.3167 112.984 15.3167ZM109.899 20.4973H115.945C118.455 20.4973 120.497 18.4556 120.497 15.9453V9.89962C120.497 7.38941 118.455 5.34766 115.945 5.34766H109.899C107.389 5.34766 105.347 7.38941 105.347 9.89962V15.9453C105.347 18.4556 107.389 20.4973 109.899 20.4973ZM106.771 9.89962C106.771 8.17606 108.176 6.7707 109.899 6.7707H115.945C117.669 6.7707 119.074 8.17606 119.074 9.89962V15.9453C119.074 17.6689 117.669 19.0743 115.945 19.0743H109.899C108.176 19.0743 106.771 17.6689 106.771 15.9453V9.89962Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M50 6.76166V19.0829C50 22.804 53.0405 25.8446 56.7617 25.8446H60.907L60.9088 25.8441H60.8983V17.0848H57.6191V13.346H60.8983V10.5C60.8983 7.25613 62.8252 5.4707 65.7773 5.4707C67.1915 5.4707 68.6676 5.72703 68.6676 5.72703V8.90898H67.0413C65.4414 8.90898 64.9376 9.89893 64.9376 10.9242V13.346H68.5262L67.9516 17.0848H64.9376V25.8441H64.9355L64.9375 25.8446H69.0829C72.804 25.8446 75.8446 22.804 75.8446 19.0829V6.76166C75.8446 3.04054 72.804 0 69.0829 0H56.7617C53.0405 0 50 3.04054 50 6.76166Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 6.76047V19.0795C0 22.8 3.04 25.84 6.76047 25.84H19.0795C22.8 25.84 25.84 22.8 25.84 19.0795V6.76047C25.84 3.04 22.8 0 19.0795 0H6.76047C3.04 0 0 3.04 0 6.76047ZM16.7376 7.94465C18.452 7.94465 19.8395 9.3321 19.8395 11.0465V14.7405C19.8395 16.4549 18.452 17.8423 16.7376 17.8423H8.80181C7.08739 17.8423 5.69995 16.4549 5.69995 14.7405V11.0465C5.69995 9.3321 7.08739 7.94465 8.80181 7.94465H16.7376ZM11.612 14.926L15.1734 13.1674C15.3148 13.0879 15.1646 12.8847 15.0232 12.7963L11.6209 10.9405C11.4795 10.8609 11.0023 10.967 11.0023 11.126V14.7405C11.0023 14.8995 11.4707 15.0056 11.612 14.926Z"
                  fill="white"
                />
                <path
                  d="M151 19.0829V6.76166C151 3.04054 154.041 0 157.762 0H170.083C173.804 0 176.845 3.04054 176.845 6.76166V19.0829C176.845 22.804 173.804 25.8446 170.083 25.8446H157.762C154.041 25.8446 151 22.804 151 19.0829Z"
                  fill="white"
                />
                <path
                  d="M161.3 12.9781C160.647 12.9781 160.009 13.1834 159.467 13.5681C158.924 13.9527 158.501 14.4994 158.251 15.1391C158.001 15.7787 157.936 16.4826 158.063 17.1617C158.191 17.8407 158.505 18.4645 158.967 18.9541C159.428 19.4436 160.016 19.777 160.656 19.9121C161.296 20.0472 161.96 19.9779 162.563 19.7129C163.166 19.4479 163.681 18.9993 164.044 18.4236C164.406 17.8479 164.6 17.1711 164.6 16.4787V5.97681C164.966 7.14369 166.36 9.47745 169 9.47745"
                  stroke="#1F2730"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="md:col-span-5 col-span-6 flex flex-col gap-6 ">
          <h1 className="font-mulish text-center md:text-start font-size font-bold text-[14px] text-white order-3 md:order-1">
            SIGN UP FOR OUR NEWSLETTER
          </h1>
          <div className="flex gap-2 order-4  md:order-2">
            <input
              className="bg-[#F5F5F5] w-full h-[38px] rounded-[4px] px-4 outline-none placeholder:text-black placeholder:text-[13px] placeholder:font-mulish"
              type="text"
              placeholder="Enter your email address"
            />
            <Button className="bg-secondary w-[120px] h-[40px] rounded-[4px]">
              Subscribe
            </Button>
          </div>
          <div className="h-[1px] bg-white order-2 md:order-3"></div>
          <div className="md:flex justify-between order-1 md:order-4">
            <p className="font-mulish text-[13px] text-center md:text-left text-white ">
              Payment methods:
            </p>
            <div className="flex justify-center md:justify-start">
            <img src={payhere} className="h-[20px] md:h-[30px]" alt="" />
            </div>
          </div>
        </div>

      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 py-[40px] p-7 gap-4">
        {data.map((info) => (
          <div className={`${info.link.length > 6 && 'col-span-2 md:col-span-1'} flex flex-col md:items-center`}>
            <div>
              <h1 className="text-secondary font-mulish leading-[20px] text-[13px] font-extrabold uppercase">
                {info.title}
              </h1>
              <div
                className={`mt-[18px] ${
                  info.link.length > 6
                    ? "grid grid-cols-2  gap-2 "
                    : "flex flex-col gap-1"
                }`}
              >
                {info.link.map((link, index) => (
                  <div>
                    <p
                      key={index}
                      className="text-[#000] font-mulish text-[14px]"
                    >
                      {link.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="h-[57px] flex  items-center justify-center border-t border-secondary mx-5">
        
        <p className="font-mulish md:text-[13px] text-center text-[10px] text-secondary">© Copyright 2024 . All Rights Reserved. Designed by <a href="https://elysiancrest.com/">Elysian Crest</a></p>
      </div>
    </div>
  );
};

export default Footer;
