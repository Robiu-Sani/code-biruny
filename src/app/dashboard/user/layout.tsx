import React from "react";

export default function UserDashboardlayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="w-full h-screen">{children}</div>;
}
