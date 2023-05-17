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
      <div onClick={props.onCancelHandler} />
      <div>
        <div>
          <h2>{props.title}</h2>
        </div>
        <div>
          <p>{props.message}</p>
        </div>
        <div>
          <Button
            className=""
            onClick={props.onCancelHandler}
            buttonText={"Cancel"}
            buttonIcon=""
          />
          <Button
            className=""
            onClick={props.onActionHandler}
            buttonText={"Confirm"}
            buttonIcon=""
          />
        </div>
      </div>
    </div>
  );
};

export default DecisionModal;
