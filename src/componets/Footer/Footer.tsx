import image from "../../assets/footer-pattern.jpg";
import Logo from "../../assets/logo.png";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import { BsSendFill } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";

const backgroundFoot = {
  backgroundImage: `url(${image})`,
  backgroundPosition: "center bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};
const footLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#",
  },
  {
    title: "Contact",
    link: "/#",
  },
  {
    title: "Blog",
    link: "/#",
  },
];
const Footer = () => {
  return (
    <div style={backgroundFoot}>
      <div className="container grid md:grid-cols-3 pb-44 pt-5 text-white">
        <div className="py-8 px-4">
          <a
            href="#"
            className="font-bold text-2xl sm:text-3xl flex gap-2  mb-3"
          >
            <img src={Logo} className="w-10" alt="Logo" />
            Shopsy
          </a>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum in
            beatae ea recusandae blanditiis veritatis.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
          <div className="py-8 px-4">
            <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
              Important Links
            </h1>
            <ul className="flex flex-col gap-3">
              {footLinks.map((link) => (
                <li
                  key={link.title}
                  className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                >
                  <span>{link.title}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="py-8 px-4">
            <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
              Links
            </h1>
            <ul className="flex flex-col gap-3">
              {footLinks.map((link) => (
                <li
                  key={link.title}
                  className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                >
                  <span>{link.title}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="py-8 px-4s">
            <div className="flex items-center gap-3 mb-6">
              <a href="#">
                <FaInstagram className="text-3xl" />
              </a>
              <a href="#">
                <FaFacebook className="text-3xl" />
              </a>
              <a href="#">
                <FaLinkedin className="text-3xl" />
              </a>
            </div>
            <div className="flex items-center gap-3">
              <BsSendFill />
              <p>Noida, Uttar Pradesh</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaPhoneAlt />
              <p>+91 123456789s</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
