import styles from "./Gallery.module.sass";

import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";

import { useState, useEffect } from "react";

import appleTvMovies from "../../data";

const IMAGE_WIDTH = 1210;
const offset = 30; // for margin
const DISTANCE = IMAGE_WIDTH + offset;

let initial = true;

const Gallery = () => {
  const [items, setItems] = useState(
    appleTvMovies.map((item) => ({
      id: crypto.randomUUID(),
      title: item.title,
      trailerLink: item.trailerLink,
      poster: item.poster,
      backdrops: item.backdrops,
    }))
  );

  const [slideProgress, setSlideProgress] = useState(1);
  const [transition, setTransition] = useState("transform 500ms ease-in-out");
  const [transform, setTransform] = useState("translateX(-1240px)");
  const [reset, setReset] = useState("");

  const nextSlide = (e) => {
    if (slideProgress === items.length - 2) {
      setReset("FRONT");
      setTransition("none");
      setSlideProgress(1);
      setTransform(`translateX(0%)`);
    } else {
      const next = slideProgress + 1;
      setSlideProgress(next);
      setTransform(`translateX(${-DISTANCE * next}px)`);
    }
  };

  const prevSlide = (e) => {
    if (slideProgress === 1) {
      console.log("last image");
      setReset("BACK");
      setTransition("none");
      setSlideProgress(10);
      setTransform(`translateX(${-DISTANCE * 11}px)`);
    } else {
      const prev = slideProgress - 1;
      setSlideProgress(prev);
      setTransform(`translateX(${-DISTANCE * prev}px)`);
    }
  };

  useEffect(() => {
    if (reset !== "") {
      setReset("");
      setTransition("transform 500ms ease-in-out");
      if (reset === "FRONT") setTransform(`translateX(${-DISTANCE}px)`);
      else setTransform(`translateX(${-DISTANCE * 10}px)`);
    }
  }, [reset]);

  return (
    <section className={styles.slider}>
      <div className={styles.slider_progress}>
        <ul>
          {items.map(
            (item, i) =>
              i < items.length - 2 && (
                <li
                  key={i}
                  className={
                    i === slideProgress - 1 ? styles.clear : styles.fade
                  }
                ></li>
              )
          )}
        </ul>
      </div>
      <div className={styles.controls}>
        <div className={styles.left} onClick={prevSlide}></div>
        <div className={styles.right} onClick={nextSlide}></div>
      </div>
      <div className={styles.slide}>
        {items.map((item, i) => (
          <a
            key={item.id}
            className={`${styles.wrapper} ${
              i === slideProgress ? styles.active : styles.inactive
            }`}
            style={{
              transition,
              transform,
            }}
          >
            <div>
              <img src={item.backdrops[0]} />
              <div className={styles.slider_btn_container}>
                <button>
                  Stream now <PlayCircleFilledIcon />
                </button>
                <p>{item.title}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
