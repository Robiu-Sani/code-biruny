import React from "react";

export default function AdminDashboardlayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full h-screen absolute top-0 left-0 z-[1000] bg-white dark:bg-zinc-950 flex">
      {children}
    </div>
  );
}
