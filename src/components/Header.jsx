import Logo from "../assets/RealTLottery_Logo.svg";
import WalletButton from "./WalletButton";

function Header(props) {
  return (
    <header className="header">
      <div className="container">
        <div className="logoWrap">
          <img src={Logo} alt="realTlottery" className="logo" />
        </div>
        <WalletButton
          account={props.account}
          activateBrowserWallet={props.activateBrowserWallet}
          deactivate={props.deactivate}
        />
      </div>
    </header>
  );
}

export default Header;
