import React, { useState, useContext } from "react";
import DogContext from "../../context/dog-context";
import Card from "./Card";

const Panel = () => {
  const context = useContext(DogContext);

  return (
    <div className="flex flex-col">
      {context.puppies.length !== 0 ? (
        context.puppies.map((puppy, index) => (
          <div key={puppy.slug} className="p-3">
            <h2>{index + 1}</h2>
            <Card puppy={puppy} />
          </div>
        ))
      ) : (
        <h2>NO PUPPIES</h2>
      )}
    </div>
  );
};

export default Panel;
