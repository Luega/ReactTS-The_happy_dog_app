import { useContext } from "react";
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import classes from "../../../style/Generic/Modal-Form.module.css";
import DogContext from "../../../context/dog-context";
import { Puppy } from "../../../types";
import Input from "../../Generic/Input";
import UploadInput from "../../Generic/UploadInput";
import convertBase64 from "../../../utils/convertBase64";

type Props = {
  handlerFn: () => void;
};

const CreatePuppy = (props: Props) => {
  const { setModified } = useContext(DogContext);
  const methods = useForm();

  const onSubmit = methods.handleSubmit(async (data) => {
    const imgBase64: string | null = await convertBase64(data["Image:"]);

    const puppy: Puppy = {
      image: imgBase64 ? imgBase64 : null,
      breed: data["Breed:"],
      name: data["Name:"],
      birthDate: data["Date of birth:"],
      info: data["Details:"] ? data["Details:"] : null,
    };

    await fetch("http://localhost:3001/api/puppies/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(puppy),
    })
      .then((data) => data.json())
      .then((results) => console.log(results))
      .catch((error) => console.log(error));

    setModified();
    props.handlerFn();
  });

  return (
    <FormProvider {...methods}>
      <div onClick={props.handlerFn} className="my_Backdrop" />
      <form
        onSubmit={(e) => e.preventDefault()}
        noValidate
        autoComplete="off"
        className={`${classes.modal} my_Modal`}
      >
        <h1>CREATE NEW PUPPY</h1>
        <Input
          label="Breed:"
          name="Breed:"
          id="breed"
          type="text"
          className=""
          placeholder="Breed..."
          validation={{
            required: {
              value: true,
              message: "Required",
            },
            pattern: {
              value: /^[a-zA-Z]+$/,
              message: "Only characters are allowed",
            },
          }}
        />
        <Input
          label="Name:"
          name="Name:"
          id="name"
          type="text"
          className=""
          placeholder="Name..."
          validation={{
            required: {
              value: true,
              message: "Required",
            },
            pattern: {
              value: /^[a-zA-Z]+$/,
              message: "Only characters are allowed",
            },
          }}
        />
        <Input
          label="Date of birth:"
          name="Date of birth:"
          id="birthDate"
          type="text"
          className=""
          placeholder="YYYY-MM-DD"
          validation={{
            required: {
              value: true,
              message: "Required",
            },
            pattern: {
              value:
                /^(?:2[0-9]{3})-(?:0[1-9]|1[0-2])-(?:0[1-9]|[12][0-9]|3[01])$$/,
              message: "Must have year between 2000-2999 and format YYYY-MM-DD",
            },
          }}
        />
        <Input
          label="Details:"
          name="Details:"
          id="info"
          type="text"
          className=""
          placeholder="About..."
          validation={{
            pattern: {
              value: /[a-zA-Z]+/,
              message: "Must have at list one character.",
            },
            maxLength: {
              value: 255,
              message: "Must be max 255 characters",
            },
          }}
        />
        <UploadInput
          label="Image:"
          name="Image:"
          id="image"
          type="file"
          className=""
          multiple={false}
          accept="image/gif, image/jpeg, image/png"
          validation={{}}
        />
        <div className={`${classes.modal__buttons}`}>
          <button onClick={onSubmit}>Submit</button>
          <button onClick={props.handlerFn}>Cancel</button>
        </div>
      </form>
    </FormProvider>
  );
};

export default CreatePuppy;
