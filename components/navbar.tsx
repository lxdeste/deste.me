import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const getThemeIcon = (theme: string | undefined) => {
  return theme === "light" ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-yellow-400" />;
};

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="flex items-center justify-center h-24 py-2 bg-gray-50 dark:bg-slate-800">
      <div className="flex items-center justify-between w-3/5">
        <div className="flex items-center space-x-1 text-2xl">
          <Link href={"/"}>
            <a>
              <span>ALEX</span>
              <span className="font-bold">D'ESTE</span>
            </a>
          </Link>
        </div>
        <div className="flex items-center space-x-8 text-xl">
          {/* <Link href={"/about"}>
            <a className="hover:animate-shake motion-reduce:hover:animate-none hover:underline">ABOUT</a>
          </Link> */}
          <Link href={"/blog"}>
            <a className="hover:animate-shake motion-reduce:hover:animate-none hover:underline">BLOG</a>
          </Link>
          <Link href={"#footer"}>
            <a className="hover:animate-shake motion-reduce:hover:animate-none hover:underline">CONTACT</a>
          </Link>
          <button
            onClick={() => {
              setTheme(theme === "light" ? "dark" : "light");
            }}
          >
            {mounted ? getThemeIcon(theme) : <div style={{ width: "1em", height: "1em" }}></div>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
