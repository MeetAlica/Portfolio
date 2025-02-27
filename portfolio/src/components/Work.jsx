import Slider from "./Slider.jsx";

// Project 1: RecipeKing
import Image1 from "../assets/projects/RecipeKing/1.webp";
import Image2 from "../assets/projects/RecipeKing/2.webp";
import Image3 from "../assets/projects/RecipeKing/3.webp";
import Image4 from "../assets/projects/RecipeKing/4.webp";
import Image5 from "../assets/projects/RecipeKing/5.webp";
import Image6 from "../assets/projects/RecipeKing/6.webp";
import Image7 from "../assets/projects/RecipeKing/7.webp";
import Image8 from "../assets/projects/RecipeKing/8.webp";
import Image9 from "../assets/projects/RecipeKing/9.webp";
import Image10 from "../assets/projects/RecipeKing/10.webp";
import Image11 from "../assets/projects/RecipeKing/11.webp";

// Project 2: TODO app
import Image12 from "../assets/projects/ToDo/1.webp";
import Image13 from "../assets/projects/ToDo/2.webp";
import Image14 from "../assets/projects/ToDo/3.webp";
import Image15 from "../assets/projects/ToDo/4.webp";
import Image16 from "../assets/projects/ToDo/5.webp";
import Image17 from "../assets/projects/ToDo/6.webp";

// Project 3: Hackman
import Image18 from "../assets/projects/Hackman/1.webp";
import Image19 from "../assets/projects/Hackman/2.webp";
import Image20 from "../assets/projects/Hackman/3.webp";
import Image21 from "../assets/projects/Hackman/4.webp";
import Image22 from "../assets/projects/Hackman/5.webp";

// Project 4: 2D Fighter
import Image23 from "../assets/projects/Fighting_game/1.webp";
import Image24 from "../assets/projects/Fighting_game/2.webp";
import Image25 from "../assets/projects/Fighting_game/3.webp";

// Project 5: Nail art portfolio
import Image26 from "../assets/projects/Nail_art_portfolio/1.webp";
import Image27 from "../assets/projects/Nail_art_portfolio/2.webp";
import Image28 from "../assets/projects/Nail_art_portfolio/3.webp";
import Image29 from "../assets/projects/Nail_art_portfolio/Phone-1.webp";
import Image30 from "../assets/projects/Nail_art_portfolio/Phone-2.webp";
import Image31 from "../assets/projects/Nail_art_portfolio/Phone-3.webp";
import Image32 from "../assets/projects/Nail_art_portfolio/Phone-4.webp";

const Work = () => {
  const proj1 = [
    { url: Image1 },
    { url: Image2 },
    { url: Image3 },
    { url: Image4 },
    { url: Image5 },
    { url: Image6 },
    { url: Image7 },
    { url: Image8 },
    { url: Image9 },
    { url: Image10 },
    { url: Image11 },
  ];

  const proj2 = [
    { url: Image12 },
    { url: Image13 },
    { url: Image14 },
    { url: Image15 },
    { url: Image16 },
    { url: Image17 },
  ];

  const proj3 = [
    { url: Image18 },
    { url: Image19 },
    { url: Image20 },
    { url: Image21 },
    { url: Image22 },
  ];

  const proj4 = [{ url: Image23 }, { url: Image24 }, { url: Image25 }];

  const proj5 = [
    { url: Image26 },
    { url: Image27 },
    { url: Image28 },
    { url: Image29 },
    { url: Image30 },
    { url: Image31 },
    { url: Image32 },
  ];

  return (
    <div className="max-w-[1200px] mx-auto p-5" id="work">
      <div className="pb-8">
        <p className="text-4xl mb-3 font-bold primary-color">Work</p>
        <p className="text-gray-400">Check out some of my recent work:</p>
      </div>

      <div className="bg-gray-900 rounded-xl p-4 mb-4">
        <p className="text-2xl font-bold primary-color">
          RecipeKing: A Recipe Sharing Website
        </p>
        <p className="text-gray-400">
          <br />
          This was a project work, what we did at the end of a fullstack dev
          course. We used React, Tailwind for frontend, and Node.js, PostgreSQL
          for backend. <br /> <br />
          At the top of the home page, you can search for recipes by name or
          type. You can sign up, or sign in. A bit lower you will find the
          recipe swipers by type. If you are logged in, you can visit your
          profile site, where you can see your recipes, or upload a new. The
          site have a detailed search section, where you can search by type,
          category, labels, and username. <br /> <br />
          It was everyone&#39;s first major project, so it took a while to get
          the hang of things. We worked in agile scrum methodology from Dec 2023
          to Feb 2024 with weekly sprints. We divided the task parts on Jira,
          and used GitHub for version controlling.
        </p>
        <Slider images={proj1} />
      </div>

      <div className="bg-gray-700 rounded-xl p-4 mb-4">
        <p className="text-2xl font-bold primary-color">
          TODO App: Simple and Efficient Task Management
        </p>
        <p className="text-gray-400">
          <br />
          My TODO app is a user-friendly web application designed to help users
          manage their daily tasks efficiently. Its features include adding,
          editing, and deleting tasks, as well as tracking their statuses. With
          a minimalist design and intuitive user interface, navigation is quick
          and straightforward, making it an ideal choice for organizing daily
          tasks and enhancing productivity. <br /> <br />
          The project was developed as part of a programming course and
          showcases fundamental steps in application development. <br /> <br />
          You can check out the app{" "}
          <a
            href="https://todo-app-4f5.pages.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="primary-color"
          >
            here
          </a>
          .
        </p>
        <Slider images={proj2} />
      </div>

      <div className="bg-gray-900 rounded-xl p-4 mb-4">
        <p className="text-2xl font-bold primary-color">
          Hackman: A Guessing Game
        </p>
        <p className="text-gray-400">
          <br />
          I made a more rudimentary version of this project during the
          programming course. <br /> <br />
          This project is based on a simple guessing game. You need to guess the
          admin&#39;s password. You have 6 attempts, if you run out you have to
          start over. You can guess letters by clicking the buttons on the
          on-screen keyboard. <br /> <br />
          In addition to the game, I used a free weatherAPI for displaying the
          weather at the player&#39;s location.
          <br /> <br />
          You can try out the game{" "}
          <a
            href="https://hangman-game-8u1.pages.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="primary-color"
          >
            here
          </a>
          .
        </p>
        <Slider images={proj3} />
      </div>

      <div className="bg-gray-700 rounded-xl p-4 mb-4">
        <p className="text-2xl font-bold primary-color">A 2D Fighter Game</p>
        <p className="text-gray-400">
          <br />
          I was interested in making web games, so I made this 2D fighting game
          as a practice. The game textures are from sprites freely available on
          the internet.
          <br /> <br />
          This is a game that requires 2 players to play. You can move around,
          jump, and slash with your sword. The first to remove the
          opponent&#39;s health points wins. <br /> <br />
          This works just on desktop, but you can beat your friends{" "}
          <a
            href="https://2d-fighting-game-12p.pages.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="primary-color"
          >
            here
          </a>
          .
        </p>
        <Slider images={proj4} />
      </div>

      <div className="bg-gray-900 rounded-xl p-4 mb-4">
        <p className="text-2xl font-bold primary-color">Nail Art Portfolio</p>
        <p className="text-gray-400">
          <br />
          The portfolio page I developed is a modern and user-friendly web
          application designed for a nail artist. Its main function is to allow
          visitors to easily browse and view the nail artist&#39;s work. In the
          gallery, users can swipe through the images, making it quick and
          efficient to review different styles and techniques. <br /> <br />
          For contact purposes, I implemented a serverless solution using
          Formspree. This allows visitors to send messages directly to the nail
          artist through the website without the need for a traditional
          server-side setup. This not only simplifies development and
          maintenance but also provides faster and more efficient communication
          between visitors and the service provider. <br /> <br />
          The design of the page is clean and aesthetic, emphasizing the quality
          and diversity of the nail artist&#39;s work. Its responsive layout
          ensures it is easily accessible and usable from mobile devices,
          providing a user-friendly experience on any platform. <br /> <br />
          Visit the page{" "}
          <a
            href="https://nailsbyreni.pages.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="primary-color"
          >
            here
          </a>
          .
        </p>
        <Slider images={proj5} />
      </div>

      <div className="bg-gray-700 rounded-xl p-4 mb-4">
        <p className="text-gray-400">More coming...</p>
      </div>
    </div>
  );
};

export default Work;
