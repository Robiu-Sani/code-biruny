import React from "react";
import SupportBanner from "./SupportBanner";
import SupportPage from "./SupportPage";

export default function page() {
  return (
    <div className="container mx-auto">
      <SupportBanner />
      <SupportPage />
    </div>
  );
}
