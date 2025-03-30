import { Routes, Route } from "react-router-dom";
import HeaderDocs from "../../docs/Header/HeaderDocs";

export default function Layouts() {
  return (
    <div className="w-full max-w-full overflow-x-hidden">
      <Routes>
        <Route path="/docs/header" element={<HeaderDocs />} />
      </Routes>
    </div>
  );
}
