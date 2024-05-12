import aboutpic from "../assests/aboutpic.webp";

const About = () => {
  return (
    <div className="py-10 text-white h-auto" id="about">
      <div className="flex sm:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
        <div>
          <div className="w-[300px] h-full">
            <img
              src={aboutpic}
              alt="about"
              className="object-cover rounded-xl h-[300px]"
            />
          </div>
        </div>
        <div>
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <h3 className="text-4xl font-semibold mb-5">
                About <span>Me</span>
              </h3>
              <p className="text-justify leading-7 w-11/12 mx-auto">
                Hello! I'm Anish Sharma, an experienced software developer with
                a passion for building impactful web applications. With over 2
                years of professional experience, I specialize in front-end
                development using React.js and Next.js, as well as back-end
                development with Node.js. I have extensive experience working
                with databases, including MongoDB and PostgreSQL.
              </p>
            </div>
          </div>
          <div className="flex mt-10 items-center gap-7">
            <div className="bg-[#333333]/40 p-5 rounded-lg">
              <h3 className="md:text-4xl text-2xl font-semibold text-white">
                11<span>+</span>
              </h3>
              <p>
                <span className="md:text-base text-xs">Projects</span>
              </p>
            </div>
            <div className="bg-[#333333]/40 p-5 rounded-lg">
              <h3 className="md:text-4xl text-2xl font-semibold text-white">
                2<span>+</span>
              </h3>
              <p>
                <span className="md:text-base text-xs">years experience</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
