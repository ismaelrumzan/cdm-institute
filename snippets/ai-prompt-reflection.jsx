import { useState, useEffect } from "react";

export const AIPromptReflection = ({
  cardTitle = "Reflection",
  question = "What are practical examples where you can use RAG in the manufacturing industry?",
  chatgptButtonText = "Ask ChatGPT",
  claudeButtonText = "Ask Claude",
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [pageContext, setPageContext] = useState("");
  const [filePath, setFilePath] = useState("");
  const [pageURL, setPageURL] = useState("");

  // Get page context and file path when component mounts
  useEffect(() => {
    // Extract page title and content for context
    const pageTitle = document.title || "Current Page";
    const mainContent = document.querySelector("main") || document.body;
    const contentText = mainContent.innerText || mainContent.textContent || "";

    setPageContext(`Page: ${pageTitle}`);
    setPageURL(`${window.location.href}.md`);

    // Try to get the current file path from the URL or window location
    const currentPath = window.location.pathname;
    // Convert URL path to file path format
    const filePathFromUrl = currentPath.replace(/^\//, "").replace(/\/$/, "");
    setFilePath(filePathFromUrl);
  }, []);

  const handleAIToolClick = (tool) => {
    // Create the full prompt with file path and context
    const fullPrompt = `Read from ${pageURL} and then answer the question: ${question}

Context: ${pageContext}`;

    try {
      if (tool === "chatgpt") {
        // Try to open ChatGPT with the prompt
        const encodedPrompt = encodeURIComponent(fullPrompt);
        window.open(
          `https://chat.openai.com/?prompt=${encodedPrompt}`,
          "_blank"
        );
      } else if (tool === "claude") {
        // Try to open Claude with the prompt
        const encodedPrompt = encodeURIComponent(fullPrompt);
        window.open(`https://claude.ai?q=${encodedPrompt}`, "_blank");
      }
    } catch (error) {
      console.error("Error opening AI tool:", error);
      // Fallback: copy to clipboard
      if (navigator.clipboard) {
        navigator.clipboard.writeText(fullPrompt).then(() => {
          alert(
            `Prompt copied to clipboard! You can now paste it into ${
              tool === "chatgpt" ? "ChatGPT" : "Claude"
            }.`
          );
        });
      } else {
        // Final fallback: show the prompt in an alert
        alert(
          `Prompt for ${
            tool === "chatgpt" ? "ChatGPT" : "Claude"
          }: ${fullPrompt}`
        );
      }
    }
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Card title={cardTitle} icon="brain" horizontal>
      {question}
      <div className="flex space-x-3 py-2">
        <button
          onClick={() => handleAIToolClick("chatgpt")}
          className="flex-1 flex items-center justify-center space-x-2 px-4 py-3 border border-green-600 rounded-lg transition-colors">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142-.0852 4.783-2.7582a.7712.7712 0 0 0 .7806 0l5.8428 3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
          </svg>
          <span>{chatgptButtonText}</span>
        </button>

        <button
          onClick={() => handleAIToolClick("claude")}
          className="flex-1 flex items-center justify-center space-x-2 px-4 py-3 border border-orange-600 rounded-lg transition-colors">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
          </svg>
          <span>{claudeButtonText}</span>
        </button>
      </div>
    </Card>
  );
};
