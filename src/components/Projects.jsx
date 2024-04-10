import project1 from "../assests/project1.png";
import project2 from "../assests/project2.png";
import project3 from "../assests/project3.png";
import project4 from "../assests/project4.png";
import project5 from "../assests/project5.png";
import project6 from "../assests/project6.png";

const Projects = () => {
  return (
    <div className="max-w-[1200px] mx-auto sm:py-20 p-5" id="projects">
      <div className="text-center">
        <p className="text-4xl font-bold leading-tight primary-color">
          Projects
        </p>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
        <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-[200px] bg-cover relative">
          <img src={project1} alt="project1" />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/30 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider">
              IcePoseidon vs Nepal
            </span>
            <div className="pt-8 text-center">
              <a
                href="https://anixunter.github.io/iceposeidonvsnepal/"
                target="_blank"
              >
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-primary-color text-white font-bold text-lg">
                  Live
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-[200px] bg-cover relative">
          <img src={project2} alt="project2" />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/30 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider">
              Youtuber GuessWho
            </span>
            <div className="pt-8 text-center">
              <a
                href="https://anixunter.github.io/youtuberguesswho-game/"
                target="_blank"
              >
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-primary-color text-white font-bold text-lg">
                  Live
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-[200px] bg-cover relative">
          <img src={project3} alt="project3" />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/30 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider">
              Wordle
            </span>
            <div className="pt-8 text-center">
              <a
                href="https://anixunter.github.io/wordle-game/"
                target="_blank"
              >
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-primary-color text-white font-bold text-lg">
                  Live
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-[200px] bg-cover relative">
          <img src={project4} alt="project4" />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/30 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider">
              Luffy vs Pirate
            </span>
            <div className="pt-8 text-center">
              <a
                href="https://anixunter.github.io/battle-game/"
                target="_blank"
              >
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-primary-color text-white font-bold text-lg">
                  Live
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-[200px] bg-cover relative">
          <img src={project5} alt="project5" />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/30 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider">
              Dice Game
            </span>
            <div className="pt-8 text-center">
              <a
                href="https://anixunter.github.io/dicegame-react/"
                target="_blank"
              >
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-primary-color text-white font-bold text-lg">
                  Live
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-[200px] bg-cover relative">
          <img src={project6} alt="project6" />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/30 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider">
              Hangman
            </span>
            <div className="pt-8 text-center">
              <a
                href="https://anixunter.github.io/hangman-game/"
                target="_blank"
              >
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-primary-color text-white font-bold text-lg">
                  Live
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
