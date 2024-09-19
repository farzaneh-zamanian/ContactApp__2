import React from "react";

function StyledDiv({children, title}) {
  const styles = { border: "2px solid black", padding:"2rem"
   };
  return <div style={styles}>
      <h3>{title}</h3>
      {children}</div>;
}

export default StyledDiv;
