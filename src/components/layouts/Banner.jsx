import React from "react";
import Container from "../Container";
import Image from "../Image";
import bannerImg from "/src/assets/bannerImg.png";
import Button from "../Button";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="bg-[url('/src/assets/banner.png')] bg-no-repeat bg-cover bg-center pt-16 font-DMSans">
      <Container>
        <div className="grid grid-cols-2 gap-x-8 justify-between">
          <div className="pt-80">
            <div className="text-[40px] font-bold">
              <h4 className="text-white pb-1">Hay..! I'm</h4>
              <h1 className="text-[#06b6d4]">Web Developer</h1>
            </div>
            <p className="w-120 text-[#90A1B9] text-base font-openSans pt-4">
              Obviously I'm a Web Designer. Web Developer with over 7 years of
              experience. Experienced with all stages of the development.
            </p>
            <div className="flex items-center gap-x-3 pt-6">
              <Link to={''} className="text-white text-[15px] font-medium bg-[#06b6d4] inline-block py-3 px-6 rounded-md hover:bg-[#06b5d4c5] transition-all duration-400">
                Hire Me
              </Link>
              <Link to={''}>
                <Button btnText={"Download CV"} />
              </Link>
            </div>
          </div>
          <div className="relative">
            <Image imgSrc={bannerImg} className={"w-full"} />
            <div className="absolute right-8 bottom-95 bg-[#0F172B] p-5 text-center rounded-lg shadow-lg shadow-[#000000]">
              <h4 className="text-white text-base font-semibold">
                Web Developer
              </h4>
              <span className="text-[#90A1B9] text-sm">
                2+ Years Experience
              </span>
            </div>
            <div className="absolute left-2 bottom-32 bg-[#0F172B] p-5 text-center rounded-lg shadow-lg shadow-[#000000]">
              <h4 className="text-white text-[36px] font-bold leading-none">
                50+
              </h4>
              <span className="text-[#90A1B9] text-sm">Project Completed</span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
