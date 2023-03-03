import styles from "./Navbar.module.sass";
// Icons
import AppleIcon from "@mui/icons-material/Apple";
import SearchIcon from "@mui/icons-material/Search";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";

import { useState, useEffect } from "react";

import Tab from "./Tab";

type Props = {
  setBlur: React.Dispatch<React.SetStateAction<string>>;
};

const Navbar: React.FC<Props> = ({ setBlur }) => {
  const [headerHeight, setHeaderHeight] = useState("50px");
  const [toggle, setToggle] = useState("none");
  const [tab, setTab] = useState("");
  const [content, setContent] = useState("");

  const openDropDown = (e) => {
    setTab(e.target.dataset.name);
    setHeaderHeight("50vh");
    setToggle("block");
    setBlur("10px");
  };
  const closeDropDown = (e) => {
    setTab("");
    setContent("");
    setHeaderHeight("50px");
    setToggle("none");
    setBlur("0px");
  };

  useEffect(() => {
    const delayId = setTimeout(() => {
      setContent(tab);
    }, 200);

    return () => {
      clearTimeout(delayId);
    };
  }, [tab]);

  return (
    <header
      className={styles.header}
      onMouseLeave={closeDropDown}
      style={{ height: `${headerHeight}` }}
    >
      <div className={styles.container}>
        <nav className={styles.navbar}>
          <div className={styles.navItem}>
            <a href="/">
              <AppleIcon className={styles.logo} />
            </a>
          </div>
          <div className={styles.navItem} onMouseEnter={openDropDown}>
            <a href="/" data-name="Store">
              Store
            </a>
          </div>
          <div className={styles.navItem} onMouseEnter={openDropDown}>
            <a href="/" data-name="Mac">
              Mac
            </a>
          </div>
          <div className={styles.navItem} onMouseEnter={openDropDown}>
            <a href="/" data-name="iPad">
              iPad
            </a>
          </div>
          <div className={styles.navItem} onMouseEnter={openDropDown}>
            <a href="/" data-name="iPhone">
              iPhone
            </a>
          </div>
          <div className={styles.navItem} onMouseEnter={openDropDown}>
            <a href="/" data-name="Watch">
              Watch
            </a>
          </div>
          <div className={styles.navItem} onMouseEnter={openDropDown}>
            <a href="/" data-name="AirPods">
              AirPods
            </a>
          </div>
          <div className={styles.navItem} onMouseEnter={openDropDown}>
            <a href="/" data-name="Tv & Home">
              Tv & Home
            </a>
          </div>
          <div className={styles.navItem} onMouseEnter={openDropDown}>
            <a href="/" data-name="Entertainment">
              Entertainment
            </a>
          </div>
          <div className={styles.navItem} onMouseEnter={openDropDown}>
            <a href="/" data-name="Accessories">
              Accessories
            </a>
          </div>
          <div className={styles.navItem} onMouseEnter={openDropDown}>
            <a href="/" data-name="Support">
              Support
            </a>
          </div>
          <div className={styles.navItem}>
            <SearchIcon
              className={styles.icon}
              data-name="Searhbar"
              onClick={openDropDown}
            />
          </div>
          <div className={styles.navItem}>
            <WorkOutlineIcon
              className={styles.icon}
              data-name="Shopping cart bag"
              onClick={openDropDown}
            />
          </div>
        </nav>
        <div className={styles.tabs} style={{ display: toggle }}>
          <Tab type={content} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
