import React, { useState } from "react";
import { AccordionSection } from "./AccordionSection";

export const Accordion = ({ sections }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      {sections.map((section, idx) => {
        return (
          <AccordionSection
            key={`section-${idx}`}
            section={section}
            isSectionOpen={idx === activeIndex}
            index={idx}
            setActiveIndex={setActiveIndex}
          />
        );
      })}
    </div>
  );
};
