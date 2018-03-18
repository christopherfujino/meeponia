import React from "react";

const Node = ({name, children}) => {
  return (
    <div>
      <p>
        { name }
      </p>
      {
        (children.length > 0) && (
          <ul>
            { children.map(node => (
              <li key={`treeNodeListElement${node.name}`}>
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
