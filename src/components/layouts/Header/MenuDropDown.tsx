import { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { LuChevronDown } from "react-icons/lu";
import { GoArrowUpRight } from "react-icons/go";
import "./index.css";

const DropdownMenuItem = ({ item, isScrolled, pathname }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ul
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <li
        className={cn(
          "px-3 py-2 menu-item",
          pathname === item.path && "menu-item-active",
          item.subMenu && "menu-dropdown-pr"
        )}
      >
        <div className="flex items-center gap-1">
          <Link
            href={item.path}
            className={cn(
              "font-semibold capitalize text-white relative hover:text-linear-1 transition text-[16px] flex items-center gap-2",
              pathname === item.path && "text-linear-1",
              pathname !== item.path && isScrolled && "text-black-18"
            )}
          >
            <span>{item.name}</span>
            {item.subMenu && (
              <LuChevronDown
                size={22}
                className={cn(
                  "transition-transform duration-200",
                  isOpen && "rotate-180",
                  isScrolled ? "text-black-18" : "text-white"
                )}
              />
            )}
          </Link>
        </div>

        {/* Dropdown Menu */}
        {item.subMenu && (
          <div
            className={cn(
              "item-dropdown top-[calc(100%+10px)] motion-preset-bounce flex flex-wrap justify-between border mt-1 gap-4 p-4 bg-white left-1/2 -translate-x-[400px] rounded-lg shadow-lg w-[800px]"
            )}
          >
            {item.subMenu.map((subItem: any) => {
              const IconComponent = subItem.icon;
              return (
                <Link
                  key={subItem.name}
                  href={subItem.path}
                  className={cn(
                    "flex w-[48%] justify-between items-center border-b-2  gap-4 px-4 py-4 hover:bg-gray-200 transition-colors",
                    pathname === subItem.path && "text-linear-1 bg-gray-50"
                  )}
                >
                  <div className="flex items-center gap-4">
                    <span className="flex items-center justify-center size-12 rounded-full bg-blue-main">
                      <IconComponent size={24} className="text-white" />
                    </span>
                    <div className="flex flex-col">
                      <span className="text-lg font-semibold">
                        {subItem.name}
                      </span>
                      <span className="text-xs text-gray-500">
                        {subItem.description}
                      </span>
                    </div>
                  </div>
                  <GoArrowUpRight size={30} />
                </Link>
              );
            })}
          </div>
        )}
      </li>
    </ul>
  );
};

export default DropdownMenuItem;
