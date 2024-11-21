import image1 from "../../assets/Man.avif";
import image2 from "../../assets/Man2.jpeg";
import image3 from "../../assets/Man3.jpg";
import image4 from "../../assets/Man4.png";
import { FaStar } from "react-icons/fa";
const ProductsData = [
  {
    id: 1,
    img: image1,
    title: "T-shirt",
    rating: 4.8,
    author: "blue",
    aosDelay: "0",
  },
  {
    id: 2,
    img: image2,
    title: "T-shirt",
    rating: 4.5,
    author: "White",
    aosDelay: "200",
  },
  {
    id: 3,
    img: image3,
    title: "Jeans",
    rating: 4.7,
    author: "Grey",
    aosDelay: "400",
  },
  {
    id: 1,
    img: image4,
    title: "Polo T-Shirt",
    rating: 4.4,
    author: "Red",
    aosDelay: "600",
  },
  {
    id: 1,
    img: image2,
    title: "Fashin T-Shirt",
    rating: 4.5,
    author: "White",
    aosDelay: "800",
  },
];
const Products = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* section content */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Selling Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
            asperiores modi Sit asperiores modi
          </p>
        </div>
        {/* section cards */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {ProductsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
              >
                <img
                  src={data.img}
                  className="h-[220px] w-[150px] object-cover rounded-md"
                  alt=""
                />
                <h2 className="font-semibold">{data.title}</h2>
                <p className="text-sm text-gray-600">{data.author}</p>
                <div className="flex items-center gap-1">
                  <FaStar className="text-yellow-500" />
                  <span>{data.rating}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md">
              View all buttons
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
