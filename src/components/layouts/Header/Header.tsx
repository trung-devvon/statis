"use client";
import React, { useCallback, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { LuChevronDown } from "react-icons/lu";
import throttle from "lodash/throttle";

import { menuHeader } from "@/utils/constants/menu";

import { Button } from "../../ui/button";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../../ui/sheet";
import { cn } from "@/lib/utils";
import ROUTES from "@/utils/routes";
import Link from "next/link";
import DropdownMenuItem from "./MenuDropDown";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const checkScrollPosition = useCallback(() => {
    setIsScrolled(window.scrollY > 0);
  }, []);

  const handleScroll = useCallback(
    throttle(() => {
      setIsScrolled(window.scrollY > 0);
    }, 100),
    []
  );

  useEffect(() => {
    checkScrollPosition();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      handleScroll.cancel(); // Clean up throttled function
    };
  }, [handleScroll, checkScrollPosition]);

  useEffect(() => {
    checkScrollPosition();
  }, [pathname, checkScrollPosition]);
  return (
      <header
        className={cn(
          "fixed top-0 left-0 w-full h-[80px] flex items-center px-[64px] bg-black-18/10 z-50 transition-all duration-300",
          isScrolled ? "h-[60px] shadow-lg bg-white" : "h-[80px] bg-black-18/10"
        )}
      >
        <div className="flex justify-between items-center w-full">
          <div className="">
            <div className="bg-linear-1 rounded-full p-1">
              <div className="bg-black-18 rounded-full py-1 px-10">
                <Link href={"/"} className="text-white logo text-2xl font-bold">
                  StaticHub
                </Link>
              </div>
            </div>
          </div>
          <nav className="md:hidden hidden sm:hidden lg:hidden xl:flex 2xl:flex gap-6 items-center">
            {menuHeader.map((item) => (
              <DropdownMenuItem
                key={item.name}
                item={item}
                isScrolled={isScrolled}
                pathname={pathname}
              />
            ))}
            <div className="flex flex-1 items-center justify-items-end-end gap-6">
              <Link href={ROUTES.BUSINESS_DIRECTORY}>
                <Button
                  className="rounded-full bg-linear-1 font-semibold"
                >
                  Request for demo
                </Button>
              </Link>
              <Link href={ROUTES.LOGIN}>
                <Button
                  className="bg-white text-blue-main hover:text-white hover:bg-linear-1 rounded-full font-semibold"
                >
                  Login
                </Button>
              </Link>
            </div>
          </nav>
  
          {/* Mobile Menu Button */}
          <div className="lg:hidden md:flex sm:flex">
            <Sheet>
              <SheetTrigger asChild>
                <Button className="text-white">
                  <Menu size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-white text-primary p-4">
                <nav className="flex flex-col gap-4 py-8">
                  <SheetClose asChild>
                    <Link
                      href="/"
                      className="hover:bg-gray-100 cursor-pointer rounded-md py-1 px-3"
                    >
                      Home Page
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      href="/services"
                      className="hover:bg-gray-100 cursor-pointer rounded-md py-1 px-3"
                    >
                      Our Services
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      href="/insights"
                      className="hover:bg-gray-100 cursor-pointer rounded-md py-1 px-3"
                    >
                      Industry Insights
                    </Link>
                  </SheetClose>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
  );
};

export default Header;
