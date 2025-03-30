import { Header } from "./pages/Header/Header";
import Layouts from "./pages/layouts/Layouts";
import Sideber from "./pages/Sideber/Sideber";
import { useState } from "react";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    console.log("Toggling sidebar from", sidebarOpen, "to", !sidebarOpen);
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header toggleSidebar={toggleSidebar} />
      <div className="flex flex-1">
        <div className="md:w-64 md:flex-shrink-0">
          <Sideber isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        </div>
        <main className="flex-1 p-6">
          <Layouts />
        </main>
      </div>
    </div>
  );
}
