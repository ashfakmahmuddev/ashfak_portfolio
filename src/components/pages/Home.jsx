import React from "react";
import About from "../layouts/About";
import Banner from "../layouts/Banner";
import Services from "../layouts/Services";
import Contact from "../layouts/Contact";

const Home = () => {
  return (
    <div className="">
      <Banner />
      <About />
      <Services />
      <Contact/>
      {/* animate-[spin_10s_linear_infinite] */}
    </div>
  );
};

export default Home;
