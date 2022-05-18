import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="footer" className="flex flex-col items-center bg-gray-100 dark:bg-slate-700">
      <div className="w-3/5">
        <div className="flex items-center justify-center py-8 space-x-4">
          <span>
            {/* TODO: twitter link */}
            <FaTwitter size={24} />
          </span>
          <span>
            {/* TODO: github link */}
            <FaGithub size={24} />
          </span>

          <span>
            {/* TODO: linkedin link */}
            <FaLinkedinIn size={24} />
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
