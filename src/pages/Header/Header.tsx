import { Menu, Moon, Sun, X, AlignLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

import { Button } from "../../components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
import { useTheme } from "../../components/theme-provider";

// Theme toggle component moved to its own function
function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

// Enhanced Header component with improved styling and navigation
export function Header({ toggleSidebar }: { toggleSidebar?: () => void }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSidebarToggle = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent any default behavior
    e.stopPropagation(); // Stop event propagation

    // Call the toggleSidebar function only if it's a function
    if (typeof toggleSidebar === "function") {
      toggleSidebar();
    } else {
      console.error(
        "toggleSidebar is not a function. Make sure it's properly passed to the Header component."
      );
    }
  };

  return (
    <header className="sticky top-0 z-[9999] w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="flex h-16 items-center justify-between px-4 md:px-8">
        <div className="flex items-center gap-6">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden mr-1"
            onClick={handleSidebarToggle}
            data-sidebar-toggle
            aria-label="Toggle sidebar"
          >
            <AlignLeft className="h-5 w-5" />
            <span className="sr-only">Toggle sidebar</span>
          </Button>

          <Link to="/" className="flex items-center gap-2">
            <img
              src="https://olova.js.org/olova.png"
              alt="Olova UI Logo"
              className="h-8 w-8"
            />
            <h1 className="text-xl font-bold tracking-tight">Olova UI</h1>
          </Link>

          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link
              to="/"
              className="text-muted-foreground transition-colors hover:text-foreground hover:underline underline-offset-4"
            >
              Home
            </Link>
            <Link
              to="/docs/header"
              className="text-muted-foreground transition-colors hover:text-foreground hover:underline underline-offset-4"
            >
              Components
            </Link>
            <Link
              to="/about"
              className="text-muted-foreground transition-colors hover:text-foreground hover:underline underline-offset-4"
            >
              About
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex">
            <Button variant="outline" size="sm" className="mr-2">
              Log in
            </Button>
            <Button size="sm">Sign up</Button>
          </div>
          <ModeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden py-4 px-4 bg-background border-t">
          <nav className="flex flex-col space-y-4">
            <Link
              to="/"
              className="text-foreground hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/docs/header"
              className="text-foreground hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Components
            </Link>
            <Link
              to="/about"
              className="text-foreground hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <div className="flex space-x-2 pt-2">
              <Button variant="outline" size="sm" className="flex-1">
                Log in
              </Button>
              <Button size="sm" className="flex-1">
                Sign up
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
