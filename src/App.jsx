import { useState, useEffect } from "react";
import "./App.css";
import { ethers } from 'ethers';

import Header from "./components/Header";
import About from "./components/About";
import Lottery from "./components/Lottery";
import Token from "./components/Token";
import Footer from "./components/Footer";
import WalletButton from "./components/WalletButton";

import { CONTRACT_ADDRESS, CHAIN_ID, CHAIN_ID_HEX } from "./config";
import ABI from "./abis/RealtLottery.json";

function App() {
  const [correctChain, setCorrectChain] = useState(false)
  const [account, setAccount] = useState(null);
  const [contract, setContract] = useState(null);

  const networkChanged = async (chainId) => {
    window.location.reload(false);
  }

  const loadContract = async () => {
    const { ethereum } = window;
  
    if (ethereum)
    {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
          CONTRACT_ADDRESS,
          ABI.abi,
          signer
      );
  
      setContract(contract);
    }
  }

  const connectWalletAction = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert('Get MetaMask!');
        return;
      }

      const disconnected = localStorage.getItem("disconnected");
      if(disconnected)
      {
        const overrides = {
          eth_accounts: {} 
        }
        await ethereum.request({
          method: 'wallet_requestPermissions', params: [overrides]
        });
      }

      const accounts = await ethereum.request({
        method: 'eth_requestAccounts'
      });

      setAccount(accounts[0]);

      localStorage.setItem("disconnected", false);
    } catch (error) {
      console.log(error);
    }
  };

  const disconnectWalletAction = async () => {
    localStorage.setItem("disconnected", true);
    setAccount(null);
  }

  const checkIfWalletIsConnected = async () => {
    try {
      const { ethereum } = window;
  
      if (!ethereum) {
        console.log('Make sure you have MetaMask!');
        return;
      } else {
  
        const disconnected = localStorage.getItem("disconnected");
        if(disconnected == "true")
        {
          return;
        }
  
        const accounts = await ethereum.request({ method: 'eth_accounts' });
  
        if (accounts.length !== 0) {
          const account = accounts[0];
          setAccount(account);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }
  
  const checkNetwork = async () => {
    try { 
      if (window.ethereum.networkVersion !== CHAIN_ID) {
        await ethereum.request({ method: 'wallet_switchEthereumChain', params:[{chainId: CHAIN_ID_HEX}]});
        console.log("Please connect to Goerli !")
      }
      else if(!correctChain)
      {
        setCorrectChain(true)
      }
    } catch(error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if(contract)
    {
      /*contract.on("NewTweet", onNewTweet);
      contract.on("TweetDeleted", onDeleteTweet);
      contract.on("TweetLiked", onTweetLiked);
      contract.on("TweetUnliked", onTweetUnliked);
  
      return () => {
        contract.off("NewTweet", onNewTweet);
        contract.off("TweetDeleted", onDeleteTweet);
        contract.off("TweetLiked", onTweetLiked);
        contract.off("TweetUnliked", onTweetUnliked);
      }*/
    }
  }, [contract]);
  
  useEffect(() => {
    if(account != null && correctChain) {
      loadContract();
    } else {
      setContract(null);
    }
  }, [account, correctChain]);
  
  useEffect(() => {
    if(correctChain)
    {
      checkIfWalletIsConnected();
    }
  }, [correctChain]);
  
  useEffect(() => {
    checkNetwork();
    if(window.ethereum)
    {
      window.ethereum.on("chainChanged", networkChanged);
  
      return () => {
        window.ethereum.removeListener("chainChanged", networkChanged);
      }
    }
  }, []);

  return (
    <>
      <Header
        account={account}
        activateBrowserWallet={connectWalletAction}
        deactivate={disconnectWalletAction}
      />
      <div className="pageContent">
        <About />
        <div className="connection-wrap">
          {!account && (
            <div className="acc-connection">
              <h1>CONNECT YOUR WALLET</h1>
              <WalletButton
                account={account}
                activateBrowserWallet={connectWalletAction}
                deactivate={disconnectWalletAction}
              />
            </div>
            ) || (!correctChain
                && <div className="acc-connection">
                  <h1>INCORRECT CHAIN</h1>
                  <button className="btn-blue" onClick={() => checkNetwork()}>Switch to correct network</button>
                  </div>
              )
            }
          <Token />

          <Lottery />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
