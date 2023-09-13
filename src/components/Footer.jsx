import Logo from "../assets/RealTLottery_Logo.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footerlogoWrap">
        <img src={Logo} alt="realTlottery" className="logo" />
      </div>
      <div className="footerText">
        <div className="infoWrap">
          <div className="info">
            <h2>ADDRESS</h2>
            <p>980 N. Federal Hwy, Suite #110 Boca Raton, FL 33432</p>
          </div>
          <div className="info">
            <h2>PHONE</h2>
            <p>(561) 283 - 8800</p>
          </div>
          <div className="info">
            <p>©2023 REALTOKEN</p>
          </div>
        </div>
        <p>
          This information is not an offer to invest in any token, Fund or other
          opportunity and is provided for information only. Performance results
          are shown net of all fees, costs, and expenses associated with the
          token. Should an investor choose to redeem a token through RealT or on
          a secondary market, other processing fees may be assessed that are not
          factored into the returns presented. Past performance does not
          guarantee future results. Returns are calculated based on the rental
          payments distributed throughout the year and the appreciation in value
          of the underlying property. The appreciation in value is based on the
          difference between purchase price and annual property reappraisals.
          Individual investor returns may vary based on the timing of their
          investments and redemptions.
        </p>
        <p>
          This site is operated by RealToken Inc., which is not a registered
          broker-dealer or investment advisor. RealToken Inc. does not give
          investment advice, endorsement, analysis or recommendations with
          respect to any securities. Nothing on this website should be construed
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
          Inc. does not guarantee any investment performance, outcome or return
          of capital for any investment opportunity posted on this site.
        </p>
        <p>
          We improve our products and advertising by using Microsoft Clarity to
          see how you use our website. By using our site, you agree that we and
          Microsoft can collect and use this data. Our Privacy Policy has more
          details. By accessing this site and any pages thereof, you agree to be
          bound by the Terms of Service and Privacy Policy. Please view our
          general disclaimer and accessibility statement as well.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
