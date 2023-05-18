import { useFormContext } from "react-hook-form";
import { findInputError } from "../../utils/findInputError";
import { isFormInvalid } from "../../utils/isFormInvalid";
import InputError from "./InputError";

type Props = {
  label: string;
  id: string;
  type: string;
  className: string;
  placeholder: string;
  validation: any;
  name: string;
};

const Input = ({
  label,
  type,
  id,
  placeholder,
  className,
  validation,
  name,
}: Props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const inputError: any = findInputError(errors, label);
  const isInvalid: any = isFormInvalid(inputError);

  return (
    <>
      <label htmlFor={id}>{label}</label>
      {isInvalid && (
        <InputError
          message={inputError.error.message}
          key={inputError.error.message}
        />
      )}
      <input
        id={id}
        type={type}
        className={className}
        placeholder={placeholder}
        {...register(name, validation)}
      />
    </>
  );
};

export default Input;
