import React, { FormEvent, useState } from "react";
import { Puppy, UpdateReq } from "../../../types";
import Input from "../../Generic/Input";
import UploadInput from "../../Generic/UploadInput";

type Props = {
  puppy: Puppy;
};

const UpdatePuppy = (props: Props) => {
  const [userInput, setUserInput] = useState<Puppy>({
    image: props.puppy.image ? props.puppy.image : undefined,
    breed: props.puppy.breed,
    name: props.puppy.name,
    birthDate: props.puppy.birthDate,
    info: props.puppy.info ? props.puppy.info : undefined,
  });

  const submitFormHandler = (e: FormEvent) => {
    e.preventDefault();

    let reqBody: UpdateReq = {};
    if (userInput.image) {
      reqBody = { ...reqBody, image: userInput.image };
    }
    if (props.puppy.breed !== userInput.breed) {
      reqBody = { ...reqBody, breed: userInput.breed };
    }
    if (props.puppy.name !== userInput.name) {
      reqBody = { ...reqBody, name: userInput.name };
    }
    if (props.puppy.birthDate !== userInput.birthDate) {
      reqBody = { ...reqBody, birthDate: userInput.birthDate };
    }
    if (props.puppy.info !== userInput.info) {
      reqBody = { ...reqBody, info: userInput.info };
    }

    console.log(reqBody);
    console.log(Object.keys(reqBody).length);

    if (Object.keys(reqBody).length !== 0) {
      fetch(`http://localhost:3001/api/puppies/${props.puppy.slug}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reqBody),
      })
        .then((data) => data.json())
        .then((results) => console.log(results))
        .catch((error) => console.log(error));
    }
  };

  const setImageUserInputHandler = (image: string | undefined) => {
    setUserInput((prevState) => {
      return { ...prevState, image: image };
    });
  };
  const setNameUserInputHandler = (name: string) => {
    setUserInput((prevState) => {
      return { ...prevState, name: name };
    });
  };
  const setBreedUserInputHandler = (breed: string) => {
    setUserInput((prevState) => {
      return { ...prevState, breed: breed };
    });
  };
  const setBirthDateUserInputHandler = (birthDate: string) => {
    setUserInput((prevState) => {
      return { ...prevState, birthDate: birthDate };
    });
  };
  const setInfoUserInputHandler = (info: string) => {
    setUserInput((prevState) => {
      return { ...prevState, info: info };
    });
  };

  return (
    <form onSubmit={submitFormHandler}>
      <Input
        className=""
        type="text"
        placeholder="breed"
        value={userInput.breed}
        handlerFn={(breed) => setBreedUserInputHandler(breed)}
      />
      <Input
        className=""
        type="text"
        placeholder="name"
        value={userInput.name}
        handlerFn={(name) => setNameUserInputHandler(name)}
      />
      <Input
        className=""
        type="text"
        placeholder="birthDate"
        value={userInput.birthDate}
        handlerFn={(birthDate) => setBirthDateUserInputHandler(birthDate)}
      />
      <Input
        className=""
        type="text"
        placeholder="info"
        value={userInput.info}
        handlerFn={(info) => setInfoUserInputHandler(info)}
      />
      <UploadInput
        className=""
        handlerFn={(image) => setImageUserInputHandler(image)}
        multiple={false}
        accept="image/gif, image/jpeg, image/png"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default UpdatePuppy;
