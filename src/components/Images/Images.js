import React, { useEffect, useState } from "react";
import Upload from "./Upload/Upload";

const Images = () => {
  useEffect(() => {
    const img = JSON.parse(localStorage.getItem("images"));
    setImages(img);
  }, []);

  const [images, setImages] = useState([]);

  return (
    <>
      <Upload setImages={setImages} />
      <div className="grid grid-cols-4 pb-12">
        {images.map((image) => {
          return (
            <div className="p-2">
              <div className="pic-div border border-blue-200">
                <img src={image.image} alt="Pic" className="w-full" />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Images;
