import Link from "next/link";
import React from "react";

const NavItem = ({ route_href, route_label }) => {
  return (
    <Link
      href={route_href}
      className="font-light text-white hover:border-b-2 border-blue-400 transition-all ease-in-out duration-200"
    >
      {route_label}
    </Link>
  );
};

export default NavItem;
