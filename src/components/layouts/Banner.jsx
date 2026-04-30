import React from "react";
import Container from "../Container";
import Image from "../Image";
import bannerImg from "/src/assets/bannerImg.png";
import Button from "../Button";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="bg-[url('/src/assets/banner2.png')] bg-no-repeat bg-cover bg-center font-DMSans">
      <Container>
        <div className="flex justify-between">
          <div className="pt-50">
            <div className="text-[40px] font-bold">
              <h4 className="text-white">Hay..! I'm</h4>
              <h1 className="text-primary">Ashfak Mahmud</h1>
            </div>
            <p className="text-xl text-[#90A1B9] max-w-2xl">
              Passionate Frontend Developer from Dhaka, Bangladesh, crafting
              pixel-perfect, responsive web experiences with React and Tailwind
              CSS. Turning ideas into intuitive digital products that users
              love.
            </p>
            <div className="flex items-center gap-x-3 pt-6">
              <Link
                to={
                  "https://mail.google.com/mail/?view=cm&to=ashfakmahmud.dev@gmail.com"
                }
                target="_blank"
                className="text-white text-[15px] font-medium bg-primary inline-block py-3 px-6 rounded-md hover:bg-[#ee5f38ce] transition-all duration-400"
              >
                Hire Me
              </Link>
              <a href="/public/AshfakResume.pdf" download="Ashfak_Resume.pdf">
                <Button btnText={"Download CV"} />
              </a>
            </div>
          </div>
          <div className="relative flex justify-center">
            <Image imgSrc={bannerImg} className={"w-[60%]"} />
            <div className="absolute right-20 bottom-90 bg-[#0F172B] p-5 text-center rounded-lg shadow-lg shadow-[#000000]">
              <h4 className="text-white text-base font-semibold">
                Web Developer
              </h4>
              <span className="text-[#90A1B9] text-sm">
                1+ Years Experience
              </span>
            </div>
            <div className="absolute left-20 bottom-32 bg-[#0F172B] p-5 text-center rounded-lg shadow-lg shadow-[#000000]">
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
