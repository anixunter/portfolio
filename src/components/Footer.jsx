import { FaGithubSquare, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mt-6 w-max-[800px] text-center">
      <div className="section-divider-line"></div>
      <div className="mt-2 mb-2 flex items-center justify-around">
        <p className=" text-gray-500">Anish Sharma</p>
        <div className="inline-flex text-gray-500 gap-4 text-2xl">
          <a
            href="https://www.linkedin.com/in/anixunter"
            target="_blank"
            className="hover:scale-105"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/anixunter"
            target="_blank"
            className="hover:scale-105"
          >
            <FaGithubSquare />
          </a>
          <a
            href="https://instagram.com/anixunter"
            target="_blank"
            className="hover:scale-105"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
