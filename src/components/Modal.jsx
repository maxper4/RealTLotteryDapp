import Cross from "../assets/cross.svg";
import React, { useState } from "react";

function Modal({title, actionTxt, close, list, onclick}) {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="Modal StakeModal">
      <div className="top">
        <img src={Cross} alt="Cross" className="cross" onClick={close} />
      </div>
      <h1>{title}</h1>

      <div className="inputWrap">
        <div>
          <label>
            <h2 className="tokenName">Enter the $RealT you want to stake :</h2>
            <select value={value} onChange={handleChange} className="input">
              {list.map((elem) => (
                <option value={elem} className="options">
                  {elem}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>
      <button className="btn-blue no-mg" onClick={() => onclick(value)}>{ actionTxt + value.toUpperCase()}</button>
    </div>
  );
}

export default Modal;
