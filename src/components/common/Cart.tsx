import { Button } from "../ui/button"

export interface CartProps {
    id: number;
    image: string;
    title: string;
    price: string;
    category: string;
    new: boolean;
  }

const Cart = ({data}: {data: CartProps}) => {
  return (
    <div className="md:h-[418px] h-[291px] flex flex-col justify-between items-center p-4 border border-primary rounded-[8px] relative overflow-hidden">
        {data.new && 
        <div className="absolute h-[30px] bg-secondary left-[-55px] top-[30px] w-[200px] flex justify-center items-center -rotate-45">
            <p className="text-white text-[14px] font-normal">New Arrivals</p>
        </div>
        }
        <img src={data.image} className="md:h-[215px] md:w-[114px] h-[106px] w-[62px] object-cover" alt="" />
        <div className="text-center flex flex-col md:gap-3 gap-1">
            <h3 className="text-[#0B161A] text-[13px] md:text-[15px] md:font-medium font-mulish">{data.title}</h3>
            <p className="text-secondary text-[12px] md:text-[13px] font-bold leading-[20px]">{data.category}</p>
            <p className="text-primary mt-1 text-[15px] md:text-[17px] font-bold font-mulish md:leading-[16px]">LKR {data.price}</p>
        </div>
        <Button className="bg-primary w-full font-arimo text-white">Add to cart</Button>
    </div>
  )
}

export default Cart