import React from "react";
import Container from "../Container";
import Image from "../Image";
import aboutImg from "/src/assets/aboutImg.png";
import Button from "../Button";
import { FaCode } from "react-icons/fa";
import { TbDeviceImacCode } from "react-icons/tb";
import { MdCardTravel } from "react-icons/md";
import { FaBookOpenReader } from "react-icons/fa6";
import { FaPrayingHands } from "react-icons/fa";
import { MdOutlineSportsHandball } from "react-icons/md";
import { IoGameController } from "react-icons/io5";
import { GiCoffeeCup } from "react-icons/gi";
import { IoLogoAndroid } from "react-icons/io";
import { FaApple } from "react-icons/fa6";
import { PiChefHatBold } from "react-icons/pi";
import { FaSeedling } from "react-icons/fa6";
import { FaSwimmer } from "react-icons/fa";
import { GiCycling } from "react-icons/gi";
import { MdDraw } from "react-icons/md";

const About = () => {
  return (
    <div id="about" className="font-DMSans bg-[#0F172B] py-25">
      <Container>
        <div className="flex items-center gap-8 pb-25">
          <div className="flex justify-center w-[40%] relative">
            <Image imgSrc={aboutImg} />
            <div className="absolute right-7 bottom-25 bg-[#0F172B] p-5 text-center rounded-lg shadow-lg shadow-[#ffffff0d]">
              <h4 className="text-white text-base font-semibold">
                Web Developer
              </h4>
              <p className="text-[#90A1B9] text-sm">
                <span className="text-[#06b6d4] text-2xl font-bold">2+</span>{" "}
                Years <br />
                Experience
              </p>
            </div>
          </div>
          <div className="w-[60%] pl-5">
            <h3 className="text-white text-2xl font-semibold">
              I'm a Passionate Web Developer
            </h3>
            <div className="text-[#90A1B9] text-[15px] leading-6 font-openSans w-142.5 text-justify pb-8">
              <p className="py-6">
                Obviously I'm a Web Developer. Web Developer with over 2 years
                of experience. Experienced with all stages of the development
                cycle for dynamic web projects. The as opposed to using 'Content
                here, content here', making it look like readable English.
              </p>
              <p>
                I'm a professional Web Developer. My motive is to build a best
                web design with my all years of experience.
              </p>
            </div>
            <Button btnText={"See Work"} />
          </div>
        </div>
        <div className="">
          <div className="text-center pb-16">
            <h3 className="text-white text-2xl font-semibold pb-6">
              Hobbies & Expertise
            </h3>
            <p className="text-[#90A1B9] text-[15px] font-openSans w-120 mx-auto">
              Obviously I'm a Web Developer. Web Developer with over 2 years of
              experience. Experienced with all stages of the development.
            </p>
          </div>
          <div className="grid grid-cols-4 gap-8">
            <div className="flex items-center gap-x-5 py-3 px-3  border-2 border-[#1E2939] rounded-lg">
              <div className="h-12 w-12 rounded-xl bg-[#06b5d41f] rotate-45 flex justify-center items-center">
                <div className="-rotate-45 text-[#06b6d4]">
                  <FaCode className="text-xl" />
                </div>
              </div>
              <div className="text-white text-[17px] font-medium">
                <span>Developing</span>
              </div>
            </div>
            <div className="flex items-center gap-x-5 py-3 px-3  border-2 border-[#1E2939] rounded-lg">
              <div className="h-12 w-12 rounded-xl bg-[#06b5d41f] rotate-45 flex justify-center items-center">
                <div className="-rotate-45 text-[#06b6d4]">
                  <TbDeviceImacCode className="text-xl" />
                </div>
              </div>
              <div className="text-white text-[17px] font-medium">
                <span>Designing</span>
              </div>
            </div>
            <div className="flex items-center gap-x-5 py-3 px-3  border-2 border-[#1E2939] rounded-lg">
              <div className="h-12 w-12 rounded-xl bg-[#06b5d41f] rotate-45 flex justify-center items-center">
                <div className="-rotate-45 text-[#06b6d4]">
                  <MdCardTravel className="text-xl" />
                </div>
              </div>
              <div className="text-white text-[17px] font-medium">
                <span>Travelling</span>
              </div>
            </div>
            <div className="flex items-center gap-x-5 py-3 px-3  border-2 border-[#1E2939] rounded-lg">
              <div className="h-12 w-12 rounded-xl bg-[#06b5d41f] rotate-45 flex justify-center items-center">
                <div className="-rotate-45 text-[#06b6d4]">
                  <FaBookOpenReader className="text-lg" />
                </div>
              </div>
              <div className="text-white text-[17px] font-medium">
                <span>Reading</span>
              </div>
            </div>
            <div className="flex items-center gap-x-5 py-3 px-3  border-2 border-[#1E2939] rounded-lg">
              <div className="h-12 w-12 rounded-xl bg-[#06b5d41f] rotate-45 flex justify-center items-center">
                <div className="-rotate-45 text-[#06b6d4]">
                  <FaPrayingHands className="text-xl" />
                </div>
              </div>
              <div className="text-white text-[17px] font-medium">
                <span>Praying</span>
              </div>
            </div>
            <div className="flex items-center gap-x-5 py-3 px-3  border-2 border-[#1E2939] rounded-lg">
              <div className="h-12 w-12 rounded-xl bg-[#06b5d41f] rotate-45 flex justify-center items-center">
                <div className="-rotate-45 text-[#06b6d4]">
                  <MdOutlineSportsHandball className="text-2xl" />
                </div>
              </div>
              <div className="text-white text-[17px] font-medium">
                <span>Sports</span>
              </div>
            </div>
            <div className="flex items-center gap-x-5 py-3 px-3  border-2 border-[#1E2939] rounded-lg">
              <div className="h-12 w-12 rounded-xl bg-[#06b5d41f] rotate-45 flex justify-center items-center">
                <div className="-rotate-45 text-[#06b6d4]">
                  <GiCoffeeCup className="text-2xl" />
                </div>
              </div>
              <div className="text-white text-[17px] font-medium">
                <span>Coffee</span>
              </div>
            </div>
            <div className="flex items-center gap-x-5 py-3 px-3  border-2 border-[#1E2939] rounded-lg">
              <div className="h-12 w-12 rounded-xl bg-[#06b5d41f] rotate-45 flex justify-center items-center">
                <div className="-rotate-45 text-[#06b6d4]">
                  <PiChefHatBold className="text-xl" />
                </div>
              </div>
              <div className="text-white text-[17px] font-medium">
                <span>Coocking</span>
              </div>
            </div>
            <div className="flex items-center gap-x-5 py-3 px-3  border-2 border-[#1E2939] rounded-lg">
              <div className="h-12 w-12 rounded-xl bg-[#06b5d41f] rotate-45 flex justify-center items-center">
                <div className="-rotate-45 text-[#06b6d4]">
                  <FaSeedling className="text-lg" />
                </div>
              </div>
              <div className="text-white text-[17px] font-medium">
                <span>Gardening</span>
              </div>
            </div>
            <div className="flex items-center gap-x-5 py-3 px-3  border-2 border-[#1E2939] rounded-lg">
              <div className="h-12 w-12 rounded-xl bg-[#06b5d41f] rotate-45 flex justify-center items-center">
                <div className="-rotate-45 text-[#06b6d4]">
                  <FaSwimmer className="text-xl" />
                </div>
              </div>
              <div className="text-white text-[17px] font-medium">
                <span>Swimming</span>
              </div>
            </div>
            <div className="flex items-center gap-x-5 py-3 px-3  border-2 border-[#1E2939] rounded-lg">
              <div className="h-12 w-12 rounded-xl bg-[#06b5d41f] rotate-45 flex justify-center items-center">
                <div className="-rotate-45 text-[#06b6d4]">
                  <GiCycling className="text-2xl" />
                </div>
              </div>
              <div className="text-white text-[17px] font-medium">
                <span>Cycling</span>
              </div>
            </div>
            <div className="flex items-center gap-x-5 py-3 px-3  border-2 border-[#1E2939] rounded-lg">
              <div className="h-12 w-12 rounded-xl bg-[#06b5d41f] rotate-45 flex justify-center items-center">
                <div className="-rotate-45 text-[#06b6d4]">
                  <MdDraw className="text-2xl" />
                </div>
              </div>
              <div className="text-white text-[17px] font-medium">
                <span>Drawing</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
