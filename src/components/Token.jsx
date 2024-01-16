import React, { useEffect, useState } from "react";
import { ethers } from 'ethers';

import Modal from "./Modal";

import TokenABI from "../abis/RealtToken.json";

import { CONTRACT_ADDRESS } from "../config";

function Token({ contract, account }) {
  const [ShowStakeModal, setShowStakeModal] = useState(false);
  const [ShowUnstakeModal, setShowUnstakeModal] = useState(false);
  const [ShowEnterLotteryModal, setShowEnterLotteryModal] = useState(false);

  const [canStake, setCanStake] = useState(false);
  const [canUnstake, setCanUnstake] = useState(false);
  const [canEnterLottery, setCanEnterLottery] = useState(false);

  const [supportedTokens, setSupportedTokens] = useState([]);
  const [tokensBalances, setTokensBalances] = useState({});
  const [tokensAllowances, setTokensAllowances] = useState({});
  const [ticketsBalance, setTicketsBalance] = useState(0);
  const [ticketsIds, setTicketsIds] = useState([]);
  const [ticketsInfos, setTicketsInfos] = useState({});

  const checkApproved = async (elem, amount) => {
    const approved = tokensAllowances[elem] >= amount;
    if(!approved) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const tokenContract = new ethers.Contract(
        elem,
        TokenABI.abi,
        signer
      );
      try {
        await tokenContract.approve(CONTRACT_ADDRESS, amount);
        amount = await tokenContract.allowance(account, CONTRACT_ADDRESS);
        setTokensAllowances({...tokensAllowances, [elem]: amount});
      }
      catch(e) {
        return false;
      }
    }
    return true;
  };

  const onClickStake = async(elem, amount) => {
    if(await checkApproved(elem, amount)) {
      await contract.enter([elem], [amount]);
      let approval = tokensAllowances[elem] - amount;
      setTokensAllowances({...tokensAllowances, [elem]: approval});
    }
  };

  const onClickUnstake = async(elem) => {
    const ids = [];
    for(let id of ticketsIds) {
      const ticketInfo = ticketsInfos[id];
      if(ticketInfo.token == elem) {
        ids.push(id);
      }
    }

    if(ids.length > 0)
      await contract.exit(ids);
    else
      alert("no tickets to unstake");
  };

  const onClickEnter = async(elem) => {
    const blockNumber = await provider.getBlockNumber();
    const block = await provider.getBlock(blockNumber);
    const timestamp = block.timestamp.toNumber();

    const delay = (await contract.drawInterval()).toNumber();

    const ids = [];
    for(let id of ticketsIds) {
      const ticketInfo = ticketsInfos[id];
      if(timestamp >= ticketInfo.enteredAt.toNumber() + delay && ticketInfo.token == elem) {
        ids.push(id);
      }
    }

    if(ids.length > 0)
      await contract.stack(ids);
    else
      alert("no tickets to enter");
  };

  const initFromContract = async () => {
    const supportedTokens = await contract.getTokensSupported();
    setSupportedTokens(supportedTokens);

    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();

    const tokensBalances = {};
    const tokensAllowances = {};
    await Promise.all(supportedTokens.map(async (token) => {
      const tokenContract = new ethers.Contract(
        token,
        TokenABI.abi,
        signer
      );
      const balance = await tokenContract.balanceOf(account);
      tokensBalances[token] = balance.toNumber();
      const allowance = await tokenContract.allowance(account, CONTRACT_ADDRESS);
      tokensAllowances[token] = allowance;
    }));
    setTokensBalances(tokensBalances);
    setTokensAllowances(tokensAllowances);
    
    const ticketsBalance = (await contract.balanceOf(account)).toNumber();
    setTicketsBalance(ticketsBalance);

    const blockNumber = await provider.getBlockNumber();
    const block = await provider.getBlock(blockNumber);
    const timestamp = block.timestamp;

    const delay = (await contract.drawInterval()).toNumber();

    let ticketsIds = [];
    let ticketsInfos = {};
    for(let i = 0; i < ticketsBalance; i++) {
      const ticket = await contract.tokenOfOwnerByIndex(account, i);
      const ticketInfo = await contract.tickets(ticket);
      if(timestamp >= ticketInfo.enteredAt.toNumber() + delay) {
        setCanEnterLottery(true);
      }
      ticketsIds.push(ticket);
      ticketsInfos[ticket] = ticketInfo;
    }
    setTicketsIds(ticketsIds);
    setTicketsInfos(ticketsInfos);
  }

  useEffect(() => {
    if (contract) {
      initFromContract();
    }
  }, [contract]);

  useEffect(() => {
    if (tokensBalances) {
      const canStake = Object.values(tokensBalances).some(balance => balance > 0);
      setCanStake(canStake);
    }
  }, [tokensBalances]);

  useEffect(() => {
    if (ticketsBalance) {
      const canUnstake = ticketsBalance > 0;
      setCanUnstake(canUnstake);
    }
  }, [ticketsBalance]);

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
                disabled={!canStake}
              >
                STAKE $REALT
              </button>
              <button
                className="btn-blue"
                onClick={() => {setShowUnstakeModal(true); setShowStakeModal(false); setShowEnterLotteryModal(false);}}
                disabled={!canUnstake}
              >
                UNSTAKE $REALT
              </button>
            </div>
          </div>
          {ShowStakeModal && ( // TODO: list with name not addresses, show tokens amount with decimals
            <Modal title="Stake $RealT" actionTxt="STAKE" description={"Select the $RealT you want to stake :"}
              close={() => setShowStakeModal(false)} list={supportedTokens} 
              onclick={onClickStake} />
          )}
          {ShowUnstakeModal && (
            <Modal title="Unstake $RealT" actionTxt="UNSTAKE" 
            close={() => setShowUnstakeModal(false)} list={[]} 
            onclick={onClickUnstake} />
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
              disabled={!canEnterLottery}
            >
              ENTER LOTTERY
            </button>
          </div>
          {ShowEnterLotteryModal && (
            <Modal title="Enter $RealT Lottery" actionTxt="ENTER" 
            close={() => setShowEnterLotteryModal(false)} list={[]} 
            onclick={onClickEnter}/>
          )}
        </div>
      </section>
    </>
  );
}

export default Token;
