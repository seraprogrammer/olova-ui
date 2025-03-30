import { Link } from "react-router-dom";
import { useEffect } from "react";

// Accept props for controlling visibility
export default function Sideber({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  // Add more detailed logging
  useEffect(() => {
    console.log("Sidebar component - isOpen state changed to:", isOpen);
  }, [isOpen]);

  // Component list with optional "updated" status
  const components = [
    { name: "Header", path: "/docs/header" },
    { name: "Autocomplete", path: "/docs/autocomplete" },
    { name: "Alert", path: "/docs/alert" },
  ];

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        isOpen &&
        !target.closest("aside") &&
        !target.closest("[data-sidebar-toggle]")
      ) {
        console.log("Closing sidebar from outside click");
        onClose();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isOpen, onClose]);

  // Make sure the sidebar is visible when isOpen is true
  // Use more explicit classes to ensure visibility
  const sidebarClass = isOpen
    ? "translate-x-0 shadow-lg"
    : "-translate-x-full md:translate-x-0";

  return (
    <>
      {/* Add overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-30 md:hidden"
          onClick={onClose}
        />
      )}
      <aside
        className={`fixed md:static w-64 h-screen overflow-y-auto bg-background z-40 transition-all duration-300 ${sidebarClass}`}
      >
        <div className="p-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Components</h2>
            <button
              className="text-muted-foreground hover:text-foreground md:hidden"
              onClick={onClose}
              aria-label="Close sidebar"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          <nav>
            <ul className="space-y-1">
              {components.map((component) => (
                <li key={component.path}>
                  <Link
                    to={component.path}
                    className="flex items-center px-3 py-2 rounded-md hover:bg-accent transition-colors group"
                    onClick={() => onClose()}
                  >
                    <span className="text-muted-foreground mr-3 group-hover:text-foreground">
                      •
                    </span>
                    <span>{component.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
}
