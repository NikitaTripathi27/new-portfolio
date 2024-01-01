"use client";

import Link from "next/link";
import React, { useCallback, useState } from "react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { useTheme } from "next-themes";

const links = [
  {
    name: "home",
    icon: "estate",
  },
  {
    name: "about",
    icon: "user",
  },
  {
    name: "skills",
    icon: "file-alt",
  },
  {
    name: "services",
    icon: "briefcase-alt",
  },
  {
    name: "projects",
    icon: "image",
  },
  {
    name: "contact",
    icon: "message",
  },
];

const Header = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [toggleMenu, setToggleMenu] = useState(false);
  const { theme, setTheme } = useTheme();
  const handleActiveLink = useCallback((name: string) => {
    setActiveLink(name);
  }, []);

  const handleToggleMenu = useCallback(() => {
    setToggleMenu((currentValue) => !currentValue);
  }, []);

  const handleToggleBlur = () => {
    setTimeout(() => {
      setToggleMenu(false);
    }, 200);
  };

  return (
    <header className="navbar relative">
      <nav className="container flex items-center justify-between">
        <Link href="/" id="#home" className="font-semibold">
          Nikita
        </Link>

        <div className="md:hidden flex items-center gap-4">
          <ThemeSwitcher />
          <div
            onBlur={handleToggleBlur}
            onClick={handleToggleMenu}
            className="md:hidden block "
          >
            <button className="text-2xl text-gray-800 dark:text-[#A7A7A7] cursor-pointer">
              {toggleMenu ? (
                <i className="uil uil-times"></i>
              ) : (
                <i className="uil uil-bars"></i>
              )}
            </button>
          </div>
        </div>

        <ul className="items-center gap-6 md:flex hidden">
          {links.map((link) => (
            <li
              key={link.name}
              onClick={() => handleActiveLink(link.name)}
              className={`capitalize cursor-pointer text-sm  text-black dark:text-[#A7A7A7] ${
                activeLink === link.name && " font-semibold"
              }`}
            >
              <a href={`#${link.name}`}>{link.name}</a>
            </li>
          ))}

          <li>
            <ThemeSwitcher />
          </li>
        </ul>

        {/* Mobile Nav */}
        {toggleMenu && (
          <ul
            className={`md:hidden duration-200 flex flex-col items-center gap-6  absolute top-12 py-8 left-0 right-0 ${
              theme === "dark"
                ? "shadow-lg  dark:bg-[#191919]"
                : "shadow bg-white"
            }`}
          >
            {links.map((link) => (
              <li
                key={link.name}
                onClick={() => handleActiveLink(link.name)}
                className={`capitalize cursor-pointer text-sm flex flex-col items-center gap-2 text-black dark:text-[#A7A7A7] ${
                  activeLink === link.name && " font-semibold"
                }`}
              >
                <i className={`uil uil-${link.icon} text-xl`}></i>
                <a href={`#${link.name}`}>{link.name}</a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
