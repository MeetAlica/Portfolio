import heroimage from "../assets/heropic.png";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  const message = "Don't forget to:";

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[auto] mx-auto py-8 bg-black">
      <div className="col-span-1 my-auto mx-auto w-[300px] h-auto lg:w-[400px]">
        <img src={heroimage} alt="hero image" />
      </div>

      <div className="col-span-2 px-5 my-auto">
        <h1 className="text-white text-4xl sm:text-5xl lg:text-7xl font-extrabold">
          <span className="primary-color">{message}</span> <br />
          <TypeAnimation
            sequence={[
              "Download my CV!",
              3000,
              "Check my work!",
              3000,
              "Leave me a message!",
              3000,
            ]}
            wrapper="span"
            speed={30}
            repeat={Infinity}
          />
        </h1>

        <p className="text-white sm:text-lg my-6 lg:text-xl">
          Hi there! This page is for showing you my skills and recent work. I
          have 1 year experience in coding, but im very enthusiastic.
        </p>

        <div className="my-8">
          <a
            href="/Aladar_Feher_CV.pdf"
            download="Aladar_Feher_CV.pdf"
            className="px-6 py-3 w-full rounded-xl mr-4 bg-gradient-to-br from-orange-500 to-pink-500 text-white"
          >
            Download CV
          </a>
          <a
            href="#contact"
            className="px-6 py-3 w-full rounded-xl border border-gray-400 hover:bg-gradient-to-br from-orange-500 to-pink-500 text-white hover:border-none"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
