import proj1 from "../assets/RecipeKingLogo.png";
import proj2 from "../assets/monitor.png";
import proj3 from "../assets/profilepic.png";

const Work = () => {
  return (
    <div className="max-w-[1200px] mx-auto p-5" id="work">
      <div className="pb-8">
        <p className="text-4x1 mb-3 font-bold primary-color">Work</p>
        <p className="text-gray-400">Check out some of my recent work</p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center h-[200px] bg-cover relative">
          <img src={proj3} alt="" className="max-h-full" />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2x1 font-bold text-white tracking-wider">
              My portfolio website.
            </span>
            <div className="pt-8 text-center">
              <a
                href="https://github.com/MeetAlica/Portfolio/tree/main/portfolio"
                target="_blank"
              >
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  See on GitHub
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center h-[200px] bg-cover relative">
          <img src={proj1} alt="" className="max-h-full" />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2x1 font-bold text-white tracking-wider">
              RecipeKing is a recipe sharing website.
            </span>
            <div className="pt-8 text-center">
              <a
                href="https://github.com/MeetAlica/Recipe-King"
                target="_blank"
              >
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  See on GitHub
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center h-[200px] bg-cover relative">
          <img src={proj2} alt="" className="max-h-full" />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2x1 font-bold text-white tracking-wider">
              A very simple todo app.
            </span>
            <div className="pt-8 text-center">
              <a href="https://todo-app-4f5.pages.dev/" target="_blank">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Try it!
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center h-[200px] bg-cover relative">
          <img src={proj2} alt="" className="max-h-full" />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2x1 font-bold text-white tracking-wider">
              A simple gallows game where you have to guess the password. A
              weather API is also built in.
            </span>
            <div className="pt-8 text-center">
              <a href="https://hangman-game-8u1.pages.dev/" target="_blank">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Try it!
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
