'use client';
import Image from "next/image";
import Link from "next/link";
import NavItem from "./NavItem";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const routes = [
    { href: "/", label: "HOME" },
    { href: "/about", label: "ABOUT DR SUSAN" },
    { href: "/books", label: "BOOKS" },
    { href: "/services", label: "SERVICES" },
    { href: "/blog", label: "BLOG" },
    { href: "/contact", label: "CONTACT US" },
]

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
      setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);


  return (
    <>
    <nav className="h-24 md:h-12 z-50 w-full flex items-center justify-between px-8 md:px-24 md:py-12 absolute top-0 left-0 bg-black/20 backdrop-blur-md font-main">
      {/* Logo */}
      <div>
        <Image
          src="/logo.png"
          alt="Dr Susan Logo"
          width={100}
          height={50}
          className="object-contain w-30 h-30 md:w-40 md:h-40"
        />
      </div>
      {/* Navigation Links */}
      <div className="hidden lg:flex items-center gap-8 font-main text-lg">
        {
          routes.map((route, index) => (
            <NavItem key={index} route_href={route.href} route_label={route.label} />
          ))
        }
      </div>

      {/* Mobile menu button */}
      <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white relative w-10 h-10 z-50">
            <AnimatePresence mode="wait">
              <motion.div
                key={isOpen ? "close" : "menu"}
                initial={{ rotate: 45, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -45, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {isOpen ? <FiX size={40} /> : <FiMenu size={40} />}
              </motion.div>
            </AnimatePresence>
          </button>
      </div>
    </nav>
    {/* Mobile Menu */}
    <AnimatePresence>
    {isOpen && (
        <motion.div 
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden z-40 fixed top-0 left-0 w-full h-screen bg-black/90 backdrop-blur-md"
        >
            <div className="flex flex-col items-center justify-center h-full w-screen gap-8 font-main">
                {routes.map((route, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index + 0.3 }}
                    onClick={() => setIsOpen(false)}
                  >
                    <NavItem route_href={route.href} route_label={route.label} />
                  </motion.div>
                ))}
            </div>
        </motion.div>
    )}
    </AnimatePresence>
    </>
  );
};

export default Navbar;
