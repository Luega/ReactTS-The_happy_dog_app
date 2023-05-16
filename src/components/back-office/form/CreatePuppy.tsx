import React, { FormEvent, useContext, useState } from "react";
import DogContext from "../../../context/dog-context";
import { Puppy } from "../../../types";
import Input from "../../Generic/Input";
import UploadInput from "../../Generic/UploadInput";

const CreatePuppy = () => {
  const { setModified } = useContext(DogContext);
  const [userInput, setUserInput] = useState<Puppy>({
    image: undefined,
    breed: "",
    name: "",
    birthDate: "",
    info: undefined,
  });

  const submitFormHandler = async (e: FormEvent) => {
    e.preventDefault();

    await fetch("http://localhost:3001/api/puppies/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInput),
    })
      .then((data) => data.json())
      .then((results) => console.log(results))
      .catch((error) => console.log(error));
    setUserInput((prevState) => {
      return {
        ...prevState,
        image: "",
        breed: "",
        name: "",
        birthDate: "",
        info: "",
      };
    });
    setModified();
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

export default CreatePuppy;
