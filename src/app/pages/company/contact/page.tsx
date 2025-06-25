import React from "react";
import ContactBanner from "./ContactBanner";
import ContactPages from "./ContactPages";

export default function page() {
  return (
    <div className="container mx-auto ">
      <ContactBanner />
      <ContactPages />
    </div>
  );
}
