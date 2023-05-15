type Props = {
  className: string;
  onClick: () => void;
  buttonText: string;
};

const Button = (props: Props) => {
  return (
    <button onClick={props.onClick} className={props.className}>
      {props.buttonText}
    </button>
  );
};

export default Button;
