import Cross from "../assets/cross.svg";
import React, { useState } from "react";

function Modal({title, actionTxt, close, list, onclick, description}) {
  const [value, setValue] = useState(list[0]);
  const [amount, setAmount] = useState(0)

  const handleChangeValue = (event) => {
    setValue(event.target.value);
  };

  const handleChangeAmount = (e) => {
    const newAmount = e.target.value;
    if (newAmount >= 0) {
      setAmount(newAmount);
    }
  }

  return (
    <div className="Modal StakeModal">
      <div className="top">
        <img src={Cross} alt="Cross" className="cross" onClick={close} />
      </div>
      <h1>{title}</h1>

      <div className="inputWrap">
        <div>
          <h2 className="tokenName">{description}</h2>
          <select value={value} onChange={handleChangeValue} className="input">
            {list.map((elem, i) => (
              <option key={"mod-"+ title + "-" + i} value={elem} className="options">
                {elem}
              </option>
            ))}
          </select>
          <input type="number" className="input" placeholder="Amount" min={0} value={amount} onChange={handleChangeAmount} />
        </div>
      </div>
      {
        amount > 0 && (
          <button className="btn-blue no-mg" onClick={() => {onclick(value, amount);}}>{ actionTxt + " " + value.toUpperCase()}</button>
        )
        || (
          <button className="btn-blue no-mg" disabled>{ actionTxt + " " + value.toUpperCase()}</button>
        )
      }
    </div>
  );
}

export default Modal;
