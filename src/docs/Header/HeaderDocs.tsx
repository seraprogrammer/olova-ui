import Header from "./HeaderOne/Header";
import HeaderTwo from "./HeaderTwo/HeaderTwo";
import HeaderThree from "./HeaderThree/HeaderThree";
import { HeaderOne } from "./HeaderOne/code";
import { HeaderTwoCode } from "./HeaderTwo/code";
import { HeaderThreeCode } from "./HeaderThree/code";
import  HeaderFour  from "./HeaderFour/HeaderFour";
import { HeaderFourCode } from "./HeaderFour/HeaderFourCode";
import { CodeExample } from "../../Template/template";

export default function HeaderDocs() {
  return (
    <div className="space-y-6 w-full max-w-full overflow-hidden">
      <h1 className="text-3xl font-bold">🚀 Header Component 🎨</h1>
      <div className="w-full max-w-full overflow-hidden">
        <CodeExample
          title="🏠 Header One - Classic Navigation Design 🎨"
          preview={<Header />}
          code={HeaderOne}
        />
        <CodeExample
          title="🚀 Header Two - Modern Responsive Layout ✨"
          preview={<HeaderTwo />}
          code={HeaderTwoCode}
        />
        <CodeExample
          title="🚀 Header Three - Modern Responsive Layout ✨"
          preview={<HeaderThree />}
          code={HeaderThreeCode}
        />
        <CodeExample
          title="🚀 Header Four - Modern Responsive Layout ✨"
          preview={<HeaderFour />}
          code={HeaderFourCode}
        />
      </div>
    </div>
  );
}
