"use client";

import Link from "next/link";
import styles from "./navbar.module.css";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import React from "react";
import { cn } from "@/lib/utils";
import { ModeToggle } from "../dropdowntheme/dropdowntheme";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import NavigationUser from "../navigationuser/navigationuser";

export const kategori: { title: string; href: string }[] = [
  {
    title: "Teknologi",
    href: "/?page=1&cat=teknologi",
  },
  {
    title: "Politik",
    href: "/?page=1&cat=politik",
  },
  {
    title: "Fashion",
    href: "/?page=1&cat=fashion",
  },
  {
    title: "Kesehatan dan Kebugaran",
    href: "/?page=1&cat=kesehatandankebugaran",
  },
  {
    title: "Wisata dan Kuliner",
    href: "/?page=1&cat=wisatadankuliner",
  },
  {
    title: "Seni dan Hiburan",
    href: "/?page=1&cat=senidanhiburan",
  },
  {
    title: "Pendidikan",
    href: "/?page=1&cat=pendidikan",
  },
  {
    title: "Lingkungan",
    href: "/?page=1&cat=lingkungan",
  },
];

function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const [topik, setTopik] = React.useState(false);
  return (
    <div className="fixed w-full justify-center z-50">
      <nav className="w-full top-0 flex justify-between items-center pt-8 pb-4 mb-4 dark:bg-zinc-950 bg-white z-20">
        <div className="flex gap-2 items-center">
          {pathname !== "/login" && (
            <Button
              size={"icon"}
              variant={"outline"}
              className="md:hidden"
              onClick={() => {
                setOpen(!open);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </Button>
          )}
          <Link href={"/"} className={styles.title}>
            Oi Blog .
          </Link>
        </div>
        {pathname !== "/login" && (
          <div className="hidden md:flex">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Topik</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                      {kategori.map((item) => (
                        <ListItem
                          key={item.title}
                          title={item.title}
                          href={item.href}
                        ></ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/buat" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Buat Artikel
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/tentang" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Tentang Kami
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        )}
        <div className="flex gap-4">
          <ModeToggle />
          <NavigationUser />
        </div>
      </nav>
      {open && (
        <div className="fixed flex flex-col w-full min-h-full p-6 -mt-4 bg-white dark:bg-zinc-950 z-40">
          <div className="pb-10">
            <NavigationMenu className="flex flex-col w-full gap-4 max-w-none pb-10">
              <Link href={"/"} className="w-full">
                <Button
                  variant={"secondary"}
                  className="w-full h-14"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  Home
                </Button>
              </Link>
              <Button
                variant={"secondary"}
                className="w-full h-14 flex gap-2 items-center"
                onClick={() => {
                  setTopik(!topik);
                }}
              >
                <h5>Topik</h5>
                {topik ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 15.75 7.5-7.5 7.5 7.5"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                )}
              </Button>
              {topik && (
                <ul className="grid gap-3 p-4 w-full md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {kategori.map((item) => (
                    <ListItem
                      key={item.title}
                      title={item.title}
                      href={item.href}
                      onClick={() => {
                        setTopik(false);
                        setOpen(false);
                      }}
                    ></ListItem>
                  ))}
                </ul>
              )}
              <Link href={"/buat"} className="w-full">
                <Button
                  variant={"secondary"}
                  className="w-full h-14"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  Buat Artikel
                </Button>
              </Link>
              <Link href={"/"} className="w-full">
                <Button
                  variant={"secondary"}
                  className="w-full h-14"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  Tentang Kami
                </Button>
              </Link>
            </NavigationMenu>
          </div>
        </div>
      )}
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<typeof Link>,
  React.ComponentPropsWithoutRef<typeof Link>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Navbar;
