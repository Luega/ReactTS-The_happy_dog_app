import classes from "../../style/Generic/Modal-Form.module.css";

type Props = {
  message: string;
};

const InputError = ({ message }: Props) => {
  return <div className={`${classes.error}`}>{message}</div>;
};

export default InputError;
