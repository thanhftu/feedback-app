import spinner from "../assets/spinner.gif";

import React from "react";

export default function Spinner() {
  return (
    <img
      src={spinner}
      alt="Loading..."
      style={{ with: "100px", margin: "auto", display: "block" }}
    />
  );
}
