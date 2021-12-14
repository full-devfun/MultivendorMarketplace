import React from "react";

const ResponsiveImage = ({ small, medium, large, alt }) => (
  <img
    alt={alt}
    src={small}
    srcSet={`${small} 300w, ${medium} 768w, ${large} 1280w`}
  />
);

export default ResponsiveImage;
