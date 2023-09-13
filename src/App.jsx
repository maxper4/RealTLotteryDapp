import "./App.css";
import { useEthers } from "@usedapp/core";

import Header from "./components/Header";
import About from "./components/About";
import Lottery from "./components/Lottery";
import Token from "./components/Token";
import Footer from "./components/Footer";
import WalletButton from "./components/WalletButton";

function App() {
  const { account, activateBrowserWallet, deactivate } = useEthers();
  return (
    <>
      <Header
        account={account}
        activateBrowserWallet={activateBrowserWallet}
        deactivate={deactivate}
      />
      <div className="pageContent">
        <About />
        <div className="connection-wrap">
          {!account && (
            <div className="acc-connection">
              <h1>CONNECT YOUR WALLET</h1>
              <WalletButton
                account={account}
                activateBrowserWallet={activateBrowserWallet}
                deactivate={deactivate}
              />
            </div>
          )}
          <Token
            account={account}
            activateBrowserWallet={activateBrowserWallet}
            deactivate={deactivate}
          />

          <div className="placeholder"></div>
          <Lottery />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
