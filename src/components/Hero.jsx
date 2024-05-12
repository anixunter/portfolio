import profilepic from "../assests/profilepic.png";
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div id="home">
      <div className="my-7 sm:my-0 max-w-[1200px] h-auto mx-auto flex flex-col-reverse sm:flex-row justify-center align-center">
        <div className="flex-col my-auto mx-auto">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold text-gray-200">
            Hi! I am Anish Sharma
          </p>
          <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
            <TypeAnimation
              sequence={[
                "Engineer",
                1000,
                "Developer",
                1000,
                "Tech Expert",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <div className="flex justify-center items-center">
            <p className="md:text-5xl sm:text-4xl text-xl font-bold text-gray-500">
              with a 2+ years experience
            </p>
          </div>
          <div className="text-5xl flex justify-start gap-16 my-7 text-purple-600">
            <a
              href="https://www.linkedin.com/in/anixunter"
              target="_blank"
              className="hover:scale-105"
            >
              <AiFillLinkedin />
            </a>
            <a
              href="https://github.com/anixunter"
              target="_blank"
              className="hover:scale-105"
            >
              <AiFillGithub />
            </a>
            <a
              href="https://instagram.com/anixunter"
              target="_blank"
              className="hover:scale-105"
            >
              <AiFillInstagram />
            </a>
          </div>
          <div className="relative inline-flex group my-3">
            <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44bcff] via-[#ff44ec] to-[#ff675e] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"></div>
            <a
              href="https://drive.google.com/file/d/1XHsxvQBolmhWaPVEiSBtP5acjLbmLKKS/view?usp=sharing"
              target="_blank"
              title="CV"
              role="button"
              className="w-[190px] h-[60px] relative inline-flex items-center justify-center px-6 py-4 text-lg font-bold text-white transition-all duration-200 bg-primary-color rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            >
              Checkout CV
            </a>
          </div>
        </div>
        {/* <div className="my-auto">
          <img
            className="w-[200px] sm:w-[300px] mx-auto h-auto"
            src={profilepic}
            alt="profile pic"
          />
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
