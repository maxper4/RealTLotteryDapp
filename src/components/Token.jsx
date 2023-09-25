import React, { useEffect, useState } from "react";

import Modal from "./Modal";

function Token({ contract }) {
  const [ShowStakeModal, setShowStakeModal] = useState(false);
  const [ShowUnstakeModal, setShowUnstakeModal] = useState(false);
  const [ShowEnterLotteryModal, setShowEnterLotteryModal] = useState(false);
  const [supportedTokens, setSupportedTokens] = useState([]);

  const loadSupportedTokens = async () => {
    const supportedTokens = await contract.getTokensSupported();
    setSupportedTokens(supportedTokens);
  };

  const checkApproved = async (elem) => {
    // instantiate contract for $REALT
    
    // approve if not already done
    return approved;
  };

  const onClickStake = async(elem, amount) => {
    alert("stake " + elem + " x" + amount);
    await checkApproved(elem);
    await contract.enter([elem], [amount]); // TODO: /!\ $REALT are ERC20, not ERC721
  };

  useEffect(() => {
    if (contract) {
      loadSupportedTokens();
    }
  }, [contract]);

  return (
    <>
      <section className="token">
        <div className="wrap">
          <div className="p-1">
            <h1>No $RealT?</h1>
            <p>To enter the lottery, you need to buy $RealT properties first.</p>
            <div>
              <h2>BUY $REALT on:</h2>
              <div className="list-links">
                <a
                  href="https://realt.co/marketplace"
                  target="blank_"
                  className="btn-blue"
                >
                  REALT.CO
                </a>
                <a
                  href="https://yam.realtoken.network"
                  target="blank_"
                  className="btn-blue"
                >
                  YAM
                </a>
              </div>
            </div>
            
          </div>
        </div>
        <div className="wrap">
          <div className="p-1">
            <h1>Stake $RealT</h1>
            <p>
              Once you bought properties' tokens you can stake them to get tickets. You can
              stake them for as long as you want and you can unstake them whenever you want by using the tickets.
            </p>
            <div>
              <button
                className="btn-blue"
                onClick={() => { setShowStakeModal(true); setShowUnstakeModal(false); setShowEnterLotteryModal(false); }}
              >
                STAKE $REALT
              </button>
              <button
                className="btn-blue"
                onClick={() => {setShowUnstakeModal(true); setShowStakeModal(false); setShowEnterLotteryModal(false);}}
              >
                UNSTAKE $REALT
              </button>
            </div>
          </div>
          {ShowStakeModal && (
            <Modal title="Stake $RealT" actionTxt="STAKE" description={"Select the $RealT you want to stake :"}
              close={() => setShowStakeModal(false)} list={supportedTokens} 
              onclick={onClickStake} />
          )}
          {ShowUnstakeModal && (
            <Modal title="Unstake $RealT" actionTxt="UNSTAKE" close={() => setShowUnstakeModal(false)} list={[]} onclick={(elem) => alert("unstake")} />
          )}
        </div>
        <div className="wrap">
          <div className="p-1">
            <h1>Stake $TICKET</h1>
            <p>
              To be eligible to win the lottery, you need to play your tickets. 
              You can enter the lottery with your tickets after having staked the underlying property for one week (to avoid abuse).
            </p>
            <button
              className="btn-blue"
              onClick={() => {setShowEnterLotteryModal(true); setShowStakeModal(false); setShowUnstakeModal(false);} }
            >
              ENTER LOTTERY
            </button>
          </div>
          {ShowEnterLotteryModal && (
            <Modal title="Enter $RealT Lottery" actionTxt="ENTER" close={() => setShowEnterLotteryModal(false)} list={[]} onclick={(elem) => alert("enter")}/>
          )}
        </div>
      </section>
    </>
  );
}

export default Token;
