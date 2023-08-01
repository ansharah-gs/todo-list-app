import React from "react";

export default function Header(props) {
  // function Header({ children, className }) {
  // destructuring properties
  const { children, ...extra } = props;
  return (
    // <header className={className}>
    //    { children }  </header>
    <header {...extra}>{children}</header>
  );
}
// }
