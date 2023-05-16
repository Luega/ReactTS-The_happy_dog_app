import React, { useContext, useEffect, useState } from "react";
import DogContext from "../../context/dog-context";
import PuppyCard from "./layout/PuppyCard";

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
    <div>
      <h1>PUPPIES</h1>
      {puppies.length !== 0 ? (
        puppies.map((puppy) => (
          <PuppyCard
            key={puppy.slug}
            puppy={puppy}
            defaultImgUrl={defaultImageUrl}
          />
        ))
      ) : (
        <h1>NO PUPPIES</h1>
      )}
    </div>
  );
};

export default Puppies;
