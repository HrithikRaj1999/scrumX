
import type { Metadata } from "next";
import "./globals.css";
import DashboardWrapper from "../components/Dashboard/DashboardWrapper";
import AuthProvider from "@/components/auth/AuthProvider";
export const metadata: Metadata = {
  title: " ScrumX",
  description:
    "This is a project management application where you can keep track of your project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <DashboardWrapper>{children}</DashboardWrapper>
        </AuthProvider>
      </body>
    </html>
  );
}
