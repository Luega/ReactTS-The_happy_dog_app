import React, { useState, useEffect } from "react";
import classes from "../../style/front-office/puppies.module.css";
import { Puppy } from "../../types";

type Props = {
  puppy: Puppy;
  defaultImgUrl: string;
};

const PuppyCard = (props: Props) => {
  return (
    <div className="p-4 sm:w-1/2 md:w-1/3 lg:w-1/4">
      <div className={`${classes.card} p-4 border`}>
        {props.puppy.image ? (
          <img
            src={props.puppy.image?.replaceAll("&#x2F;", "/")}
            alt={props.puppy.breed}
          />
        ) : (
          <img
            className="opacity-50"
            src={props.defaultImgUrl}
            alt="Random dog image"
          />
        )}
        <h1 className="mt-4 text-2xl font-bold">{props.puppy.name}</h1>
        <h3 className="text-lg font-medium">{props.puppy.breed}</h3>
        <h4 className="font-light text-xs">{props.puppy.birthDate}</h4>
        {props.puppy.info && (
          <h4 className="mt-3 text-sm">{props.puppy.info}</h4>
        )}
      </div>
    </div>
  );
};

export default PuppyCard;
