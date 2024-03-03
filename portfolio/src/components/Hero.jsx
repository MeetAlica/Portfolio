import heroimage from "../assets/profilepic.png";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70vh] mx-auto py-8 bg-black">
      <div className="col-span-1 my-auto mx-auto w-[300px] h-auto lg:w-[400px]">
        <img src={heroimage} alt="hero image" />
      </div>

      <div className="col-span-2 px-5 my-auto">
        <h1 className="text-white text-4x1 sm:text-5x1 lg:text-8x1 font-extrabold">
          <span className="primary-color">I am a</span> <br />
          <TypeAnimation
            sequence={[
              "Full-Stack Dev",
              1000,
              "Frontend Dev",
              1000,
              "Backend Dev",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>

        <p className="text-white sm:text-lg my-6 lg:text-x1">
          My name is Aladár Fehér and I have 1 year experience in web
          development.
        </p>

        <div className="my-8">
          <a
            href="../assets/Aladar_Feher_CV.pdf"
            download="Aladar_Feher_CV.pdf"
            className="px-6 py-3 w-full rounded-x1 mr-4 bg-gradient-to-br from-orange-500 to-pink-500 text-white"
          >
            Download CV
          </a>
          <a
            href="#contact"
            className="px-6 py-3 w-full rounded-x1 border border-gray-400 hover:bg-gradient-to-br from-orange-500 to-pink-500 text-white hover:border-none"
          >
            Contract
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
