"use client";

import Link from "next/link";
import styles from "./navbar.module.css";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import React from "react";
import { cn } from "@/lib/utils";
import { ModeToggle } from "../dropdowntheme/dropdowntheme";
import { Button } from "../ui/button";

const kategori: { title: string; href: string }[] = [
  {
    title: "Teknologi",
    href: "/",
  },
  {
    title: "Politik",
    href: "/",
  },
  {
    title: "Fashion",
    href: "/",
  },
  {
    title: "Kesehatan dan Kebugaran",
    href: "/",
  },
  {
    title: "Wisata dan Kuliner",
    href: "/",
  },
  {
    title: "Seni dan Hiburan",
    href: "/",
  },
  {
    title: "Pendidikan",
    href: "/",
  },
  {
    title: "Lingkungan",
    href: "/",
  },
];

function Navbar() {
  return (
    <nav className="sticky top-0 flex justify-between items-center pt-8 pb-4 mb-4 dark:bg-zinc-950 bg-white z-20">
      <Link href={"/"} className={styles.title}>
        Oi Blog .
      </Link>
      <div className="hidden md:flex">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
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
              <Link href="/docs" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Buat Artikel
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/docs" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Tentang Kami
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="flex gap-4">
        <ModeToggle />
        <Button variant={"outline"}>
          <Link href={"/login"}>
            <h5>Log in</h5>
          </Link>
        </Button>
        <Button variant={"default"}>
          <Link href={"/login"}>
            <h5>Sign up</h5>
          </Link>
        </Button>
      </div>
    </nav>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
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
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Navbar;
