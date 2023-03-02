import classes from "./footer.module.sass";
// Icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer: React.FC = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.wrapper}>
          <div className={classes.header}>BROWSE</div>
          <div className={classes.list}>
            <p>Streaming Library</p>
            <p>Live Tv</p>
            <p>Live News</p>
            <p>Live Sports</p>
          </div>
        </div>
        <div className={classes.wrapper}>
          <div className={classes.header}></div>
          <div className={classes.list}>
            <p>Tv Shows</p>
            <p>Movies</p>
            <p>Originals</p>
            <p>Networks</p>
            <p>Kids</p>
            <p>FX</p>
          </div>
        </div>
        <div className={classes.wrapper}>
          <div className={classes.header}></div>
          <div className={classes.list}>
            <p>HBO Max™</p>
            <p>Cinemax</p>
            <p>Showtime</p>
            <p>STARZ</p>
          </div>
        </div>
        <div className={classes.wrapper}>
          <div className={classes.header}></div>
          <div className={classes.list}>
            <p>Hulu, Disney+, and ESPN+</p>
            <p>Hulu (No Ads), Disney+, and ESPN+</p>
            <p>Student Discount</p>
          </div>
        </div>
        <div className={classes.wrapper}>
          <div className={classes.header}>HELP</div>
          <div className={classes.list}>
            <p>Account & Billing</p>
            <p>Plans & Pricing</p>
            <p>Supported Devices</p>
            <p>Accessibiliy</p>
          </div>
        </div>
        <div className={classes.wrapper}>
          <div className={classes.header}>ABOUT US</div>
          <div className={classes.list}>
            <p>Press</p>
            <p>Jobs</p>
            <p>Contact</p>
          </div>
        </div>
      </div>
      <hr />
      <div className={classes.icons}>
        <FacebookIcon className={classes.icon} />
        <TwitterIcon className={classes.icon} />
        <YouTubeIcon className={classes.icon} />
        <InstagramIcon className={classes.icon} />
      </div>
      <div className={classes.terms}>
        <p>About Ads</p>
        <p>Terms of Use</p>
        <p>Privacy Policy</p>
        <p>Do Not Sell My Personal Information</p>
        <p>Your California Privacy Rights</p>
        <p>Tv Parental Guidelines</p>
        <p>Sitemap</p>
        <p>© 2023 Fake Hulu, LLC</p>
      </div>
    </footer>
  );
};
export default Footer;
