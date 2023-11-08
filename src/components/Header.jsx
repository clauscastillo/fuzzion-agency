"use client";

import { useState } from "react";
import Link from "next/link";
import Budget from "./Budget";
import { HiMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { AnimatePresence } from "framer-motion";
import Contact from "./Contact";

export function Header({ scrollToTop }) {
  const [budget, setBudget] = useState(false);
  const [contact, setContact] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleClickBudget = () => {
    setBudget(!budget);
    document.body.classList.toggle("overflow-hidden");
    setContact(false);
  };
  const handleClickContact = () => {
    setContact(!contact);
    setBudget(false);
  };
  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };
  return (
    <header className="h-16 lg:h-24 bg-dark px-5p py-5 xl:px-1/10 grid z-20 grid-cols-2 lg:grid-cols-header w-full box-border items-center ">
      <AnimatePresence>
        {budget && <Budget popup={true} close={handleClickBudget} />}
      </AnimatePresence>
      <AnimatePresence>
        {contact && <Contact close={handleClickContact} />}
      </AnimatePresence>

      <Link href="/" className="z-20">
        <img className="h-auto w-24 lg:w-36" src="/white-fuzzion.png" alt="" />
      </Link>

      <div
        className={
          toggleMenu
            ? "bg-dark lg:py-0 lg:grid lg:grid-cols-2 lg:visible lg:relative  lg:gap-8 lg:translate-y-0  lg:opacity-100 lg:flex-row lg:top-0 flex flex-col items-center justify-start overflow-hidden absolute top-0 left-0 right-0 visible opacity-100 translate-y-0 transition-all duration-300 z-10 font-medium gap-3 pt-20 pb-5"
            : "lg:py-0 lg:grid lg:grid-cols-2 lg:visible lg:relative  lg:gap-8 lg:translate-y-0  lg:opacity-100 lg:flex-row lg:top-0 flex flex-col  top-0 left-0 right-0 items-center justify-start absolute invisible -translate-y-20 transition-all duration-300 opacity-0 z-10 font-medium gap-3 pt-20 pb-5"
        }
      >
        <nav className="flex lg:flex-row flex-col lg:gap-8 text-center gap-3">
          <Link
            className="nav-link"
            href={"/"}
            onClick={() => {
              handleToggleMenu();
              scrollToTop();
            }}
          >
            Home
          </Link>
          <Link
            className="nav-link "
            href={"/services"}
            onClick={() => {
              handleToggleMenu();
              scrollToTop();
            }}
          >
            Servicios
          </Link>
          <Link
            className="nav-link"
            href={"/nosotros"}
            onClick={() => {
              handleToggleMenu();
              scrollToTop();
            }}
          >
            Nosotros
          </Link>
        </nav>
        <div className="flex lg:flex-row gap-5 justify-self-center flex-col">
          <button
            className="header-contact bg-white font-medium"
            onClick={handleClickContact}
          >
            Contacto
          </button>
          <button
            className="header-price font-medium"
            onClick={handleClickBudget}
          >
            Cotiza tu idea!
          </button>
        </div>
      </div>

      <div className="justify-self-end w-full transition-all duration-200 relative">
        <AiOutlineClose
          onClick={handleToggleMenu}
          size={30}
          color="#fff"
          className={
            toggleMenu
              ? "lg:hidden absolute transition-all duration-200 top-1/2 -translate-y-1/2 right-0 opacity-1 z-20"
              : "lg:hidden absolute transition-all duration-200 top-1/2 -translate-y-1/2 right-0 opacity-0 z-20"
          }
        />

        <HiMenu
          onClick={handleToggleMenu}
          size={30}
          color="#fff"
          className={
            toggleMenu
              ? "lg:hidden absolute transition-all duration-200 top-1/2 -translate-y-1/2 right-0 opacity-0 z-20"
              : "lg:hidden absolute transition-all duration-200 top-1/2 -translate-y-1/2 right-0 opacity-1 z-20"
          }
        />
      </div>
    </header>
  );
}

export default Header;
