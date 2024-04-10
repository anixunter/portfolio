import htmllogo from "../assests/html.png";
import csslogo from "../assests/css.png";
import javascriptlogo from "../assests/javascript.png";
import reactlogo from "../assests/react.png";
import expressjslogo from "../assests/expressjs.png";
import mongodblogo from "../assests/mongodb.png";
import postgreslogo from "../assests/postgres.png";
import nodejslogo from "../assests/nodejs.png";
import tailwindlogo from "../assests/tailwind.png";
import styledcomponentlogo from "../assests/styledcomponents.png";
import gitlogo from "../assests/git.png";

const Skills = () => {
  return (
    <div
      className="max-w-[1200px] mx-auto sm:py-20 p-5 flex items-center justify-around"
      id="skills"
    >
      <h2 className="primary-color text-4xl font-bold m-4">Skills</h2>
      <div className="text-gray-400 grid grid-cols-3 place-items-center sm:grid-cols-4 md:grid-cols-6 gap-4">
        <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
          <img
            src={htmllogo}
            alt="html"
            width={100}
            height={100}
            className="hover:scale-90"
          />
          <p className="mt-2">HTML</p>
        </div>
        <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
          <img
            src={csslogo}
            alt="css"
            width={100}
            height={100}
            className="hover:scale-90"
          />
          <p className="mt-2">CSS</p>
        </div>
        <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
          <img
            src={javascriptlogo}
            alt="javascript"
            width={100}
            height={100}
            className="hover:scale-90"
          />
          <p className="mt-2">JS</p>
        </div>
        <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
          <img
            src={reactlogo}
            alt="react"
            width={100}
            height={100}
            className="hover:scale-90"
          />
          <p className="mt-2">React</p>
        </div>
        <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
          <img
            src={nodejslogo}
            alt="node"
            width={100}
            height={100}
            className="hover:scale-90"
          />
          <p className="mt-2">Node</p>
        </div>
        <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
          <img
            src={expressjslogo}
            alt="express"
            width={100}
            height={100}
            className="hover:scale-90"
          />
          <p className="mt-2">Express</p>
        </div>
        <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
          <img
            src={postgreslogo}
            alt="postgres"
            width={100}
            height={100}
            className="hover:scale-90"
          />
          <p className="mt-2">Postgresql</p>
        </div>
        <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
          <img
            src={mongodblogo}
            alt="mongodb"
            width={100}
            height={100}
            className="hover:scale-90"
          />
          <p className="mt-2">Mongodb</p>
        </div>
        <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
          <img
            src={styledcomponentlogo}
            alt="styledcomponent"
            width={100}
            height={100}
            className="hover:scale-90"
          />
          <p className="mt-2">SC</p>
        </div>
        <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
          <img
            src={tailwindlogo}
            alt="tailwind"
            width={100}
            height={100}
            className="hover:scale-90"
          />
          <p className="mt-2">Tailwind</p>
        </div>
        <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
          <img
            src={gitlogo}
            alt="git"
            width={100}
            height={100}
            className="hover:scale-90"
          />
          <p className="mt-2">git</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
