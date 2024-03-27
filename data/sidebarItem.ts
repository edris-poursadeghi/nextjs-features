// data/categories.ts
interface SidebarItem {
  id: string;
  name: string;
  to: string;
}

export const sidebarItem: SidebarItem[] = [
  {
    id: "1",
    name: "Home",
    to: "/admin",
  },
  {
    id: "2",
    name: "Profile",
    to: "/admin/profile",
  },
];
