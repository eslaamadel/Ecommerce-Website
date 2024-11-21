import image from "../../assets/Man2.jpeg";
import {
  MdLockOutline,
  MdDeliveryDining,
  MdOutlinePayment,
} from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";

const Banner = () => {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
        <div data-aos="zoom-in">
          <img
            src={image}
            className="max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
            alt=""
          />
        </div>
        <div className=" flex flex-col justify-center gap-6 sm:pt-0">
          <h1
            data-aos="fade-up"
            className="
            text-3xl
            sm:text-4xl
            font-bold
            aos-init
            aos-animate"
          >
            Winter Sale upto 50% Off
          </h1>
          <p
            data-aos="fade-up"
            className="text-sm text-gray-500 tracking-wide leading-5 aos-init aos-animate"
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
            reiciendis inventore iste ratione ex alias quis magni at optio
          </p>
          <div className="flex flex-col gap-4">
            <div data-aos="fade-up" className="flex items-center gap-4">
              <MdLockOutline className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400" />
              <p>Quality Products</p>
            </div>
            <div data-aos="fade-up" className="flex items-center gap-4">
              <MdDeliveryDining className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400" />
              <p>Fast Delivery</p>
            </div>
            <div data-aos="fade-up" className="flex items-center gap-4">
              <MdOutlinePayment className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400" />
              <p>Easy Payment method</p>
            </div>
            <div data-aos="fade-up" className="flex items-center gap-4">
              <BiSolidOffer className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-yellow-400" />
              <p>Get Offerss</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
