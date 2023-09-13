import React, { useState } from "react";

import StakeModal from "./StakeModal";

function Token() {
  const [ShowStakeModal, setShowStakeModal] = useState(false);

  return (
    <>
      <section className="token">
        <div className="wrap">
          <div className="p-1">
            <h1>Buy $RealT</h1>
            <p>To earn tickets you need to buy $RealT first.</p>
            <a
              href="https://yam.realtoken.network"
              target="blank_"
              className="btn-blue"
            >
              BUY $REALT
            </a>
          </div>
        </div>
        <div className="wrap">
          <div className="p-1">
            <h1>Stake $RealT</h1>
            <p>
              Once you bought tokens you can stake them to earn tickets. You can
              stake them for as long as you want and you'll earn tickets every
              weeks or you can unstake them whenever you want you'll only lose
              the tickets for the ongoing week.
            </p>
            <button
              className="btn-blue"
              onClick={() => setShowStakeModal(!ShowStakeModal)}
            >
              STAKE $REALT
            </button>
          </div>
          {ShowStakeModal && (
            <StakeModal close={() => setShowStakeModal(!ShowStakeModal)} />
          )}
        </div>
      </section>
    </>
  );
}

export default Token;
