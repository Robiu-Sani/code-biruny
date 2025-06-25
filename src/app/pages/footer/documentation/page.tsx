import React from "react";
import Documentation from "./Documentation";
import DocumentationBanner from "./DocumentationBanner";

export default function page() {
  return (
    <div>
      <DocumentationBanner />
      <Documentation />
    </div>
  );
}
