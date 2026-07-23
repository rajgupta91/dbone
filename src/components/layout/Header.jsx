import { Bell } from "lucide-react";

export default function Header() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-6">
      <h1 className="text-xl font-semibold">
        Distributor Business OS
      </h1>

      <div className="flex items-center gap-5">
        <Bell className="cursor-pointer" />

        <div className="h-10 w-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
          R
        </div>
      </div>
    </header>
  );
}