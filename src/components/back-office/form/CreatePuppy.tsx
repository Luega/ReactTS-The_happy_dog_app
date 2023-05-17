import React, { FormEvent, useContext, useState } from "react";
import classes from "../../../style/Generic/Modal-Form.module.css";
import DogContext from "../../../context/dog-context";
import { Puppy } from "../../../types";
import Input from "../../Generic/Input";
import UploadInput from "../../Generic/UploadInput";

type Props = {
  handlerFn: () => void;
};

const CreatePuppy = (props: Props) => {
  const { setModified } = useContext(DogContext);
  const [userInput, setUserInput] = useState<Puppy>({
    image: null,
    breed: "",
    name: "",
    birthDate: "",
    info: null,
  });

  const submitFormHandler = async (e: FormEvent) => {
    e.preventDefault();

    console.log(userInput);

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
        image: null,
        breed: "",
        name: "",
        birthDate: "",
        info: null,
      };
    });
    setModified();
    props.handlerFn();
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
    <>
      <div onClick={props.handlerFn} className="my_Backdrop" />
      <form
        onSubmit={submitFormHandler}
        className={`${classes.modal} my_Modal`}
      >
        <h1>CREATE NEW PUPPY</h1>
        <label>Breed:</label>
        <Input
          className=""
          type="text"
          placeholder="breed"
          value={userInput.breed}
          handlerFn={(breed) => setBreedUserInputHandler(breed)}
        />
        <label>Name:</label>
        <Input
          className=""
          type="text"
          placeholder="name"
          value={userInput.name}
          handlerFn={(name) => setNameUserInputHandler(name)}
        />
        <label>Birth Date:</label>
        <Input
          className=""
          type="text"
          placeholder="birthDate"
          value={userInput.birthDate}
          handlerFn={(birthDate) => setBirthDateUserInputHandler(birthDate)}
        />
        <label>Info:</label>
        <Input
          className=""
          type="text"
          placeholder="info"
          value={userInput.info}
          handlerFn={(info) => setInfoUserInputHandler(info)}
        />
        <label>Info:</label>
        <UploadInput
          className=""
          handlerFn={(image) => setImageUserInputHandler(image)}
          multiple={false}
          accept="image/gif, image/jpeg, image/png"
        />
        <div className={`${classes.modal__buttons}`}>
          <button type="submit">Submit</button>
          <button onClick={props.handlerFn}>Back</button>
        </div>
      </form>
    </>
  );
};

export default CreatePuppy;
