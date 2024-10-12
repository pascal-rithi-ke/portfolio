import * as React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="flex justify-end items-center p-2 md:p-4">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Home</NavigationMenuTrigger>
              <NavigationMenuContent className="p-6">
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] left-[-50px]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        href="/#introduction"
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 focus:shadow-md leading-none no-underline outline-none transition-colors hover:bg-black hover:text-white focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="mb-2 mt-4 text-lg font-semibold leading-none">
                          <img src="/src/assets/photo.jpg" className="pb-4" />
                          Introduction
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          A brief talk about myself and my passions.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <Separator className="md:hidden" />
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        href="/#experience"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-black hover:text-white focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="mb-2 mt-2 text-lg font-semibold leading-none">
                          Experience
                        </div>
                        <p className="text-sm leading-snug text-muted-foreground">
                          A look at my academic background and professional journey.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        href="/#projects"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-black hover:text-white focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="mb-2 mt-2 text-lg font-semibold leading-none">
                          Projects showcases
                        </div>
                        <p className="text-sm leading-snug text-muted-foreground">
                          Showcases of my most successful projects and contributions.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <Link to="/projects/#projects">Projects</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <a href="#contact">Contacts</a>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
}
