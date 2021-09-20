import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./Button.css";

const variantClasses = (variant) =>
  classNames({
    "border-transparent text-white bg-blue-400 transition hover:bg-blue-500":
      !variant || variant === "primary",
    "ring-2 ring-blue-400 text-blue-400 transition duration-150 hover:text-white hover:bg-blue-400":
      variant === "secondary",
  });

const sizeClasses = (size) =>
  classNames({
    "p-3": !size || size === "small",
    "py-3 px-4": size === "regular",
    "py-3 px-12": size === "large",
  });

const Button = ({
  variant,
  size,
  rightIcon,
  leftIcon,
  children,
  onClick,
  ...rest
}) => (
  <button
    className={`rounded-xl flex items-center justify-between ${variantClasses(
      variant
    )} ${sizeClasses(size)}`}
    onClick={onClick}
    rest
  >
    {leftIcon}
    {children}
    {rightIcon}
  </button>
);

Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary"]),
  size: PropTypes.oneOf(["small", "regular", "large"]),
  onClick: PropTypes.func,
  leftIcon: PropTypes.element,
  rightIcon: PropTypes.element,
};

export default Button;
