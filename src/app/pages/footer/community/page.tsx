import React from "react";
import CommunityBanner from "./CommunityBanner";
import Community from "./Community";

export default function page() {
  return (
    <div className="container mx-auto">
      <CommunityBanner />
      <Community />
    </div>
  );
}
