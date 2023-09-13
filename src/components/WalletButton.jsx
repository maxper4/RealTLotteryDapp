import React, { useEffect, useState } from "react";
import { shortenAddress, useLookupAddress } from "@usedapp/core";

function WalletButton(props) {
  const [rendered, setRendered] = useState("");

  const { ens } = useLookupAddress();

  useEffect(() => {
    if (ens) {
      setRendered(ens);
    } else if (props.account) {
      setRendered(shortenAddress(props.account));
    } else {
      setRendered("");
    }
  }, [props.account, ens, setRendered]);

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
