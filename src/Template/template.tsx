import React, { useEffect, useState } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

// Reusable component for code examples in a UI library
const CodeExample = ({
  title,
  description,
  preview,
  code,
  codePath,
  defaultTab = "preview",
  language = "jsx",
}: {
  title: string;
  description?: string;
  preview: React.ReactNode;
  code?: string;
  codePath?: string;
  defaultTab?: "preview" | "code";
  language?: string;
}) => {
  const [codeContent, setCodeContent] = useState<string>("");
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState(defaultTab);

  useEffect(() => {
    // If code is directly provided, use it
    if (code) {
      setCodeContent(code);
      return;
    }

    // Otherwise fetch from codePath if provided
    if (codePath) {
      fetch(codePath)
        .then((response) =>
          response.ok
            ? response.text()
            : Promise.reject(`Failed to load: ${response.statusText}`)
        )
        .then((text) => {
          // Extract code blocks from markdown if it's a markdown file
          if (codePath.endsWith(".md")) {
            // Look for code blocks with ```jsx or ```tsx or any specified language
            const codeBlockRegex = new RegExp(
              `\`\`\`(${language}|jsx|tsx)[\\s\\S]*?\`\`\``,
              "g"
            );
            const codeBlocks = text.match(codeBlockRegex);

            if (codeBlocks && codeBlocks.length > 0) {
              // Extract the content from the first code block (without the backticks and language identifier)
              const extractedCode = codeBlocks[0]
                .replace(new RegExp(`^\`\`\`(${language}|jsx|tsx)\\s*`, ""), "")
                .replace(/```\s*$/, "")
                .trim();

              setCodeContent(extractedCode);
            } else {
              setCodeContent("// No code blocks found in the markdown file");
            }
          } else {
            // Process the text to ensure it doesn't have extremely long lines
            const processedText = text
              .split("\n")
              .map((line) =>
                line.length > 100 ? line.substring(0, 100) + "..." : line
              )
              .join("\n");
            setCodeContent(processedText);
          }
        })
        .catch((error) => {
          console.error("Error loading code example:", error);
          setCodeContent("// Error loading code example");
        });
    } else {
      setCodeContent("// No code provided");
    }
  }, [codePath, language, code]);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Create a wrapper component for the preview content
  const PreviewWrapper = () => {
    // Use state to force re-renders
    const [, forceUpdate] = useState({});

    // Set up event listeners for collapsible content
    useEffect(() => {
      const handleCollapse = () => {
        // Force a re-render when collapse events happen
        forceUpdate({});
      };

      // Listen for events that might indicate collapsible content changes
      window.addEventListener("click", handleCollapse);
      window.addEventListener("keydown", handleCollapse);
      window.addEventListener("transitionend", handleCollapse);

      return () => {
        window.removeEventListener("click", handleCollapse);
        window.removeEventListener("keydown", handleCollapse);
        window.removeEventListener("transitionend", handleCollapse);
      };
    }, []);

    return <div className="w-full">{preview}</div>;
  };

  return (
    <div className="w-full mb-12 max-w-full overflow-hidden border border-border rounded-lg shadow-sm">
      <div className="p-4 border-b border-border bg-card/50">
        <h2 className="text-xl font-semibold">{title}</h2>
        {description && (
          <p className="mt-2 text-muted-foreground">{description}</p>
        )}
      </div>

      <Tabs
        defaultValue={defaultTab}
        className="w-full max-w-full"
        onValueChange={(value) => {
          setActiveTab(value as "preview" | "code");
        }}
      >
        <div className="flex items-center justify-between px-4 py-2 border-b border-border">
          <TabsList className="h-9">
            <TabsTrigger value="preview" className="text-sm">
              Preview
            </TabsTrigger>
            <TabsTrigger value="code" className="text-sm">
              Code
            </TabsTrigger>
          </TabsList>

          {activeTab === "code" && (
            <button
              onClick={handleCopyCode}
              className="flex items-center gap-1.5 text-xs bg-primary/10 hover:bg-primary/20 text-primary px-2.5 py-1.5 rounded-md transition-colors"
              title="Copy code"
            >
              {copied ? (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      x="9"
                      y="9"
                      width="13"
                      height="13"
                      rx="2"
                      ry="2"
                    ></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg>
                  <span>Copy code</span>
                </>
              )}
            </button>
          )}
        </div>

        <TabsContent
          value="preview"
          className="p-6 flex items-center justify-center bg-background/50 overflow-auto max-h-[700px]"
        >
          {/* Use the wrapper component instead of direct rendering */}
          {activeTab === "preview" && <PreviewWrapper />}
        </TabsContent>

        <TabsContent value="code" className="relative max-w-full">
          <div className="bg-gray-900 text-gray-100 rounded-none p-0 overflow-hidden max-w-full">
            <div className="max-h-[400px] overflow-auto max-w-full">
              <SyntaxHighlighter
                language={language}
                style={vscDarkPlus}
                customStyle={{
                  margin: 0,
                  padding: "1rem",
                  fontSize: "0.9rem",
                  lineHeight: 1.5,
                  borderRadius: 0,
                  maxWidth: "100%",
                  overflowX: "hidden",
                  wordBreak: "break-all",
                }}
                wrapLongLines={true}
                showLineNumbers={true}
                lineProps={{
                  style: { whiteSpace: "pre-wrap", wordBreak: "break-all" },
                }}
              >
                {codeContent}
              </SyntaxHighlighter>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export { CodeExample };
