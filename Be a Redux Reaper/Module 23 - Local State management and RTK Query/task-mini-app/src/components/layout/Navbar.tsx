import { Link } from "react-router";
import Logo from "../../assets/Logo";
import { ModeToggle } from "../mode-toggler";

export default function Navbar() {
  return (
    <nav
      className="max-w-7xl mx-auto h-16 flex items-center justify-center px-6 
  bg-white/70 backdrop-blur-md shadow-lg rounded-2xl mt-3"
    >
      <div className="flex items-center gap-10 text-lg font-semibold">
        <div className="flex items-center gap-2">
          <Logo className="w-8 h-8" />
          <span className="font-bold text-purple-700 text-xl">Task</span>
        </div>

        <Link
          to="/users"
          className="relative group text-gray-700 hover:text-purple-600 transition"
        >
          Users
          <span
            className="absolute left-0 -bottom-1 w-0 h-[2px] bg-purple-600 
        transition-all duration-300 group-hover:w-full"
          ></span>
        </Link>

        <Link
          to="/tasks"
          className="relative group text-gray-700 hover:text-purple-600 transition"
        >
          Tasks
          <span
            className="absolute left-0 -bottom-1 w-0 h-[2px] bg-purple-600 
        transition-all duration-300 group-hover:w-full"
          ></span>
        </Link>
      </div>
      <div className="ml-auto">
        <ModeToggle />
      </div>
    </nav>
  );
}
