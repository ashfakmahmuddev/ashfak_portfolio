import Container from "../Container";
import Image from "../Image";
import { Link } from "react-router-dom";
import BeeCoder from "/src/assets/BeeCoder.png";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";


const Header = () => {
  return (
    <div className="fixed w-full text-white bg-[#0F172B] font-DMSans py-5 z-100">
      <Container>
        <div className="flex justify-between items-center">
          <div className="">
            <Link to={"/"} className="">
              <Image imgSrc={BeeCoder}  className={'w-38'}/>
            </Link>
          </div>

          <div className="text-lg font-bold">
            <ul className="flex items-center gap-x-3 md:gap-x-2 text-[15px] font-bold">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "#about" },
                { name: "Services", path: "#services" },
                { name: "Experience", path: "#service" },
                { name: "Projects", path: "#projects" },
                { name: "Contact", path: "#contact" },
              ].map((manu) => (
                <li key={manu.name}>
                  <a
                    href={manu.path}
                    className="
                      group relative inline-block px-5 py-3 rounded-lg 
                      hover:text-[#EE5F38] transition-colors duration-400 
                      after:content-[''] after:absolute after:inset-0 after:rounded-lg 
                      after:bg-[#EE5F381A] after:scale-0 after:origin-center 
                      after:transition-all after:duration-400 after:ease-out 
                      hover:after:scale-100
                    "
                  >
                    {manu.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center gap-x-2">
            <Link
              to={""}
              className="h-10 w-10 bg-[#ffffff2d] rounded-full flex items-center justify-center hover:text-[#EE5F38] hover:bg-[#EE5F381A] transition-all duration-500"
            >
              <FaFacebookF className="" />
            </Link>
            <Link
              to={""}
              className="h-10 w-10 bg-[#ffffff2d] rounded-full flex items-center justify-center hover:text-[#EE5F38] hover:bg-[#EE5F381A] transition-all duration-500"
            >
              <FaLinkedinIn className="" />
            </Link>
            <Link
              to={""}
              className="h-10 w-10 bg-[#ffffff2d] rounded-full flex items-center justify-center hover:text-[#EE5F38] hover:bg-[#EE5F381A] transition-all duration-500"
            >
              <GrInstagram className="" />
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
