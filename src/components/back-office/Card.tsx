import React, { useState, useContext } from "react";
import classes from "../../style/back-office/Card.module.css";
import { MdDelete } from "react-icons/md";
import { FaPen } from "react-icons/fa";
import DogContext from "../../context/dog-context";
import { Puppy } from "../../types";
import Button from "../Generic/Button";
import Modal from "../Generic/Modal";
import UpdatePuppy from "./form/UpdatePuppy";

type Props = {
  puppy: Puppy;
  deleted: string;
  setDeleted: (text: string) => void;
};

const Card = (props: Props) => {
  const { setModified } = useContext(DogContext);
  const [updateModal, setUpdateModal] = useState<boolean>(false);
  const [deleteModal, setDeleteModal] = useState<boolean>(false);

  const updateModalHandler = () => {
    setUpdateModal(!updateModal);
  };

  const deleteModalHandler = () => {
    setDeleteModal(!deleteModal);
  };

  const deletePuppy = async () => {
    const respText: string = await fetch(
      `http://localhost:3001/api/puppies/${props.puppy.slug}`,
      {
        method: "DELETE",
      }
    )
      .then((data) => data.json())
      .then((results) => results)
      .catch((error) => console.log(error));
    props.setDeleted(respText);
    setModified();
  };

  return (
    <div className={`${classes.card} w-3/4 p-3 flex flex-col border`}>
      <div className="card__image">
        <img src={props.puppy.image?.replaceAll("&#x2F;", "/")} alt="" />
      </div>
      <div className={`${classes.card__box}`}>
        <div>
          <h1>{props.puppy.name}</h1>
          <h3>{props.puppy.breed}</h3>
          <h4>{props.puppy.birthDate}</h4>
          <h4>{props.puppy.info}</h4>
        </div>
        <div
          className={`${classes.card__buttons} pt-4 flex justify-around items-center`}
        >
          <Button
            className={`${classes.card__buttonEdit}`}
            buttonText=""
            buttonIcon={<FaPen />}
            onClick={updateModalHandler}
          />
          {updateModal && (
            <UpdatePuppy puppy={props.puppy} handlerFn={updateModalHandler} />
          )}
          <Button
            className={`${classes.card__buttonDelete}`}
            buttonText=""
            buttonIcon={<MdDelete />}
            onClick={deleteModalHandler}
          />
          {deleteModal && (
            <Modal
              title="DELETE PUPPY"
              message="Do you want to delete this puppy?"
              onActionHandler={deletePuppy}
              onCancelHandler={deleteModalHandler}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
