import React, { useContext } from "react";
import DogContext from "../../context/dog-context";

const Panel = () => {
  const context = useContext(DogContext);
  console.log(context.puppies);

  return (
    <div className="flex flex-col">
      {context.puppies.map((puppy, index) => (
        <div key={puppy.slug} className="p-3">
          <h2>{index + 1}</h2>
          <h1>{puppy.name}</h1>
          <h3>{puppy.breed}</h3>
          <h4>{puppy.birthDate}</h4>
        </div>
      ))}
    </div>
  );
};

export default Panel;
