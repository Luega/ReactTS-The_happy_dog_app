import React, { PropsWithChildren, useEffect, useState } from "react";
import { Puppies } from "../types";

type DogContext = {
  puppies: Puppies;
  modified: boolean;
  setModified: () => void;
};

const DogContext = React.createContext<DogContext>({
  puppies: [],
  modified: false,
  setModified: () => {},
});

export const DogContextProvider = (props: PropsWithChildren) => {
  const [state, setState] = useState<Puppies>([]);
  const [modified, setModified] = useState<boolean>(false);

  useEffect(() => {
    const getData = async () => {
      await fetch("http://localhost:3001/api/puppies/")
        .then((data) => data.json())
        .then((results) => setState(results))
        .catch((error) => console.log(error));
    };

    getData();

    return () => {};
  }, [modified]);

  const modifiedHandler = () => {
    setModified(!modified);
  };

  return (
    <DogContext.Provider
      value={{
        puppies: state,
        modified: modified,
        setModified: () => modifiedHandler(),
      }}
    >
      {props.children}
    </DogContext.Provider>
  );
};

export default DogContext;
