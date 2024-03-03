import aboutImg from "../assets/about3.jpg";
import aboutImg2 from "../assets/about2.jpg";

const About = () => {
  return (
    <div className="text-white max-w-[1200px] mx-auto my-12" id="about">
      <div className="md:grid md:grid-cols-3 sm:py-16 items-center">
        <div className="mx-auto rounded-3x1 py-8 md:py-0 w-80 h-80 overflow-hidden">
          <img className="w-full h-full object-cover" src={aboutImg} />
        </div>
        <div className="mt-4 md:mt-0 text-left flex">
          <div className="my-auto mx-6">
            <h2 className="text-4x1 font-bold mb-4 primary-color">About me</h2>
            <p className="text-base lg:text-lg">
              Hi, I&#39;m Ali! I am new to programming, but very enthusiastic
              and motivated. I have a huge desire to create. In addition to
              programming, I have a hobby that also requires a lot of
              creativity, which is music. <br/> <br/> In April 2023, I attended a fullstack developer course. During the course, we created several smaller projects, such as: todo app, weather report app, hangman game, etc. At the end of the course, a few of my classmates and I created a recipe sharing website, using Jira and agile scrum methodology.{" "}
            </p>
          </div>
        </div>
        <div className="mx-auto rounded-3x1 py-8 md:py-0 w-80 h-80 overflow-hidden">
          <img className="w-full h-full object-cover" src={aboutImg2} />
        </div>
      </div>
    </div>
  );
};

export default About;
