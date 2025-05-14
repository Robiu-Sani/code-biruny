import { TextHoverEffect } from "components/ui/text-hover-effect";
import React from "react";

export default function ThirdSection() {
  return (
    <div>
      <TextHoverEffect
        text="Responsive Text"
        duration={0.2}
        className="my-4 mx-auto"
      />
    </div>
  );
}
