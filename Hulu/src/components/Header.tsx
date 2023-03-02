// Components
import Navbar from "./Navbar";
// Sass
import classes from "./Header.module.sass";
// Icons
import SearchIcon from "@mui/icons-material/Search";

const Header: React.FC = () => {
  return (
    <header className={classes.header}>
      <div className={classes.left}>
        <div className={classes.logo}>Fake Hulu</div>
      </div>
      <div className={classes.center}>
        <Navbar />
      </div>
      <div className={classes.right}>
        <div className={classes.item}>
          <SearchIcon className={classes.icon} />
        </div>
        <div className={classes.circle}>
          <div className={`${classes.item} ${classes.profile}`}>A</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
