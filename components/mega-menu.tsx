"use client"

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export type MegaMenuItem = {
  id: number;
  label: string;
  subMenus?: {
    title: string;
    items: {
      label: string;
      description: string;
      icon: React.ElementType;
    }[];
  }[];
  link?: string;
};

export interface MegaMenuProps extends React.HTMLAttributes<HTMLUListElement> {
  items: MegaMenuItem[];
  className?: string;
}

const MegaMenu = React.forwardRef<HTMLUListElement, MegaMenuProps>(
  ({ items, className, ...props }, ref) => {
    const [openMenu, setOpenMenu] = React.useState<string | null>(null);
    const [isHover, setIsHover] = React.useState<number | null>(null);

    const handleHover = (menuLabel: string | null) => {
      setOpenMenu(menuLabel);
    };

    return (
      <ul
        ref={ref}
        className={`relative flex items-center space-x-20 pt-10 ${className || ""}`} 
        // ↑ pushed further down with pt-10
        {...props}
      >
        {items.map((navItem) => (
          <li
            key={navItem.label}
            className="relative"
            onMouseEnter={() => handleHover(navItem.label)}
            onMouseLeave={() => handleHover(null)}
          >
           <button
  className="relative flex cursor-pointer items-center justify-center gap-6 py-8 px-12 text-5xl font-semibold tracking-wide text-white/90 transition-colors duration-300 hover:text-white group"
  onMouseEnter={() => setIsHover(navItem.id)}
  onMouseLeave={() => setIsHover(null)}
>
  <span>{navItem.label}</span>
  {navItem.subMenus && (
    <ChevronDown
      className={`h-10 w-10 transition-transform duration-300 group-hover:rotate-180 ${
        openMenu === navItem.label ? "rotate-180" : ""
      }`}
    />
  )}
  {(isHover === navItem.id || openMenu === navItem.label) && (
    <motion.div
      layoutId="hover-bg"
      className="absolute inset-0 size-full bg-white/10"
      style={{ borderRadius: 20 }}
    />
  )}
</button>


            <AnimatePresence>
              {openMenu === navItem.label && navItem.subMenus && (
                <div className="absolute left-0 top-full w-auto pt-8 z-10">
                  <motion.div
                    className="w-max border border-white/10 bg-[#181B1C] p-12 shadow-2xl"
                    style={{ borderRadius: 32 }}
                    layoutId="menu"
                  >
                    <div className="flex w-fit shrink-0 space-x-24 overflow-hidden">
                      {navItem.subMenus.map((sub) => (
                        <motion.div layout className="w-full" key={sub.title}>
                          <h3 className="mb-10 text-3xl font-semibold capitalize text-white/70">
                            {sub.title}
                          </h3>
                          <ul className="space-y-12">
                            {sub.items.map((item) => {
                              const Icon = item.icon;
                              return (
                                <li key={item.label}>
                                  <a
                                    href="#"
                                    className="flex items-start space-x-8 group"
                                  >
                                    <div className="flex size-20 shrink-0 items-center justify-center rounded-md border border-white/30 text-white transition-colors duration-300 group-hover:bg-white group-hover:text-[#181B1C]">
                                      <Icon className="h-10 w-10 flex-none" />
                                    </div>
                                    <div className="w-max leading-9">
                                      <p className="shrink-0 text-3xl font-bold text-white">
                                        {item.label}
                                      </p>
                                      <p className="shrink-0 text-xl text-white/60 transition-colors duration-300 group-hover:text-white">
                                        {item.description}
                                      </p>
                                    </div>
                                  </a>
                                </li>
                              );
                            })}
                          </ul>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              )}
            </AnimatePresence>
          </li>
        ))}
      </ul>
    );
  }
);

MegaMenu.displayName = "MegaMenu";

export default MegaMenu;
