import classes from "./Navbar.module.sass";

const Navbar: React.FC = () => {
  return (
    <nav>
      <div className={classes.item}>Home</div>
      <div className={classes.item}>TV</div>
      <div className={classes.item}>Movies</div>
      <div className={classes.item}>Sports</div>
      <div className={classes.item}>News</div>
      <div className={classes.item}>My Stuff</div>
      <div className={classes.item}>Hubs</div>
    </nav>
  );
};

export default Navbar;
