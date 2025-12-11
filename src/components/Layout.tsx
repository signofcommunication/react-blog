import React from "react";
import Navbar from "./Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <footer className="bg-slate-900 border-t border-slate-800 py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Jeriko Ichtus. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
