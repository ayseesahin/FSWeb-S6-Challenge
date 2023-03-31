import React, { useState } from "react";

export default function Accordeon(props) {
  const [closed, setClosed] = useState(true);
  const { children, title } = props;
  const toggle = () => setClosed(!closed);
  return (
    <div onClick={() => toggle()}>
      <div>{title}</div>
      {!closed && <div>{children}</div>}
    </div>
  );
}
