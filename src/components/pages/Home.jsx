import React from "react";
import About from "../layouts/About";
import Banner from "../layouts/Banner";
import Services from "../layouts/Services";

const Home = () => {
  return (
    <div className="">
      <Banner />
      <About />
      <Services />

      {/* animate-[spin_10s_linear_infinite] */}
    </div>
  );
};

export default Home;
