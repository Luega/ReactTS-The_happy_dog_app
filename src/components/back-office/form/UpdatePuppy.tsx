import { useContext } from "react";
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import classes from "../../../style/Generic/Modal-Form.module.css";
import DogContext from "../../../context/dog-context";
import { Puppy } from "../../../types";
import Input from "../../Generic/Input";
import UploadInput from "../../Generic/UploadInput";
import convertBase64 from "../../../utils/convertBase64";

type Props = {
  puppy: Puppy;
  handlerFn: () => void;
};

const UpdatePuppy = (props: Props) => {
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

    await fetch(`http://localhost:3001/api/puppies/${props.puppy.slug}`, {
      method: "PUT",
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
        <h1>UPDATE PUPPY</h1>
        <Input
          label="Breed:"
          name="Breed:"
          id="breed"
          type="text"
          className=""
          placeholder={props.puppy.breed}
          validation={{
            required: {
              value: true,
              message: "required",
            },
          }}
        />
        <Input
          label="Name:"
          name="Name:"
          id="name"
          type="text"
          className=""
          placeholder={props.puppy.name}
          validation={{
            required: {
              value: true,
              message: "required",
            },
          }}
        />
        <Input
          label="Date of birth:"
          name="Date of birth:"
          id="birthDate"
          type="text"
          className=""
          placeholder={props.puppy.birthDate}
          validation={{
            required: {
              value: true,
              message: "required",
            },
          }}
        />
        <Input
          label="Details:"
          name="Details:"
          id="info"
          type="text"
          className=""
          placeholder={props.puppy.info ? props.puppy.info : "About..."}
          validation={{
            required: {
              value: true,
              message: "required",
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
          validation={{
            required: {
              value: true,
              message: "required",
            },
          }}
        />
        <div className={`${classes.modal__buttons}`}>
          <button onClick={onSubmit}>Submit</button>
          <button onClick={props.handlerFn}>Back</button>
        </div>
      </form>
    </FormProvider>
  );
};

export default UpdatePuppy;

// import React, { FormEvent, useState, useContext } from "react";
// import classes from "../../../style/Generic/Modal-Form.module.css";
// import DogContext from "../../../context/dog-context";
// import { Puppy, UpdateReq } from "../../../types";
// import Input from "../../Generic/Input";
// import UploadInput from "../../Generic/UploadInput";

// type Props = {
//   puppy: Puppy;
//   handlerFn: () => void;
// };

// const UpdatePuppy = (props: Props) => {
//   const { setModified } = useContext(DogContext);
//   const [userInput, setUserInput] = useState<Puppy>({
//     image: props.puppy.image ? props.puppy.image : null,
//     breed: props.puppy.breed,
//     name: props.puppy.name,
//     birthDate: props.puppy.birthDate,
//     info: props.puppy.info ? props.puppy.info : null,
//   });

//   const submitFormHandler = async (e: FormEvent) => {
//     e.preventDefault();

//     let reqBody: UpdateReq = {};
//     if (userInput.image) {
//       reqBody = { ...reqBody, image: userInput.image };
//     }
//     if (props.puppy.breed !== userInput.breed) {
//       reqBody = { ...reqBody, breed: userInput.breed };
//     }
//     if (props.puppy.name !== userInput.name) {
//       reqBody = { ...reqBody, name: userInput.name };
//     }
//     if (props.puppy.birthDate !== userInput.birthDate) {
//       reqBody = { ...reqBody, birthDate: userInput.birthDate };
//     }
//     if (props.puppy.info !== userInput.info || props.puppy.info !== null) {
//       reqBody = { ...reqBody, info: userInput.info };
//     }

//     console.log(reqBody);

//     if (Object.keys(reqBody).length !== 0) {
//       await fetch(`http://localhost:3001/api/puppies/${props.puppy.slug}`, {
//         method: "PUT",
//         headers: {
//           Accept: "application/json",
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(reqBody),
//       })
//         .then((data) => data.json())
//         .then((results) => console.log(results))
//         .catch((error) => console.log(error));
//       setModified();
//     }
//   };

//   const setImageUserInputHandler = (image: string | undefined) => {
//     setUserInput((prevState) => {
//       return { ...prevState, image: image };
//     });
//   };
//   const setNameUserInputHandler = (name: string) => {
//     setUserInput((prevState) => {
//       return { ...prevState, name: name };
//     });
//   };
//   const setBreedUserInputHandler = (breed: string) => {
//     setUserInput((prevState) => {
//       return { ...prevState, breed: breed };
//     });
//   };
//   const setBirthDateUserInputHandler = (birthDate: string) => {
//     setUserInput((prevState) => {
//       return { ...prevState, birthDate: birthDate };
//     });
//   };
//   const setInfoUserInputHandler = (info: string) => {
//     setUserInput((prevState) => {
//       return { ...prevState, info: info };
//     });
//   };

//   return (
//     <>
//       <div onClick={props.handlerFn} className="my_Backdrop" />
//       <form
//         onSubmit={submitFormHandler}
//         className={`${classes.modal} my_Modal`}
//       >
//         <h1>UPDATE PUPPY</h1>
//         <label>Breed:</label>
//         <Input
//           className=""
//           type="text"
//           placeholder="breed"
//           value={userInput.breed}
//           handlerFn={(breed) => setBreedUserInputHandler(breed)}
//         />
//         <label>Name:</label>
//         <Input
//           className=""
//           type="text"
//           placeholder="name"
//           value={userInput.name}
//           handlerFn={(name) => setNameUserInputHandler(name)}
//         />
//         <label>Birth Date:</label>
//         <Input
//           className=""
//           type="text"
//           placeholder="birthDate"
//           value={userInput.birthDate}
//           handlerFn={(birthDate) => setBirthDateUserInputHandler(birthDate)}
//         />
//         <label>Info:</label>
//         <Input
//           className=""
//           type="text"
//           placeholder="info"
//           value={userInput.info}
//           handlerFn={(info) => setInfoUserInputHandler(info)}
//         />
//         <label>Info:</label>
//         <UploadInput
//           className=""
//           handlerFn={(image) => setImageUserInputHandler(image)}
//           multiple={false}
//           accept="image/gif, image/jpeg, image/png"
//         />
//         <div className={`${classes.modal__buttons}`}>
//           <button type="submit">Submit</button>
//           <button onClick={props.handlerFn}>Back</button>
//         </div>
//       </form>
//     </>
//   );
// };

// export default UpdatePuppy;
