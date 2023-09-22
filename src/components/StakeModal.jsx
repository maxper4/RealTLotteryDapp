import Cross from "../assets/cross.svg";
import React, { useState } from "react";

function StakeModal(props) {
  const options = [
    { label: "$RealT", value: "$RealT" },

    { label: "$RealT", value: "$RealT" },

    { label: "$RealT", value: "$RealT" },
  ];

  const [value, setValue] = useState(options[0].value);

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className="Modal StakeModal">
      <div className="top">
        <img src={Cross} alt="Cross" className="cross" onClick={props.close} />
      </div>
      <h1>Stake $RealT</h1>

      <div className="inputWrap">
        <div>
          <label>
            <h2 className="tokenName">Enter the $RealT you want to stake :</h2>
            <select value={value} onChange={handleChange} className="input">
              {options.map((option) => (
                <option value={option.value} className="options">
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>
      <button className="btn-blue no-mg">STAKE {value.toUpperCase()}</button>
    </div>
  );
}

export default StakeModal;
