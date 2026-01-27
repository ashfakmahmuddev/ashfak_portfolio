import React from "react";
import Container from "../Container";
import { FaTabletAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaRightLong } from "react-icons/fa6";
import { FaCode } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import Button from "../Button";

const Services = () => {
  return (
    <div id="services" className="bg-[#1D293D] font-DMSans pt-25">
      <Container>
        <div className="text-center pb-16">
          <h3 className="text-white text-2xl font-semibold">
            What do i offer ?
          </h3>
          <p className="w-123 mx-auto text-[#90A1B9] text-[15px] font-openSans leading-6 pt-6">
            Obviously I'm a Web Designer. Web Developer with over 7 years of
            experience. Experienced with all stages of the development.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-10 pb-25">
          <div className="bg-[#0F172B] rounded-2xl py-6 px-10">
            <FaTabletAlt className="text-[#EE5F38] text-3xl" />
            <h3 className="text-white text-[17px] font-medium pt-5">
              Responsive Design
            </h3>
            <ul className="list-disc pl-4 py-4 text-[#90A1B9]">
              <li>Mobile, tablet & desktop friendly design</li>
              <li>Pixel-perfect layout</li>
              <li>Cross-browser compatible</li>
            </ul>
            <Link
              to={"https://tailwindcss.com/docs/responsive-design"}
              target="_blank"
              className="flex items-center gap-x-2 text-white"
            >
              <span>Read More</span> <FaRightLong />
            </Link>
          </div>
          <div className="bg-[#0F172B] rounded-2xl py-6 px-10">
            <FaCode className="text-[#EE5F38] text-[32px]" />
            <h3 className="text-white text-[17px] font-medium pt-5">
              HTML, CSS & Tailwind
            </h3>
            <ul className="list-disc pl-4 py-4 text-[#90A1B9]">
              <li>Clean & semantic HTML</li>
              <li>Modern CSS / Tailwind CSS</li>
              <li>Reusable components</li>
            </ul>
            <Link
              to={"https://tailwindcss.com"}
              target="_blank"
              className="flex items-center gap-x-2 text-white"
            >
              <span>Read More</span> <FaRightLong />
            </Link>
          </div>
          <div className="bg-[#0F172B] rounded-2xl py-6 px-10">
            <FiFigma className="text-[#EE5F38] text-3xl" />
            <h3 className="text-white text-[17px] font-medium pt-5">
              Figma / PSD to Code
            </h3>
            <ul className="list-disc pl-4 py-4 text-[#90A1B9]">
              <li>Figma / XD / PSD → HTML / React</li>
              <li>Pixel-perfect conversion</li>
              <li>Clean & organized code</li>
            </ul>
            <Link
              to={"https://www.figma.com"}
              target="_blank"
              className="flex items-center gap-x-2 text-white"
            >
              <span>Read More</span> <FaRightLong />
            </Link>
          </div>
          <div className="bg-[#0F172B] rounded-2xl py-6 px-10">
            <FaJsSquare className="text-[#EE5F38] text-3xl" />
            <h3 className="text-white text-[17px] font-medium pt-5">
              JavaScript (ES6+)
            </h3>
            <ul className="list-disc pl-4 py-4 text-[#90A1B9]">
              <li>Interactive UI</li>
              <li>DOM manipulation</li>
              <li>Smooth user experience</li>
            </ul>
            <Link
              to={"https://www.w3schools.com/js"}
              target="_blank"
              className="flex items-center gap-x-2 text-white"
            >
              <span>Read More</span> <FaRightLong />
            </Link>
          </div>
          <div className="bg-[#0F172B] rounded-2xl py-6 px-10">
            <FaReact className="text-[#EE5F38] text-[32px]" />
            <h3 className="text-white text-[17px] font-medium pt-5">
              React.js
            </h3>
            <ul className="list-disc pl-4 py-4 text-[#90A1B9]">
              <li>Single Page Application (SPA)</li>
              <li>Component-based architecture</li>
              <li>Fast & scalable frontend</li>
            </ul>
            <Link
              to={"https://react.dev"}
              target="_blank"
              className="flex items-center gap-x-2 text-white"
            >
              <span>Read More</span> <FaRightLong />
            </Link>
          </div>
          <div className="bg-[#0F172B] rounded-2xl py-6 px-10">
            <FaTools className="text-[#EE5F38] text-[27px]" />
            <h3 className="text-white text-[17px] font-medium pt-5">
              UI Fix & Bug Fixing
            </h3>
            <ul className="list-disc pl-4 py-4 text-[#90A1B9]">
              <li>Layout breaking issue fix</li>
              <li>Responsive problem solve</li>
              <li>UI performance improvement</li>
            </ul>
            <Link
              to={
                "https://www.google.com/search?q=ui+fix+%26+bug+fixing+react+js&oq=UI+Fix+%26+Bug+Fixing&gs_lcrp=EgZjaHJvbWUqBwgBECEYoAEyBggAEEUYOTIHCAEQIRigATIHCAIQIRigAdIBCDM4MDBqMGo0qAIAsAIA&sourceid=chrome&ie=UTF-8"
              }
              target="_blank"
              className="flex items-center gap-x-2 text-white"
            >
              <span>Read More</span> <FaRightLong />
            </Link>
          </div>
        </div>
      </Container>
      <div
        className={`
        min-h-120   
        bg-cover bg-center bg-no-repeat     
        bg-[url('/src/assets/jahin.png')]  
         
        relative                         
        `}
      >
        <div className="absolute inset-0 bg-[#0F172B]/50 text-center flex items-center justify-center">
          <div className="">
            <h3 className="text-white text-2xl font-semibold">
              I Am Available For Font-End Projects.
            </h3>
            <p className="w-123 mx-auto text-[#90A1B9] text-[15px] font-openSans leading-6 py-4">
              Obviously I'm a Web Designer. Web Developer with over 7 years of
              experience. Experienced with all stages of the development.
            </p>
            <Link
              to={""}
              className="text-white text-[15px] font-medium bg-[#EE5F38] inline-block py-3 px-6 rounded-md hover:bg-[#ee5f38c2] transition-all duration-400"
            >
              Hire Me
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
