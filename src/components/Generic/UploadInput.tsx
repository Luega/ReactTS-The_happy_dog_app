import React, { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { EventEmitter } from "stream";
import { findInputError } from "../../utils/findInputError";
import { isFormInvalid } from "../../utils/isFormInvalid";
import InputError from "./InputError";

type Props = {
  label: string;
  id: string;
  type: string;
  className: string;
  multiple: boolean;
  accept: string;
  validation: any;
  name: string;
};

const UploadInput = ({
  label,
  id,
  type,
  className,
  multiple,
  accept,
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
      <label htmlFor={id} className="font-semibold capitalize">
        {label}
      </label>
      {isInvalid && <InputError message={inputError.error.message} />}
      <input
        id={id}
        type={type}
        className={className}
        multiple={multiple}
        accept={accept}
        // onChange={(e) => handleFileRead(e)}
        {...register(name, validation)}
      />
    </>
  );
};

export default UploadInput;
