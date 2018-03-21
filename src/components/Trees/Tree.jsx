import Node from "./Node";
import React from "react";

const buildTree = tree => (
  <Node
      bodyText={tree.bodyText}
      key={`treeNode${tree.name}`}
      name={tree.name}
    >
      { tree.children.map(node => buildTree(node)) }
    </Node>
  ),
  Tree = ({tree}) => (
    <main className="col-md-8 offset-md-2">
      <h1>
        {"Tree!"}
      </h1>
      { buildTree(tree) }
    </main>
  );

export default Tree;
