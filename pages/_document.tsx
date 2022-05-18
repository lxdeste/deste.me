import { Html, Head, Main, NextScript } from "next/document";

// TODO: custom scrollbar

export default function Document() {
  return (
    <Html className="scroll-smooth">
      <Head />
      <body className="bg-gray-50 dark:bg-slate-800">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
