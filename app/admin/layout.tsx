import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode, Suspense } from "react";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import Footer from "../components/footer";
import Users from "../components/users";
import Posts from "../components/posts";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function AdminLayout({
  children,
  posts,
  users,
}: Readonly<{
  children: ReactNode;
  users: ReactNode;
  posts: ReactNode;
}>) {
  const isUserPermession = true;

  return (
    <div className="flex flex-col h-full  ">
      <Header />
      <div className="flex flex-1 bg-slate-100">
        <Sidebar />

        <main className="flex-1 p-7">
          {children}
          <Suspense
            fallback={<h2 className="text-green-400">Loading posts</h2>}
          >
            {posts}
          </Suspense>

          <Suspense
            fallback={<h2 className="text-green-400">Loading users</h2>}
          >
            {isUserPermession ? (
              users
            ) : (
              <span className="text-gray-700 text-lg">
                you don&apos;t have permession
              </span>
            )}
          </Suspense>
        </main>
      </div>
      <Footer />
    </div>
  );
}
