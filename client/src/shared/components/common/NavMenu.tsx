"use client";

import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/shared/components/ui/navigation-menu";
import { Button } from "../ui/button";
import { Check } from "lucide-react";

type MenuItem = {
  title: string; // Main heading
  href: string;
  subItems?: { subTitle: string; subDescription: string }[]; // Sub-items for dropdown
};

interface NavMenuProps {
  menu: MenuItem[];
}

export default function NavMenu({ menu }: NavMenuProps) {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList className="gap-2">
        {menu.map((item: MenuItem, idx: number) => (
          <NavigationMenuItem key={idx}>
            {item.subItems ? (
              <>
                <NavigationMenuTrigger className="bg-transparent px-2">
                  {item.title}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="flex flex-col gap-2 w-[300px]">
                    {item.subItems.map((subItem, subIdx) => (
                      <li key={subIdx}>
                        <NavigationMenuLink asChild>
                          <Link
                            className="flex flex-row gap-3 items-center"
                            to={item.href}
                          >
                            <Button variant="outline" size="icon">
                              <Check />
                            </Button>
                            <div className="flex flex-col gap-1 pt-1">
                              <div className="text-sm leading-none font-medium">
                                {subItem.subTitle}
                              </div>
                              <p className="text-muted-foreground text-sm leading-none">
                                {subItem.subDescription}
                              </p>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </>
            ) : (
              <NavigationMenuLink className="px-2" asChild>
                <Link to={item.href}>{item.title}</Link>
              </NavigationMenuLink>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

// ListItem removed, logic inlined above
