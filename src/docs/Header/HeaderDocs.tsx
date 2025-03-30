import Header from "./HeaderOne/Header";
import { CodeExample } from "../../Template/template";

export default function HeaderDocs() {
  return (
    <div className="space-y-6 w-full max-w-full overflow-hidden">
      <h1 className="text-3xl font-bold">Button Component</h1>
      <div className="w-full max-w-full overflow-hidden">
        <CodeExample
          title="Regular Button"
          preview={<Header />}
          codePath="/src/docs/Header/HeaderOne/Header.md"
        />
      </div>
    </div>
  );
}
