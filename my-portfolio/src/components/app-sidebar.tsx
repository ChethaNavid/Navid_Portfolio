"use client"

import { Home, User, Award, Folder, LayoutDashboard, Mail } from "lucide-react"
import Link from "next/link";
import { ModeToggle } from "./modeToggle";
import { usePathname } from "next/navigation";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SideBarProfile,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "About",
    url: "/about",
    icon: User,
  },
  {
    title: "Archievement",
    url: "/archievement",
    icon: Award,
  },
  {
    title: "Projects",
    url: "/projects",
    icon: Folder,
  },
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Contact",
    url: "/contact",
    icon: Mail,
  },
]

export function AppSidebar() {
  const pathName = usePathname();
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SideBarProfile />
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => {
                const isActive = pathName === item.url;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link href={item.url}
                        className={`flex items-center gap-3 px-3 py-2 rounded-md transition ${
                          isActive
                            ? "bg-gray-200 text-black dark:bg-gray-700 dark:text-gray-200"
                            : "text-gray-700 hover:text-black hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                        }`}
                      >
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <ModeToggle />
      </SidebarContent>
    </Sidebar>
  )
}