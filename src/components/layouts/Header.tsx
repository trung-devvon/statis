"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { LuChevronDown } from "react-icons/lu";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

import { Button } from "../ui/button";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../ui/sheet";
import { cn } from "@/lib/utils";
import ROUTES from "@/utils/routes";

const dataLink: { title: string; href: string; description: string }[] = [
  {
    title: "About us",
    href: ROUTES.ABOUT_US,
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Article & News",
    href: ROUTES.ARTICLE_NEWS,
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Documents",
    href: ROUTES.DOCUMENTS,
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "FAQ",
    href: ROUTES.FAQ,
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
]

const Header = () => {
  return (
    <header className="h-[72px] flex items-center px-[64px] shadow">
      <div className="flex justify-between items-center flex-1">
        <div>
          <Link href={"/"} className="logo text-2xl">
            StaticHub
          </Link>
        </div>
        <nav className="md:hidden hidden sm:hidden lg:flex xl:flex gap-2">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href={ROUTES.HOME} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Home Page
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href={ROUTES.SERVICES} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Our Services
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href={ROUTES.INDUSTRY_INSIGHTS} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Industry Insights
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {dataLink.map((link) => (
                      <Link
                        key={link.title}
                        href={link.href}
                        className="hover:bg-gray-100 px-3 py-4 rounded-md"
                      >
                        <div className="text-sm font-medium leading-none">
                          {link.title}
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          {link.description}
                        </p>
                      </Link>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <Link href={ROUTES.SIGNUP}><Button variant="outline">Sign up</Button></Link>
          <Link href={ROUTES.LOGIN}><Button>Login</Button></Link>
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
