import { useState } from "react";
import styles from "./App.module.sass";

import { Navbar, Banner, Gallery } from "./components";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const App = () => {
  const [blur, setBlur] = useState("0px");

  return (
    <div className={styles.App}>
      <Navbar setBlur={setBlur} />
      <main style={{ filter: `blur(${blur})` }}>
        <section className={styles.news}>
          <span>
            Get $200–$600 in credit toward iPhone 14 or iPhone 14 Pro when you
            trade in iPhone 11 or higher.1 <a href="/">Shop iPhone</a>
            <span className={styles.arrow}>
              <ArrowForwardIosIcon fontSize="small" />
            </span>
          </span>
        </section>
        <Banner
          title="iPhone 14 Pro"
          desc="Pro. Beyond"
          url="/"
          cls="iPhone14Pro"
          option="Buy"
          logo={null}
        />
        <Banner
          title="iPhone 14"
          desc="Big And Bigger"
          url="/"
          cls="iPhone14"
          option="Buy"
          logo={null}
        />
        <Banner
          title={null}
          desc="A Healthy Leap Ahead"
          url="/"
          cls="watch"
          option="Buy"
          logo="series8"
        />
        <div className={styles.grid_container}>
          <Banner
            title="iPad"
            desc="Lovable. Drawable. Magical."
            url="/"
            cls="iPad"
            option="Buy"
            logo={null}
          />
          <Banner
            title="MacBook Pro"
            desc="Supercharged by M2 Pro and M2 Max."
            url="/"
            cls="Mac"
            option="Buy"
            logo={null}
          />
          <Banner
            title="HomePod"
            desc="Profound sound."
            url="/"
            cls="HomePod"
            option="Buy"
            logo={null}
          />
          <Banner
            title="AirPods Pro"
            desc="Rebuilt from the sound up."
            url="/"
            cls="AirPods"
            option="Buy"
            logo={null}
          />
          <Banner
            title={null}
            desc="Welcome to the year of you Now all you need is iPhone"
            url="/"
            cls="Fitness"
            option="Try For Free"
            logo="FitLogo"
          />
          <Banner
            title={null}
            desc="Get up to 3% Daily Cash back with every purchase."
            url="/"
            cls="Card"
            option="Apply"
            logo="CardLogo"
          />
        </div>
        <section className={styles.slider}>{/* <Gallery /> */}</section>
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
