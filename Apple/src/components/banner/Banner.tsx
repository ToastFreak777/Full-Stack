import styles from "./Banner.module.sass";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Banner = ({ cls, title, desc, url, logo, option }) =>
  !logo ? (
    <section className={styles.banner}>
      <a href={url}>
        <figure className={styles[cls]}>
          <div>
            <h2>{title}</h2>
            <p>{desc}</p>
            <p>
              <span>
                Learn More <ArrowForwardIosIcon />
              </span>
              <span>
                {option} <ArrowForwardIosIcon />
              </span>
            </p>
          </div>
        </figure>
      </a>
    </section>
  ) : (
    <section className={styles.banner}>
      <a href="/">
        <figure className={styles[cls]}>
          <div>
            <h2 className={styles[logo]}></h2>
            <p>{desc}</p>
            <p>
              <span>
                Learn More <ArrowForwardIosIcon />
              </span>
              <span>
                {option} <ArrowForwardIosIcon />
              </span>
            </p>
          </div>
        </figure>
      </a>
    </section>
  );

export default Banner;
