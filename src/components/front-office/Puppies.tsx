import React, { useContext, useEffect, useState } from "react";
import classes from "../../style/front-office/puppies.module.css";
import DogContext from "../../context/dog-context";
import PuppyCard from "./PuppyCard";

const Puppies = () => {
  const { puppies } = useContext(DogContext);
  const [defaultImageUrl, setDefaultImageUrl] = useState<string>("");

  useEffect(() => {
    const getRandomImage = async () => {
      await fetch(
        "https://api.unsplash.com/photos/random?per_page=1&query=dog",
        {
          method: "GET",
          headers: {
            Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_CLIENTID}`,
          },
        }
      )
        .then((data) => data.json())
        .then((results) => setDefaultImageUrl(results.urls.regular))
        .catch((error) => console.log(error));
    };

    getRandomImage();

    return () => {};
  }, []);

  return (
    <div
      className={`${classes.puppiesContainer} min-h-screen py-8 px-20 flex flex-wrap`}
    >
      {puppies.length !== 0 ? (
        puppies.map((puppy) => (
          <PuppyCard
            key={puppy.slug}
            puppy={puppy}
            defaultImgUrl={defaultImageUrl}
          />
        ))
      ) : (
        <h1 className="text-2xl bold">Loading...</h1>
      )}
    </div>
  );
};

export default Puppies;
