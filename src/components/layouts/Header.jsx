import Container from "../Container";
import Image from "../Image";
import { Link, useLocation } from "react-router-dom";
import BeeCoder from "/src/assets/BeeCoder2.png";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
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
      className={`text-white sticky w-full z-50 transition-all duration-500 ease-in-out font-DMSans py-5
        ${isPassed ? "top-0 bg-[#0F172B] backdrop-blur-md shadow-sm" : "-top-25 bg-[#0F172B] shadow-none"}`}
    >
      <Container>
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div>
            <Link to={"/"}>
              <Image imgSrc={BeeCoder} className="w-36 lg:w-40" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center">
            <ul className="flex items-center gap-x-2 lg:gap-x-3 text-[15px] font-bold">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "#about" },
                { name: "Services", path: "#services" },
                { name: "Experience", path: "#service" },
                { name: "Projects", path: "#projects" },
                { name: "Contact", path: "#contact" },
              ].map((menu) => (
                <li key={menu.name}>
                  <a
                    href={menu.path}
                    className="group relative inline-block px-4 lg:px-5 py-3 rounded-lg hover:text-primary transition-colors duration-400 after:content-[''] after:absolute after:inset-0 after:rounded-lg after:bg-[#ee5f3825] after:scale-0 after:origin-center after:transition-all after:duration-400 hover:after:scale-100"
                  >
                    {menu.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Icons + Hamburger */}
          <div className="flex items-center gap-x-2">
            {/* Social Icons - Hidden on mobile */}
            <div className="hidden md:flex items-center gap-x-2">
              <Link
                to="https://www.facebook.com/ashfakmahmuddev"
                target="_blank"
                className="h-9 w-9 bg-[#ffffff2d] rounded-full flex items-center justify-center hover:text-primary hover:bg-[#ee5f3825] transition-all duration-500"
              >
                <FaFacebookF />
              </Link>
              <Link
                to="https://www.linkedin.com/in/ashfakmahmuddev"
                target="_blank"
                className="h-9 w-9 bg-[#ffffff2d] rounded-full flex items-center justify-center hover:text-primary hover:bg-[#ee5f3825] transition-all duration-500"
              >
                <FaLinkedinIn />
              </Link>
              <Link
                to="https://github.com/ashfakmahmuddev"
                target="_blank"
                className="h-9 w-9 bg-[#ffffff2d] rounded-full flex items-center justify-center hover:text-primary hover:bg-[#ee5f3825] transition-all duration-500"
              >
                <FaGithub />
              </Link>
            </div>

            {/* Hamburger Button */}
            <button
              className="md:hidden text-3xl focus:outline-none z-50"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute left-0 right-0 top-full bg-[#0F172B] border-t border-white/10 py-6 shadow-xl">
            <ul className="flex flex-col items-center gap-y-6 text-lg font-medium">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "#about" },
                { name: "Services", path: "#services" },
                { name: "Experience", path: "#service" },
                { name: "Projects", path: "#projects" },
                { name: "Contact", path: "#contact" },
              ].map((menu) => (
                <li key={menu.name}>
                  <a
                    href={menu.path}
                    onClick={() => setIsOpen(false)}
                    className="hover:text-primary transition-colors"
                  >
                    {menu.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Mobile Social Icons */}
            <div className="flex justify-center gap-x-6 mt-8">
              <Link to="https://www.facebook.com/ashfakmahmuddev" target="_blank" className="text-2xl hover:text-primary">
                <FaFacebookF />
              </Link>
              <Link to="https://www.linkedin.com/in/ashfakmahmuddev" target="_blank" className="text-2xl hover:text-primary">
                <FaLinkedinIn />
              </Link>
              <Link to="https://github.com/ashfakmahmuddev" target="_blank" className="text-2xl hover:text-primary">
                <FaGithub />
              </Link>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Header;