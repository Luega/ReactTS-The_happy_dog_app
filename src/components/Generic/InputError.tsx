type Props = {
  message: string;
};

const InputError = ({ message }: Props) => {
  return <div>{message}</div>;
};

export default InputError;
