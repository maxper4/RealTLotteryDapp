import React, { useEffect, useState } from "react";

function WalletButton(props) {
  const [rendered, setRendered] = useState("");

  const shortenAddress = (address, chars = 4) => {
    return `${address.substring(0, chars + 2)}...${address.substring(
      42 - chars
    )}`;
  };

  useEffect(() => {
    if (props.account) {
      setRendered(shortenAddress(props.account));
    } else {
      setRendered("");
    }
  }, [props.account]);

  return (
    <button
      className="wallet-btn"
      onClick={() => {
        if (!props.account) {
          props.activateBrowserWallet();
        } else {
          props.deactivate();
        }
      }}
    >
      {rendered === "" && "Connect Wallet"}
      {rendered !== "" && rendered}
    </button>
  );
}

export default WalletButton;
