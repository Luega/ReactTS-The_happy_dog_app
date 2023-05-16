import React, { useEffect, useState } from "react";
import { EventEmitter } from "stream";

type Props = {
  handlerFn: (file: string | undefined) => void;
  multiple: boolean;
  accept: string;
  className: string;
};

const UploadInput = (props: Props) => {
  const [file, setfile] = useState<string | undefined>(undefined);

  useEffect(() => props.handlerFn(file), [file]);

  const convertBase64 = (file: any): any => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleFileRead = async (event: any) => {
    const file = event.target.files[0];
    if (file) {
      const base64: string = await convertBase64(file);
      setfile(base64);
    }
  };

  return (
    <>
      <input
        className={props.className}
        type="file"
        multiple={props.multiple}
        accept={props.accept}
        onChange={(e) => handleFileRead(e)}
      />
    </>
  );
};

export default UploadInput;
