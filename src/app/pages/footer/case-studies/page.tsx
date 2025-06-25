import React from "react";
import CaseStudiosPage from "./CaseStudiosPage";
import CaseStudioBanner from "./CaseStudioBanner";

export default function page() {
  return (
    <div className="container mx-auto ">
      <CaseStudioBanner />
      <CaseStudiosPage />
    </div>
  );
}
