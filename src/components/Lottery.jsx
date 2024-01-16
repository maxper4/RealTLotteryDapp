import { useEffect, useState } from "react";
import { ethers } from 'ethers';

function Lottery({ contract }) {
  const [canDraw, setCanDraw] = useState(false);
  const [nextDraw, setNextDraw] = useState(null);

  const initFromContract = async () => {
    const nextDraw = await contract.nextDrawTimestamp();
    const provider = new ethers.providers.Web3Provider(ethereum);
    const blockNumber = await provider.getBlockNumber();
    const block = await provider.getBlock(blockNumber);
    const timestamp = block.timestamp;
    setCanDraw(timestamp >= nextDraw);
    setNextDraw(nextDraw);
  }

  useEffect(() => {
    if (contract) {
      initFromContract();
    }
  }
  , [contract]);

    return (
      <>
        <section className="prize">
            <h1>This week's prize: XXXX$</h1>

            <div>
              <button className="btn-blue" disabled={!canDraw}>DRAW</button>
            </div>
        </section>
      </>
    )
  }
  
  export default Lottery