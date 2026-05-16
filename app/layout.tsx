import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MenuCalCheck – FDA Calorie Labeling Compliance",
  description: "Verify restaurant menu calorie labeling compliance with FDA requirements. Scan menus, flag violations, and get corrective action recommendations."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="f08dccc7-427f-4f04-b777-7548b6162dff"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
