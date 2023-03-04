import styles from "./footer.module.sass";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.info}>
        <p>
          1. Trade-in values will vary based on the condition, year, and
          configuration of your eligible trade-in device. Not all devices are
          eligible for credit. You must be at least 18 years old to be eligible
          to trade in for credit or for an Apple Gift Card. Trade-in value may
          be applied toward qualifying new device purchase, or added to an Apple
          Gift Card. Actual value awarded is based on receipt of a qualifying
          device matching the description provided when estimate was made. Sales
          tax may be assessed on full value of a new device purchase. In-store
          trade-in requires presentation of a valid photo ID (local law may
          require saving this information). Offer may not be available in all
          stores, and may vary between in-store and online trade-in. Some stores
          may have additional requirements. Apple or its trade-in partners
          reserve the right to refuse or limit quantity of any trade-in
          transaction for any reason. More details are available from Apple’s
          trade-in partner for trade-in and recycling of eligible devices.
          Restrictions and limitations may apply.
        </p>
        <p>
          2. Apple Fitness+ requires iPhone 8 or later, or Apple Watch Series 3
          or later paired with iPhone 6s or later. New subscribers only.
          $9.99/month after trial. Plan automatically renews until cancelled.
          <a href="/">Terms</a> apply
        </p>
        <p>A subscription is required for Apple Fitness+.</p>
        <p>Apple Fitness+ requires an iPhone 8 or later with iOS 16.1.</p>
        <p>
          Apple Fitness+ requires an Apple Watch Series 3 or later. Available
          when paired with iPhone 6s or later with iOS 14.3 or later.
        </p>
        <p>Fitness app on Apple TV requires tvOS 14.3 or later.</p>
        <p>Fitness app on iPad requires iPadOS 14.3 or later.</p>
        <p>
          To get the newest features, make sure your devices are running the
          latest software version.
        </p>
        <p>
          To access and use all the features of Apple Card, you must add Apple
          Card to Wallet on an iPhone or iPad with the latest version of iOS or
          iPadOS. Update to the latest version by going to Settings {">"}{" "}
          General {">"} Software Update. Tap Download and Install.
        </p>
        <p>Available for qualifying applicants in the United States.</p>
        <p>
          Apple Card is issued by Goldman Sachs Bank USA, Salt Lake City Branch.
        </p>
        <p>
          Learn more about how Apple Card applications are evaluated at
          <span className={styles.underline}>
            support.apple.com/kb/HT209218
          </span>
          .
        </p>
      </div>
      <div className={styles.bottom_links}>
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <h3>Shop And Learn</h3>
            <p>Store</p>
            <p>Mac</p>
            <p>iPad</p>
            <p>iPhone</p>
            <p>Watch</p>
            <p>AirPods</p>
            <p>Tv & Home</p>
            <p>AirTag</p>
            <p>Accessories</p>
            <p>Gift Cards</p>
          </div>
          <div className={styles.wrapper}>
            <h3>Apple Wallet</h3>
            <p>Wallet</p>
            <p>Apple Card</p>
            <p>Apple Pay</p>
            <p>Apple Cash</p>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <h3>Account</h3>
            <p>Manage Your Apple ID</p>
            <p>Apple Store Account</p>
            <p>iCloud.com</p>
          </div>
          <div className={styles.wrapper}>
            <h3>Entertainment</h3>
            <p>Apple One</p>
            <p>Apple Tv+</p>
            <p>Apple Music</p>
            <p>Apple Arcade</p>
            <p>Apple Fitness+</p>
            <p>Apple News+</p>
            <p>Apple Podcasts</p>
            <p>Apple Books</p>
            <p>App Store</p>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <h3>Apple Store</h3>
            <p>Find A Store</p>
            <p>Genius Bar</p>
            <p>Today At Apple</p>
            <p>Apple Camp</p>
            <p>Apple Store App</p>
            <p>Certified Refurbished</p>
            <p>Financing</p>
            <p>Apple Trade In</p>
            <p>Order Status</p>
            <p>Shopping Help</p>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <h3>For Business</h3>
            <p>Apple And Business</p>
            <p>Shop For Business</p>
          </div>
          <div className={styles.wrapper}>
            <h3>For Education</h3>
            <p>Apple And Education</p>
            <p>Shop For K-12</p>
            <p>Shop For College</p>
          </div>
          <div className={styles.wrapper}>
            <h3>For Healthcare</h3>
            <p>Apple In Healthcare</p>
            <p>Health On Apple Watch</p>
            <p>Health Records On iPhone</p>
          </div>
          <div className={styles.wrapper}>
            <h3>For Government</h3>
            <p>Shop For Government</p>
            <p>Shop For Veterans And Military</p>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <h3>Apple Values</h3>
            <p>Accessibilty</p>
            <p>Education</p>
            <p>Environment</p>
            <p>Inclusion And Diversity</p>
            <p>Privacy</p>
            <p>Racial Equity And Justice</p>
            <p>Supplier Responsibility</p>
          </div>
          <div className={styles.wrapper}>
            <h3>About Apple</h3>
            <p>Newsroom</p>
            <p>Apple Leadership</p>
            <p>Career Opportunities</p>
            <p>Investors</p>
            <p>Ethics & Compliance</p>
            <p>Events</p>
            <p>Contact Apple</p>
          </div>
        </div>
      </div>
      <div className={styles.more_info}>
        <p>
          More ways to shop: <a href="/">Find an Apple Store</a> or
          <a href="/"> other retailer</a> near you. Or call 1-800-MY-APPLE.
        </p>
        <div>
          <p>Copyright © 2023 Apple Inc. All rights reserved.</p>
          <div>
            <p>Privacy Policy</p>
            <p>Terms Of Use</p>
            <p>Sales And Refunds</p>
            <p>Legal</p>
            <p>Site Map</p>
          </div>
          <p>United States</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
