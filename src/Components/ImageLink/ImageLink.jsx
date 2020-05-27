import React from "react";
import "./ImageLink.css";
const ImageLink = () => {
  return (
    <div className="ma4 mt0">
      <h2>{"This project will Detect the face from given Photo"}</h2>
      <div className="center">
        <div className="center form pa4 br3 shadow-5 ">
          <input className="f4  pa2 w-70 center" type="text" />
          <button className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple">
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLink;
