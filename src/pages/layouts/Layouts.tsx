import { Routes, Route } from "react-router-dom";
import HeaderDocs from "../../docs/Header/HeaderDocs";
import ButtonDocs from "../../docs/Buttons/ButtonDocs";

export default function Layouts() {
  return (
    <div className="w-full max-w-full overflow-x-hidden">
      <Routes>
        <Route path="/docs/header" element={<HeaderDocs />} />
        <Route path="/docs/button" element={<ButtonDocs />} />
      </Routes>
    </div>
  );
}
