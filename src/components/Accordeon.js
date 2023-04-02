import { useState } from "react";
import React from "react";

function Accordeon(props) {
  const [closed, setClosed] = useState(true);
  const { children, title } = props;
  const toggle = () => setClosed(!closed);
  return (
    <div className="accordeon">
      <div className="acordeon__title" onClick={() => toggle()}>
        {title}
      </div>
      {!closed && <div className="accorddeon__detail">{children}</div>}
    </div>
  );
}

export default Accordeon;
