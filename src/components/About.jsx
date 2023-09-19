import Token from "../assets/realt-token.svg";

function About() {
  return (
    <>
      <section className="about">
        <div>
          <div className="tokenLogoWrap">
            <img src={Token} alt="realTlottery" />
          </div>
          <div className="aboutWrap">
            <h1>What is RealTLottery?</h1>
            <p>
              Buy $RealT properties and stake them for tickets. After a week, you can stake tickets that make you 
              eligible for the RealTLottery! <br /> <br /> Moreover, a staked ticket is forever eligible to win the prize, 
              without any additional fee or action needed from your side!
            </p>
            <h1>The winner wins it all </h1>
            <p>
              Each week, a random on-chain draw is made to select a winner. 
              The lucky winner of the week takes all the rents from all staked properties!
            </p>
            <h1>Don't lose your money</h1>
            <p>
              You can unstake your $RealT properties when you want and you'll lose nothing
              except the possibility to win the ongoing week's lottery.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
