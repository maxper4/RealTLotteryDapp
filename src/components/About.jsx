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
            <h1>What is RealTLottery ?</h1>
            <p>
              Buy $RealT and then stake them. Every week you earn tickets that
              you can use to enter the lottery.
            </p>
            <h1>The winner wins it all </h1>
            <p>
              The winner of the week takes all the rents from a selection of
              properties and it starts over every weeks.
            </p>
            <h1>Don't lose your money</h1>
            <p>
              You can unstake your $RealT when you want and you'll lose nothing
              except the tickets for the ongoing week's lottery.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
