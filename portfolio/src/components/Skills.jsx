import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import nodejs from "../assets/nodejs.png";
import tailwind from "../assets/tailwind.png";
import postgresql from "../assets/postgresql.png";
import git from "../assets/git.png";
import jira from "../assets/jira.png";
import agile from "../assets/agile.png";

const Skills = () => {
  return (
    <div className="border border-gray-600 bg-black text-gray-400 md:h-[150px] max-w-[1200px] mx-auto grid grid-cols-6 place-items-center md:flex md:justify-between md:items-center">
      <h2 className="text-gray-700 text-x1 md:text-4x1 font-bold m-4">
        My <br /> Tech <br /> Stack
      </h2>

      <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
        <img src={html} alt="" width={100} height={100} />
        <p className="mt-2">HTML</p>
      </div>

      <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
        <img src={css} alt="" width={100} height={100} />
        <p className="mt-2">CSS</p>
      </div>

      <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
        <img src={javascript} alt="" width={100} height={100} />
        <p className="mt-2">JavaScript</p>
      </div>

      <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
        <img src={react} alt="" width={100} height={100} />
        <p className="mt-2">React</p>
      </div>

      <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
        <img src={nodejs} alt="" width={100} height={100} />
        <p className="mt-2">Node.js</p>
      </div>

      <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
        <img src={tailwind} alt="" width={100} height={100} />
        <p className="mt-2">Tailwind</p>
      </div>

      <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
        <img src={postgresql} alt="" width={100} height={100} />
        <p className="mt-2">PostgreSQL</p>
      </div>

      <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
        <img src={git} alt="" width={100} height={100} />
        <p className="mt-2">Git</p>
      </div>

      <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
        <img src={jira} alt="" width={100} height={100} />
        <p className="mt-2">Jira</p>
      </div>

      <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
        <img src={agile} alt="" width={100} height={100} />
        <p className="mt-2">Agile Scrum</p>
      </div>
    </div>
  );
};

export default Skills;
