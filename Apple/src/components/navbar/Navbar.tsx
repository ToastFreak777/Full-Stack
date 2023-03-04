import styles from "./Navbar.module.sass";
// Icons
import AppleIcon from "@mui/icons-material/Apple";
import SearchIcon from "@mui/icons-material/Search";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";

import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";

import Tab from "./Tab";
import {
  changeTab,
  ToggleDropDown,
  updateTabContent,
} from "../../context/navbarSlice";

type Props = {
  setBlur: React.Dispatch<React.SetStateAction<string>>;
};

const Navbar: React.FC<Props> = ({ setBlur }) => {
  const [headerHeight, setHeaderHeight] = useState("50px");

  const { toggle, tab, tabContent } = useSelector((state) => state.navbar);
  const dispatch = useDispatch();

  const openDropDown = (e: click) => {
    dispatch(changeTab(e.currentTarget.dataset.name));
    setHeaderHeight("50vh");
    dispatch(ToggleDropDown("block"));
    setBlur("10px");

    const header = document.querySelector(`.${styles.header}`);
    header.style.backgroundColor = "#161617";
  };
  const closeDropDown = () => {
    dispatch(changeTab(""));
    dispatch(updateTabContent(""));
    setHeaderHeight("50px");
    dispatch(ToggleDropDown("none"));
    setBlur("0px");

    const header = document.querySelector(`.${styles.header}`);
    header.style.backgroundColor = "#434344";
  };

  useEffect(() => {
    const delayId = setTimeout(() => {
      dispatch(updateTabContent(tab));
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
          <div
            className={styles.navItem}
            onMouseEnter={openDropDown}
            data-name="Store"
          >
            <a href="/">Store</a>
          </div>
          <div
            className={styles.navItem}
            onMouseEnter={openDropDown}
            data-name="Mac"
          >
            <a href="/">Mac</a>
          </div>
          <div
            className={styles.navItem}
            onMouseEnter={openDropDown}
            data-name="iPad"
          >
            <a href="/">iPad</a>
          </div>
          <div
            className={styles.navItem}
            onMouseEnter={openDropDown}
            data-name="iPhone"
          >
            <a href="/">iPhone</a>
          </div>
          <div
            className={styles.navItem}
            onMouseEnter={openDropDown}
            data-name="Watch"
          >
            <a href="/">Watch</a>
          </div>
          <div
            className={styles.navItem}
            onMouseEnter={openDropDown}
            data-name="AirPods"
          >
            <a href="/">AirPods</a>
          </div>
          <div
            className={styles.navItem}
            onMouseEnter={openDropDown}
            data-name="Tv & Home"
          >
            <a href="/">Tv & Home</a>
          </div>
          <div
            className={styles.navItem}
            onMouseEnter={openDropDown}
            data-name="Entertainment"
          >
            <a href="/">Entertainment</a>
          </div>
          <div
            className={styles.navItem}
            data-name="Accessories"
            onMouseEnter={openDropDown}
          >
            <a href="/">Accessories</a>
          </div>
          <div
            className={styles.navItem}
            data-name="Support"
            onMouseEnter={openDropDown}
          >
            <a href="/">Support</a>
          </div>
          <div
            className={styles.navItem}
            data-name="Searchbar"
            onClick={openDropDown}
            onMouseEnter={(e) => {
              if (toggle.valueOf("block") && tab !== "Searchbar")
                closeDropDown();
            }}
          >
            <SearchIcon className={styles.icon} />
          </div>
          <div
            className={styles.navItem}
            data-name="Bag"
            onClick={openDropDown}
            onMouseEnter={(e) => {
              if (toggle.valueOf("block") && tab !== "Bag") closeDropDown();
            }}
          >
            <WorkOutlineIcon className={styles.icon} />
          </div>
        </nav>
        <div className={styles.tabs} style={{ display: toggle }}>
          <Tab type={tabContent} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
