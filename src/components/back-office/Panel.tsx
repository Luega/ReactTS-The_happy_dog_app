import React, { useState, useContext } from "react";
import DogContext from "../../context/dog-context";
import Card from "./Card";

const Panel = () => {
  const context = useContext(DogContext);

  return (
    <div className="flex flex-col items-center">
      {context.puppies.length !== 0 ? (
        context.puppies.map((puppy, index) => (
          <Card key={puppy.slug} puppy={puppy} />
        ))
      ) : (
        <h2>NO PUPPIES</h2>
      )}
    </div>
  );
};

export default Panel;
