import React, { useState, useContext, useEffect } from "react";
import classes from "../../style/back-office/Backoffice.module.css";
import DogContext from "../../context/dog-context";
import Card from "./Card";

const Panel = () => {
  const context = useContext(DogContext);
  const [deleted, setDeleted] = useState<string>("");
  const [deletedBol, setDeletedBol] = useState<boolean>(false);

  const displayDeletedHandler = (text: string) => {
    setDeleted(text);
  };

  useEffect(() => {
    setDeletedBol(true);
    const timeOut = setTimeout(() => {
      setDeletedBol(false);
      setDeleted("");
    }, 1000);

    return () => {
      clearTimeout(timeOut);
    };
  }, [deleted]);

  return (
    <div className="flex flex-col items-center md:flex-row md:flex-wrap">
      {deletedBol && <p className={`${classes.deleted_info}`}>{deleted}</p>}
      {context.puppies.length !== 0 ? (
        context.puppies.map((puppy, index) => (
          <Card
            key={puppy.slug}
            puppy={puppy}
            deleted={deleted}
            setDeleted={displayDeletedHandler}
          />
        ))
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default Panel;
