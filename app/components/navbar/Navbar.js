import Image from "next/image";
import Link from "next/link";
import NavItem from "./NavItem";

const routes = [
    { href: "/", label: "HOME" },
    { href: "/about", label: "ABOUT DR SUSAN" },
    { href: "/books", label: "BOOKS" },
    { href: "/services", label: "SERVICES" },
    { href: "/blog", label: "BLOG" },
    { href: "/contact", label: "CONTACT US" },
]

const Navbar = () => {
  return (
    <nav className="z-50 w-full flex items-center justify-center gap-40 px-24 py-12 absolute top-0 left-0">
      {/* Logo */}
      <div>
        <Image
          src="/logo.png"
          alt="Dr Susan Logo"
          width={150}
          height={50}
          className="object-contain"
        />
      </div>
      {/* Navigation Links */}
      <div className="flex items-center gap-8 font-main text-lg">
        {
          routes.map((route, index) => (
            <NavItem key={index} route_href={route.href} route_label={route.label} />
          ))
        }
      </div>
    </nav>
  );
};

export default Navbar;
