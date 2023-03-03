import { useState } from "react";
import styles from "./App.module.sass";

import { Navbar } from "./components";

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
        <section className={styles.banner}>
          <a href="/">
            <figure className={styles.iPhone14Pro}>
              <div>
                <h2>iPhone 14 Pro</h2>
                <p>Pro. Beyond</p>
                <p>
                  <span>
                    Learn More <ArrowForwardIosIcon />
                  </span>
                  <span>
                    Buy <ArrowForwardIosIcon />
                  </span>
                </p>
              </div>
            </figure>
          </a>
        </section>
        <section className={styles.banner}>
          <a href="/">
            <figure className={styles.iPhone14}>
              <div>
                <h2>iPhone 14</h2>
                <p>Big And Bigger</p>
                <p>
                  <span>
                    Learn More <ArrowForwardIosIcon />
                  </span>
                  <span>
                    Buy <ArrowForwardIosIcon />
                  </span>
                </p>
              </div>
            </figure>
          </a>
        </section>
        <section className={styles.banner}>
          <a href="/">
            <figure className={styles.watch}>
              <div>
                <h2 className={styles.series8}></h2>
                <p>A Healthy Leap Ahead</p>
                <p>
                  <span>
                    Learn More <ArrowForwardIosIcon />
                  </span>
                  <span>
                    Buy <ArrowForwardIosIcon />
                  </span>
                </p>
              </div>
            </figure>
          </a>
        </section>
        <div className={styles.grid_container}>
          <section className={styles.banner}>
            <a href="/">
              <figure className={styles.iPad}>
                <div>
                  <h2>iPad</h2>
                  <p>Lovable. Drawable. Magical.</p>
                  <p>
                    <span>
                      Learn More <ArrowForwardIosIcon />
                    </span>
                    <span>
                      Buy <ArrowForwardIosIcon />
                    </span>
                  </p>
                </div>
              </figure>
            </a>
          </section>
          <section className={styles.banner}>
            <a href="/">
              <figure className={styles.Mac}>
                <div>
                  <h2>MacBook Pro</h2>
                  <p>Supercharged by M2 Pro and M2 Max.</p>
                  <p>
                    <span>
                      Learn More <ArrowForwardIosIcon />
                    </span>
                    <span>
                      Buy <ArrowForwardIosIcon />
                    </span>
                  </p>
                </div>
              </figure>
            </a>
          </section>
          <section className={styles.banner}>
            <a href="/">
              <figure className={styles.HomePod}>
                <div>
                  <h2>HomePod</h2>
                  <p>Profound sound.</p>
                  <p>
                    <span>
                      Learn More <ArrowForwardIosIcon />
                    </span>
                    <span>
                      Buy <ArrowForwardIosIcon />
                    </span>
                  </p>
                </div>
              </figure>
            </a>
          </section>
          <section className={styles.banner}>
            <a href="/">
              <figure className={styles.AirPods}>
                <div>
                  <h2>AirPods Pro</h2>
                  <p>Rebuilt from the sound up.</p>
                  <p>
                    <span>
                      Learn More <ArrowForwardIosIcon />
                    </span>
                    <span>
                      Buy <ArrowForwardIosIcon />
                    </span>
                  </p>
                </div>
              </figure>
            </a>
          </section>
          <section className={styles.banner}>
            <a href="/">
              <figure className={styles.Fitness}>
                <div>
                  <h2 className={styles.FitLogo}></h2>
                  <p>A Healthy Leap Ahead</p>
                  <p>
                    <span>
                      Learn More <ArrowForwardIosIcon />
                    </span>
                    <span>
                      Buy <ArrowForwardIosIcon />
                    </span>
                  </p>
                </div>
              </figure>
            </a>
          </section>
          <section className={styles.banner}>
            <a href="/">
              <figure className={styles.Card}>
                <div>
                  <h2 className={styles.CardLogo}></h2>
                  <p>A Healthy Leap Ahead</p>
                  <p>
                    <span>
                      Learn More <ArrowForwardIosIcon />
                    </span>
                    <span>
                      Buy <ArrowForwardIosIcon />
                    </span>
                  </p>
                </div>
              </figure>
            </a>
          </section>
        </div>
      </main>
    </div>
  );
};

export default App;
