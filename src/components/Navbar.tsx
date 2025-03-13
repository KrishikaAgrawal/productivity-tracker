// import { Toggle } from "@/components/ui/toggle";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/context/ThemeContext";
import { BsSun, BsMoon } from "react-icons/bs";

export function Navbar() {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <nav className="flex justify-between items-center p-5 shadow-md">
      <h1 className="text-2xl font-bold text-amber-600">
        Productivity Tracker
      </h1>
      <div className="flex items-center gap-4">
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full transition-colors duration-500 border"
        >
          {darkMode ? (
            <BsSun className="text-yellow-400 text-lg " />
          ) : (
            <BsMoon className="text-gray-800 text-lg " />
          )}
        </button>
        <Button
          size="sm"
          className="transition-all duration-300 hover:bg-primary/20 hover:scale-105 "
        >
          Get Started
        </Button>
      </div>
    </nav>
  );
}
