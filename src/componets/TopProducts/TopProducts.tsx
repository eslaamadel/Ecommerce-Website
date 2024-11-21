import image1 from "../../assets/shirt1.png";
import image2 from "../../assets/shirt2.png";
import image3 from "../../assets/shirt3.png";
import { FaStar } from "react-icons/fa";
const ProductsData = [
  {
    id: 1,
    img: image1,
    title: "Casual Wear",
    sub: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    img: image2,
    title: "Printed shirt",
    sub: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    img: image3,
    title: "Women shirt",
    sub: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];
interface NavbarProps {
  handleOrderepopup: () => void; // The function type with no arguments and void return
}
const TopProducts: React.FC<NavbarProps> = ({ handleOrderepopup }) => {
  return (
    <div>
      <div className="container">
        <div className="mb-24">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Rated Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Best Products
          </h1>
          <p
            data-aos="fade-up"
            className="text-xs text-gray-400 aos-init aos-animate"
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
            asperiores modi Sit asperiores modi
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
          {ProductsData.map((data) => (
            <div
              data-aos="zoom-in"
              key={data.id}
              className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px] aos-init aos-animate"
            >
              <div className="h-[100px]">
                <img
                  src={data.img}
                  className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                  alt=""
                />
              </div>
              <div className="p-4 text-center">
                <div className="flex justify-center">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
                <h1 className="text-xl font-bold">{data.title}</h1>
                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                  {data.sub}
                </p>
                <div>
                  <button
                    onClick={() => handleOrderepopup()}
                    className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                  >
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
