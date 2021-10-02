import React, { useState } from "react";

const Upload = ({ setImages }) => {
  const [search, setSearch] = useState(
    "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"
  );

  const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
  let previousImages = JSON.parse(localStorage.getItem("images"));
  if (!previousImages) {
    previousImages = "[]";
    localStorage.setItem("images", previousImages);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const newImages = JSON.parse(localStorage.getItem("images"));
    const exist = newImages?.find((el) => el?.image === search);

    const imgData = {
      name: loggedUser.name,
      image: search,
    };

    if (exist) {
      return;
    } else if (
      search !==
      "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"
    ) {
      newImages.unshift(imgData);
    }
    setImages(newImages);
    localStorage.setItem("images", JSON.stringify(newImages));
  };

  return (
    <>
      <div
        className={`${
          !previousImages && "blank"
        } max-w-md m-auto flex items-center flex-col justify-center`}
      >
        <div className="blank-pic">
          <img
            alt="Upload"
            onError={(event) => {
              event.target.src =
                "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg";
              setSearch(
                "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"
              );
            }}
            src={search}
            className="border border-blue-100"
          />
        </div>
        <form
          className="flex items-center justify-center w-full pb-14"
          onSubmit={(event) => handleSubmit(event)}
        >
          <input
            type="url"
            placeholder="Upload a photo url"
            className="outline-none py-3 px-4 upload-filed focus:ring focus:border-indigo-100 duration-500"
            required
            onChange={(event) => setSearch(event.target.value)}
          />
          <button
            className="text-white bg-blue-300 hover:bg-blue-400 py-3 upload-btn flex justify-center align-center"
            type="submit"
          >
            <i className="fas fa-upload"></i>
          </button>
        </form>
      </div>
    </>
  );
};

export default Upload;
