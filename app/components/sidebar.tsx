// components/Sidebar.tsx
import { sidebarItem } from "@/data/sidebarItem";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="w-64 h-full cursor-pointer shadow-md bg-slate-600 px-1">
      <ul>
        {sidebarItem.map((item) => (
          <li
            key={item.id}
            className="p-1  cursor-pointer hover:bg-gray-400 transition-all duration-75"
          >
            <Link className="flex flex-1 size-full" href={item.to}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
