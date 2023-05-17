import classes from "../../style/Generic/Modal-Form.module.css";
import Button from "./Button";

type Props = {
  title: string;
  message: string;
  onActionHandler: () => void;
  onCancelHandler: () => void;
};

const DecisionModal = (props: Props) => {
  return (
    <div>
      <div className="my_Backdrop" onClick={props.onCancelHandler} />
      <div className={`${classes.modal} my_Modal`}>
        <div className={`${classes.modal__info}`}>
          <h1>{props.title}</h1>
          <p>{props.message}</p>
        </div>
        <div className={`${classes.modal__buttons}`}>
          <Button
            className=""
            onClick={props.onActionHandler}
            buttonText={"Confirm"}
            buttonIcon=""
          />
          <Button
            className=""
            onClick={props.onCancelHandler}
            buttonText={"Cancel"}
            buttonIcon=""
          />
        </div>
      </div>
    </div>
  );
};

export default DecisionModal;
