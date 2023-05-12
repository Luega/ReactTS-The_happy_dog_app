import React, { PropsWithChildren, useEffect, useState } from "react";
import { Puppies } from "../types";

type DogContext = {
  puppies: Puppies;
};

const DogContext = React.createContext<DogContext>({ puppies: [] });

export const DogContextProvider = (props: PropsWithChildren) => {
  const [state, setState] = useState<Puppies>([]);

  useEffect(() => {
    const getData = async () => {
      await fetch("http://localhost:3001/api/puppies/")
        .then((data) => data.json())
        .then((results) => setState(results))
        .catch((error) => console.log(error));
    };

    getData();

    return () => {};
  }, []);

  return (
    <DogContext.Provider value={{ puppies: state }}>
      {props.children}
    </DogContext.Provider>
  );
};

export default DogContext;
