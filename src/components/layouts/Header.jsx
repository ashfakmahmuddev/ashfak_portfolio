import Container from "../Container";
import Image from "../Image";
import { Link, useLocation } from "react-router-dom";
import BeeCoder from "/src/assets/BeeCoder2.png";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const location = useLocation();
  const [isPassed, setIsPassed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsPassed(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsOpen(false);
  }, [location.pathname]);
  return (
    <header
      className={`text-white sticky w-full z-50
          transition-all duration-500 ease-in-out font-DMSans py-5
          ${
            isPassed
              ? "top-0 bg-[#0F172B] backdrop-blur-md shadow-sm"
              : "-top-25 bg-[#0F172B] shadow-none"
          }`}
    >
      <Container>
        <div className="flex justify-between items-center">
          <div className="">
            <Link to={"/"} className="">
              <Image imgSrc={BeeCoder} className={"w-38"} />
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
                      hover:text-primary transition-colors duration-400 
                      after:content-[''] after:absolute after:inset-0 after:rounded-lg 
                      after:bg-[#ee5f3825] after:scale-0 after:origin-center 
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
              to={"https://www.facebook.com/ashfakmahmuddev"}
              target="_blank"
              className="h-10 w-10 bg-[#ffffff2d] rounded-full flex items-center justify-center hover:text-primary hover:bg-[#ee5f3825] transition-all duration-500"
            >
              <FaFacebookF className="" />
            </Link>
            <Link
              to={"https://www.linkedin.com/in/ashfakmahmuddev"}
              target="_blank"
              className="h-10 w-10 bg-[#ffffff2d] rounded-full flex items-center justify-center hover:text-primary hover:bg-[#ee5f3825] transition-all duration-500"
            >
              <FaLinkedinIn className="" />
            </Link>
            <Link
              to={""}
              className="h-10 w-10 bg-[#ffffff2d] rounded-full flex items-center justify-center hover:text-primary hover:bg-[#ee5f3825] transition-all duration-500"
            >
              <GrInstagram className="" />
            </Link>
            <button
              className="md:hidden text-3xl focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
