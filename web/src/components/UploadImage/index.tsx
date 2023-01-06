/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import React, { useState } from "react";
import defaultImg from "../../assets/images/img-default.jpg";
import Container from "./style";

type PropsUploadImage = {
  setThumbnail: (base64: string) => void;
};
export default function UploadImage({ setThumbnail }: PropsUploadImage) {
  const [base64URL, setBase64URL] = useState("");

  const getBase64 = (file: File) => {
    return new Promise((resolve) => {
      const reader = new FileReader();

      reader.readAsDataURL(file);

      reader.onload = () => {
        const baseURL = reader.result;
        resolve(baseURL);
      };
    });
  };
  const handleFileInputChange = ({ target }: any) => {
    const file = target?.files[0];
    getBase64(file)
      .then((result) => {
        file.base64 = result;
        setBase64URL(result as string);
        setThumbnail(result as string);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Container>
      <img src={base64URL || defaultImg} alt="img" />
      <input type="file" name="file" onChange={handleFileInputChange} />
    </Container>
  );
}
