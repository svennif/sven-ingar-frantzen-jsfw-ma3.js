import React from "react";

function HomeContent(props) {
  return (
    <div>
      <p>{props.children}</p>
    </div>
  );
}

export default HomeContent;
