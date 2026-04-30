import Container from "../Container";
import { TbPhone } from "react-icons/tb";
import { LuMail } from "react-icons/lu";
import { SlLocationPin } from "react-icons/sl";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
 
const STATUS = {
  IDLE: "idle",
  LOADING: "loading",
  SUCCESS: "success",
  ERROR: "error",
};

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState(STATUS.IDLE);
  const [errorMsg, setErrorMsg] = useState("");
  const [fields, setFields] = useState({
    fullName: "",
    email: "",
    message: "",
  });
 
  const handleChange = (e) => {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
 
  const resetForm = () => {
    setFields({ fullName: "", email: "", message: "" });
  };
 
  const sendEmail = (e) => {
    e.preventDefault();
    setStatus(STATUS.LOADING);
    setErrorMsg("");
 
    emailjs
      .send(
        "service_71qfaqr",
        "template_4oakie3",
        {
          user_name: fields.fullName,
          user_email: fields.email,
          message: fields.message,
        },
        "UtxQrjFxV36I61IEs"
      )
      .then(
        () => {
          setStatus(STATUS.SUCCESS);
          resetForm();
        },
        (error) => {
          setStatus(STATUS.ERROR);
          setErrorMsg(
            error?.text ||
              "Something went wrong. Please try again or email us directly."
          );
        }
      );
  };
 
  const isLoading = status === STATUS.LOADING;
  const isSuccess = status === STATUS.SUCCESS;
  const isError = status === STATUS.ERROR;
 
  return (
    <div id="contact" className="bg-[#1D293D] font-DMSans py-25">
      <Container>
        {/* Header */}
        <div className="text-center pb-16">
          <h3 className="text-white text-2xl font-semibold">Get In Touch !</h3>
          <p className="w-134 mx-auto text-[#90A1B9] text-[15px] font-openSans leading-6 pt-6">
            Frontend Developer with 1+ year of experience focused on building
            scalable web applications using React and Next.js. Proven track
            record of optimizing UI components and improving application
            efficiency by 30%.
          </p>
        </div>
 
        <div className="flex gap-x-15 items-center">
          {/* Form Card */}
          <div className="w-[60%] bg-[#0F172B] rounded-md p-6 relative overflow-hidden">
 
            {/* ── Success Overlay ── */}
            <div
              className={`absolute inset-0 z-10 flex flex-col items-center justify-center rounded-md bg-[#0F172B] transition-all duration-500 ease-in-out
                ${isSuccess ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
            >
              {/* Animated check circle */}
              <div
                className={`flex items-center justify-center w-20 h-20 rounded-full bg-emerald-500/20 border-2 border-emerald-400 mb-5
                  transition-transform duration-500 ${isSuccess ? "scale-100" : "scale-75"}`}
              >
                <svg
                  className="w-9 h-9 text-emerald-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                    className={`transition-all duration-700 delay-200 ${isSuccess ? "opacity-100" : "opacity-0"}`}
                  />
                </svg>
              </div>
 
              <h4 className="text-white text-xl font-semibold mb-2">
                Message Sent!
              </h4>
              <p className="text-[#90A1B9] text-[14px] font-openSans text-center max-w-xs leading-6">
                Thanks for reaching out. I'll get back to you as soon as
                possible.
              </p>
 
              <button
                onClick={() => setStatus(STATUS.IDLE)}
                className="mt-7 text-[14px] font-openSans text-emerald-400 border border-emerald-400/40 hover:border-emerald-400 hover:bg-emerald-400/10 transition-all duration-300 rounded-md px-6 py-2"
              >
                Send another message
              </button>
            </div>
 
            {/* ── Actual Form ── */}
            <form
              ref={form}
              onSubmit={sendEmail}
              className={`pb-7 transition-opacity duration-300 ${isSuccess ? "opacity-0" : "opacity-100"}`}
            >
              <div className="grid grid-cols-1 gap-5">
                {/* Name row */}
                <input
                  required
                  type="text"
                  name="fullName"
                  value={fields.fullName}
                  onChange={handleChange}
                  disabled={isLoading}
                  className="text-[#90A1B9] bg-transparent focus:outline-none focus:border-primary placeholder:text-[#90A1B9] placeholder:text-[15px] placeholder:font-openSans border-2 border-[#1E2939] rounded-sm p-2 transition-colors duration-200 disabled:opacity-50"
                  placeholder="Your Name"
                />
 
                {/* Email */}
                <input
                  required
                  type="email"
                  name="email"
                  value={fields.email}
                  onChange={handleChange}
                  disabled={isLoading}
                  className="text-[#90A1B9] bg-transparent focus:outline-none focus:border-primary placeholder:text-[#90A1B9] placeholder:text-[15px] placeholder:font-openSans border-2 border-[#1E2939] rounded-sm p-2 transition-colors duration-200 disabled:opacity-50"
                  placeholder="Your E-mail"
                />
 
                {/* Message */}
                <textarea
                  required
                  name="message"
                  value={fields.message}
                  onChange={handleChange}
                  disabled={isLoading}
                  className="text-[#90A1B9] bg-transparent focus:outline-none focus:border-primary placeholder:text-[#90A1B9] placeholder:text-[15px] placeholder:font-openSans border-2 border-[#1E2939] rounded-sm h-28 p-2 resize-none transition-colors duration-200 disabled:opacity-50"
                  placeholder="Message"
                />
              </div>
 
              {/* Error Banner */}
              {isError && (
                <div className="flex items-start gap-3 mt-5 bg-red-500/10 border border-red-500/30 rounded-md px-4 py-3 animate-fade-in">
                  <svg
                    className="w-5 h-5 text-red-400 mt-0.5 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
                    />
                  </svg>
                  <p className="text-red-400 text-[14px] font-openSans leading-5">
                    {errorMsg}
                  </p>
                </div>
              )}
 
              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading || isSuccess}
                className={`inline-flex items-center gap-2 text-white text-[15px] font-medium font-openSans py-3 px-6 rounded-md cursor-pointer mt-5 transition-all duration-300
                  ${isLoading
                    ? "bg-primary/60 cursor-not-allowed"
                    : isSuccess
                    ? "bg-emerald-500 cursor-not-allowed"
                    : "bg-primary hover:bg-[#ee5f38ce]"
                  }`}
              >
                {/* Spinner */}
                {isLoading && (
                  <svg
                    className="w-4 h-4 animate-spin"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8z"
                    />
                  </svg>
                )}
 
                {/* Check icon on success (button state — fades before overlay takes over) */}
                {isSuccess && (
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
 
                {isLoading
                  ? "Sending…"
                  : isSuccess
                  ? "Message Sent"
                  : "Send Message"}
              </button>
            </form>
          </div>
 
          {/* Contact Info */}
          <div className="w-[40%]">
            <div className="flex gap-x-6 items-center">
              <TbPhone className="text-white text-2xl" />
              <div>
                <p className="text-white text-[17px] font-medium pb-1">Phone</p>
                <span className="text-[#90A1B9] text-[15px] font-openSans">
                  +880 131-4470272
                </span>
              </div>
            </div>
            <div className="flex gap-x-7 items-center py-5">
              <LuMail className="text-white text-xl" />
              <div>
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
              <div>
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