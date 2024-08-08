import React from "react";

const SummaryPreview = ({ resumeInfo }) => {
  return <p className="text-center">{resumeInfo?.summary}</p>;
};

export default SummaryPreview;
