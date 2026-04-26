import Container from "../Container";
import Image from "../Image";
import aboutImg from "/src/assets/aboutImg.png";
import Button from "../Button";
import { hobbies } from "/src/components/data/aboutData";
import HobbyCard from "/src/components/HobbyCard";
import { Link } from "react-router-dom";

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
                <span className="text-primary text-2xl font-bold">2+</span>{" "}
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
            <Link to={"https://github.com/ashfakmahmuddev?tab=repositories"} target="_blank">
              <Button btnText={"See Work"} />
            </Link>
          </div>
        </div>
        <div className="">
          <div className="text-center pb-16">
            <h3 className="text-white text-2xl font-semibold pb-6">
              Hobbies & Expertise
            </h3>
            <p className="text-[#90A1B9] text-[15px] font-openSans w-134 mx-auto">
              Frontend Developer with 1+ year of experience focused on building
              scalable web applications using React and Next.js. Proven track
              record of optimizing UI components and improving application
              efficiency by 30%.
            </p>
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
            {hobbies.map((item) => (
              <HobbyCard key={item.id} title={item.title} icon={item.icon} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
