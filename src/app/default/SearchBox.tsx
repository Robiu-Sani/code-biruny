/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

export default function SearchBox({ toggleSearch }: any) {
  return (
    <div
      onClick={toggleSearch}
      className="fixed top-0 z-[501] bg-background/70 backdrop-blur-sm left-0 w-full min-h-screen flex justify-center items-center"
    >
      SearchBox
    </div>
  );
}
