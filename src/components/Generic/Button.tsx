type Props = {
  className: string;
  onClick: () => void;
  buttonText: string;
  buttonIcon: any;
};

const Button = (props: Props) => {
  return (
    <button onClick={props.onClick} className={props.className}>
      {props.buttonIcon}
      {props.buttonText}
    </button>
  );
};

export default Button;
