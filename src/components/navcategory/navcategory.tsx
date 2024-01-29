"use client";
import { cn } from "@/lib/utils";
import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import React, { useEffect, useState } from "react";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/categories");
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return res.json();
};

function NavCategory() {
  const [dataCategories, setDataCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData();
        setDataCategories(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {dataCategories && (
        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
          {dataCategories.map((item: { title: string; slug: string }) => (
            <ListItem
              key={item.title}
              title={item.title}
              href={item.slug}
            ></ListItem>
          ))}
        </ul>
      )}
    </>
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

export default NavCategory;
