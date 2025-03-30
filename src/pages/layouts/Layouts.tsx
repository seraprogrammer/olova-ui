import { Routes, Route } from "react-router-dom";
import HeaderDocs from "../../docs/Header/HeaderDocs";

export default function Layouts() {
  return (
    <Routes>
      <Route path="/docs/header" element={<HeaderDocs />} />
    </Routes>
  );
}
