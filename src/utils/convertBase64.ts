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

const handleFileRead = async (file: any) => {
  const blob = file[0];
  if (blob) {
    const base64: string = await convertBase64(blob);
    return base64;
  }
  return null;
};

export default handleFileRead;
