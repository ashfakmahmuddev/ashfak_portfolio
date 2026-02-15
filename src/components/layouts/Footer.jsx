import Container from "../Container";
import { TbPhone } from "react-icons/tb";
import { LuMail } from "react-icons/lu";
import { SlLocationPin } from "react-icons/sl";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Footer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_71qfaqr",
        "template_4oakie3",
        form.current,
        "UtxQrjFxV36I61IEs",
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        },
      );
  };

  return (
    <div id="contact" className="bg-[#1D293D] font-DMSans py-25">
      <Container>
        <div className="text-center pb-16">
          <h3 className="text-white text-2xl font-semibold">Get In Touch !</h3>
          <p className="w-123 mx-auto text-[#90A1B9] text-[15px] font-openSans leading-6 pt-6">
            Obviously I'm a Web Designer. Web Developer with over 7 years of
            experience. Experienced with all stages of the development.
          </p>
        </div>
        <div className="flex gap-x-15 items-center">
          <div className="w-[60%] bg-[#0F172B] rounded-md p-6">
            <form ref={form} onSubmit={sendEmail} className="pb-7">
              <div className="grid grid-cols-1 gap-5">
                <div className="grid grid-cols-2 gap-5">
                  <input
                    type="text"
                    name="user_name"
                    className="text-[#90A1B9] focus:outline-none placeholder:text-[#90A1B9] placeholder:text-[15px] placeholder:font-openSans border-2 border-[#1E2939] rounded-sm p-2"
                    placeholder="First Name"
                  />
                  <input
                    type="text"
                    className="text-[#90A1B9] focus:outline-none placeholder:text-[#90A1B9] placeholder:text-[15px] placeholder:font-openSans border-2 border-[#1E2939] rounded-sm p-2"
                    placeholder="Last Name"
                  />
                </div>
                <input
                  type="email"
                  name="user_email"
                  className="text-[#90A1B9] focus:outline-none placeholder:text-[#90A1B9] placeholder:text-[15px] placeholder:font-openSans border-2 border-[#1E2939] rounded-sm p-2"
                  placeholder="Your E-mail"
                />
                <textarea
                  type="text"
                  name="message"
                  className="text-[#90A1B9] focus:outline-none placeholder:text-[#90A1B9] placeholder:text-[15px] placeholder:font-openSans border-2 border-[#1E2939] rounded-sm h-28 p-2 resize-none"
                  placeholder="Massage"
                />
              </div>
              <button
                value="Send"
                type="submit "
                className="text-white text-[15px] bg-[#06b6d4] hover:bg-[#06b5d4b6] transition-all duration-400 font-medium font-openSans inline-block py-3 px-6 rounded-md cursor-pointer mt-5"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="w-[40%]">
            <div className="flex gap-x-6 items-center">
              <TbPhone className="text-white text-2xl" />
              <div className="">
                <p className="text-white text-[17px] font-medium pb-1">Phone</p>
                <span className="text-[#90A1B9] text-[15px] font-openSans">
                  +880 131-4470272
                </span>
              </div>
            </div>
            <div className="flex gap-x-7 items-center py-5">
              <LuMail className="text-white text-xl" />
              <div className="">
                <p className="text-white text-[17px] font-medium pb-1">
                  E-mail
                </p>
                <span className="text-[#90A1B9] text-[15px] font-openSans">
                  mdashfakmahmud550@gmail.com
                </span>
              </div>
            </div>
            <div className="flex gap-x-7 items-center">
              <SlLocationPin className="text-white text-xl" />
              <div className="">
                <p className="text-white text-[17px] font-medium pb-1">
                  Location
                </p>
                <span className="text-[#90A1B9] text-[15px] font-openSans">
                  Kazipara, Mirpur, Dhaka.
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
