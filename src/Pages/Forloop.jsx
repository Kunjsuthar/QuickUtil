import React from "react";
import { useState } from "react";

const names = ['James', 'Paul', 'John', 'George', 'Ringo'];

function ForLoop() {
  return (
    <div>
      {names.map(name => (
        <li>
          {name}
        </li>
      ))}
    </div>
  );
}
export default ForLoop;