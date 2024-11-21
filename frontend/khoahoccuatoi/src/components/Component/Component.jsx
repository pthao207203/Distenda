import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Component = ({
  label = "About Us",
  property1,
  className,
  divClassName,
}) => {
  return (
    <div className={`component ${className}`}>
      <div className={`about-us ${divClassName}`}>{label}</div>
    </div>
  );
};

Component.propTypes = {
  label: PropTypes.string,
  property1: PropTypes.oneOf(["frame-65", "variant-2", "variant-3"]),
};
