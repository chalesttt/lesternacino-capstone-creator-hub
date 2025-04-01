
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center space-x-2 font-bold text-xl"
        >
          <span className="gradient-text">Capstone Creator Hub</span>
        </Link>
        <nav className="flex items-center gap-2">
          <Link to="/generator">
            <Button variant="ghost">Generator</Button>
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
