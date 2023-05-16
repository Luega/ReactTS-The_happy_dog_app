import React, { useState, useEffect } from "react";
import { Puppy } from "../../../types";

type Props = {
  puppy: Puppy;
  defaultImgUrl: string;
};

const PuppyCard = (props: Props) => {
  return (
    <>
      {props.puppy.image ? (
        <img
          src={props.puppy.image?.replaceAll("&#x2F;", "/")}
          alt={props.puppy.breed}
        />
      ) : (
        <img src={props.defaultImgUrl} alt="Random dog image" />
      )}
      <h1>{props.puppy.name}</h1>
      <h3>{props.puppy.breed}</h3>
      <h4>{props.puppy.birthDate}</h4>
      {props.puppy.info && <h4>{props.puppy.info}</h4>}
    </>
  );
};

export default PuppyCard;
