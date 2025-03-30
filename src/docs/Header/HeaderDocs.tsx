import { Button } from "../../components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function HeaderDocs() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Button Component</h1>

      <section>
        <h2 className="text-xl font-semibold mb-4">Disabled State</h2>
        <p className="mb-4">
          Buttons can be disabled to indicate that an action is not available.
        </p>

        <Tabs defaultValue="preview" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
          </TabsList>

          <TabsContent value="preview" className="p-6 border rounded-md">
            <Button disabled variant="default">
              Button
            </Button>
          </TabsContent>

          <TabsContent
            value="code"
            className="p-4 bg-gray-900 text-gray-100 rounded-md overflow-x-auto"
          >
            <SyntaxHighlighter language="jsx" style={vscDarkPlus}>
              {`import { Button } from "@heroui/react";

export default function App() {
  return (
    <Button disabled variant="default">
      Button
    </Button>
  );
}`}
            </SyntaxHighlighter>
          </TabsContent>
        </Tabs>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">Regular Button</h2>
        <Tabs defaultValue="preview" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
          </TabsList>

          <TabsContent value="preview" className="p-6 border rounded-md">
            <Button variant="default">Button</Button>
          </TabsContent>

          <TabsContent
            value="code"
            className="p-4 bg-gray-900 text-gray-100 rounded-md overflow-x-auto"
          >
            <SyntaxHighlighter language="jsx" style={vscDarkPlus}>
              {`import { Button } from "@heroui/react";

export default function App() {
  return (
    <Button variant="default">
      Button
    </Button>
  );
}`}
            </SyntaxHighlighter>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
}
