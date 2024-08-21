"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
//import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
//import { useSession } from "next-auth/react";
//import { RoleGate } from "../rolegate/RoleGate";

interface NavItem {
  name: string;
  path: string;
}

const Navbar: React.FC = () => {
  //const session = useSession();
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = (): void => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems: NavItem[] = [
    { name: "About Me", path: "/about-me" },
    { name: "Experience", path: "/experience" },
    { name: "Contact Me", path: "/contact-me" }
  ];

  return (
    <nav className={`fixed top-0 z-40 w-full transition-all duration-300 ${isSticky ? "shadow" : ""}`}>
      <div className="bg-white">
        <div className="container mx-auto max-w-herosec px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            
              <Image
                className="object-contain"
                src="/images/blossom.png"
                alt="Bloom image"
                width={40}
                height={40}
              />
              <Link href="/" className="text-2xl font-bold text-gray-800">
                Logo drawing
              </Link>
            
            <div className="flex flex-grow justify-end">
              <div className="flex space-x-8">
                {navItems.map((item: NavItem) => (
                  <div key={item.name} className="group relative">
                    <Link
                      href={item.path}
                      className={`py-2 transition duration-300 ${pathname === item.path ? "text-black" : "text-gray-600 hover:text-black"}`}
                    >
                      {item.name}
                      {pathname === item.path}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;