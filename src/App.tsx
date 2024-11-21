import { useEffect, useState } from "react";
import Navbar from "./componets/Navbar/Navbar";
import Hero from "./componets/Hero/Hero";
import Products from "./componets/Products/Products";
import TopProducts from "./componets/TopProducts/TopProducts";
import Banner from "./componets/Banner/Banner";
import Subscribe from "./componets/Subscribe/Subscribe";
import Testimonials from "./componets/Testimonials/Testimonials";
import Footer from "./componets/Footer/Footer";
import Popup from "./componets/Popup/Popup";
import AOS from "aos";
import "aos/dist/aos.css";
const App = () => {
  const [orderPopup, setorderPopup] = useState(false);
  const handleOrderepopup = () => {
    setorderPopup(!orderPopup);
  };
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar handleOrderepopup={handleOrderepopup} />
      <Hero handleOrderepopup={handleOrderepopup} />
      <Products />
      <TopProducts handleOrderepopup={handleOrderepopup} />
      <Banner />
      <Subscribe />
      <Products />
      <Testimonials />
      <Footer />
      <Popup orderPopup={orderPopup} setorderPopup={setorderPopup} />
    </div>
  );
};
export default App;
