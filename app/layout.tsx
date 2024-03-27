import { Assistant } from "next/font/google";
import "./globals.css";

const assistant = Assistant({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he">
      <body className={assistant.className}>{children}</body>
    </html>
  );
}
