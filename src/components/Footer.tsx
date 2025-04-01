
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t py-6 md:py-10">
      <div className="container flex flex-col items-center justify-center gap-4 md:flex-row md:gap-6">
        <p className="text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Capstone Creator Hub. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <p className="text-sm text-muted-foreground">
            Developed by Lester Nacino
          </p>
          <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
            Privacy
          </Link>
          <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}
