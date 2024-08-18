import React from "react";

export const AccordionSection = ({
  section,
  isSectionOpen,
  index,
  setActiveIndex,
}) => {
  const displayData = () => {
    if (section.items.length > 0) {
      return (
        <ul>
          {section.items.map((item, idx) => {
            return <li key={`item-${idx}`}>{item.name}</li>;
          })}
        </ul>
      );
    } else {
      return <p>No data</p>;
    }
  };

  const expandSection = () => {
    const currIndex = isSectionOpen ? null : index;
    setActiveIndex(currIndex);
  };

  return (
    <div className="acc-section">
      <div
        style={{
          backgroundColor: "#94c9f2",
          cursor: "pointer",
          padding: 2,
          color: isSectionOpen ? "red" : "",
        }}
        onClick={expandSection}
      >
        {section.name}
      </div>
      {isSectionOpen && displayData()}
    </div>
  );
};
