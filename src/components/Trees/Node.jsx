import React from "react";

const Node = ({name, bodyText, children}) => {
  return (
    <div>
      <h3>
        { name }
      </h3>
      { bodyText && bodyText.length > 0 &&
          bodyText.map(paragraph => (
            <p key={`bodyTextP${name}`}>
              {paragraph}
            </p>
          ))
      }
      {
        (children.length > 0) && (
          <ul>
            { children.map(node => (
              <li>
                {node}
              </li>
            )) }
          </ul>
        )
      }
    </div>
  );
};

export default Node;
