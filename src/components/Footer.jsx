import Logo from "../assets/RealTLottery_Logo.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footerlogoWrap">
        <img src={Logo} alt="realTlottery" className="logo" />
      </div>
      <div className="footerText">
        <p>
          This information is not an offer to invest in any token, Fund or other
          opportunity and is provided for information only. Past performance does not
          guarantee future results. Returns are calculated based on the rental
          payments distributed throughout the year and the appreciation in value
          of the underlying property. The appreciation in value is based on the
          difference between purchase price and annual property reappraisals.
          Individual investor returns may vary based on the timing of their
          investments and redemptions.
        </p>
        <p>
          This site is NOT operated NOR affiliated with RealToken Inc. Nothing on this website should be construed
          as an offer to sell, solicitation of an offer to buy or a
          recommendation for any security by RealToken Inc. or any third party.
          You are solely responsible for determining whether any investment,
          investment strategy, security or related transaction is appropriate
          for you based on your personal investment objectives, financial
          circumstances and risk tolerance. You should consult with licensed
          legal professionals and investment advisors for any legal, tax,
          insurance or investment advice. All securities listed here are being
          offered by, and all information included on this site is the
          responsibility of, the applicable issuer of such securities. RealToken
          Inc. or REALTLOTTERY does not guarantee any investment performance, outcome or return
          of capital for any investment opportunity posted on this site.
        </p>
        <p>
          By accessing this site and any pages thereof, you agree to be
          bound by the Terms of Service and Privacy Policy. Please view our
          general disclaimer and accessibility statement as well.
        </p>
      </div>
      <div className="infoWrap">
          <div className="info">
            <p>©2023 REALTLOTTERY</p>
          </div>
        </div>
    </footer>
  );
}

export default Footer;
