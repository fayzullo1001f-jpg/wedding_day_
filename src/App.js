import React, { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./App.css";

import musicFile from "./music/asad.mp3";

import play from "./img/circle-play-regular-full.svg";
import pause from "./img/circle-pause-regular-full.svg";

import one from "./img/one.png";
import wed_lw from "./img/fairytale-shoot-in-a-meadow-couple-embracing.jpg";
import restaurant from "./img/L_height.webp";
import ring from "./img/newlyleds-exchanging-ring.jpg";
import bird from "./img/footer.png";

import cake from "./img/cake-cutting-tradition-wedding-planning-yacht-charter-nyc.jpg";

function App() {
  const [timeLeft, setTimeLeft] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [sealOpened, setSealOpened] = useState(false);

  const audioRef = useRef(null);

  /*
  ============================================================
  TO'Y SANASI
  23.12.2026 — 18:00
  ============================================================
  */

  const weddingDate = useMemo(() => {
    return new Date(2026, 11, 23, 18, 0, 0).getTime();
  }, []);

  /*
  ============================================================
  COUNTDOWN
  ============================================================
  */
  useEffect(() => {
    const updateCountdown = () => {
      const now = Date.now();

      const distance = weddingDate - now;

      if (distance <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      const days = Math.floor(
          distance / (1000 * 60 * 60 * 24)
      );

      const hours = Math.floor(
          (distance / (1000 * 60 * 60)) % 24
      );

      const minutes = Math.floor(
          (distance / (1000 * 60)) % 60
      );

      const seconds = Math.floor(
          (distance / 1000) % 60
      );

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
      });
    };

    updateCountdown();

    const interval = setInterval(
        updateCountdown,
        1000
    );

    return () => {
      clearInterval(interval);
    };
  }, [weddingDate]);

  /*
  ============================================================
  MUSIC
  ============================================================
  */

  const toggleMusic = () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio
          .play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch(() => {});
    }
  };

  /*
  ============================================================
  INTRO / TAKLIFNOMANI OCHISH
  ============================================================
  */

  const openInvitation = () => {
    if (sealOpened) return;

    setSealOpened(true);

    setTimeout(() => {
      setShowIntro(false);

      const audio = audioRef.current;

      if (audio) {
        audio
            .play()
            .then(() => {
              setIsPlaying(true);
            })
            .catch(() => {});
      }
    }, 1100);
  };

  /*
  ============================================================
  ANIMATION
  ============================================================
  */

  const textVariant = {
    hidden: {
      opacity: 0,
      y: 30,
    },

    visible: (i) => ({
      opacity: 1,
      y: 0,

      transition: {
        delay: i * 0.2,
        duration: 0.6,
      },
    }),
  };

  const imgVariant = {
    hidden: {
      opacity: 0,
      scale: 0.85,
    },

    visible: {
      opacity: 1,
      scale: 1,

      transition: {
        duration: 0.8,
      },
    },
  };

  return (
      <>
        {/* ======================================================
          AUDIO
      ====================================================== */}

        <audio
            ref={audioRef}
            loop
            preload="auto"
        >
          <source
              src={musicFile}
              type="audio/mpeg"
          />
        </audio>

        <AnimatePresence>
          {showIntro ? (
              /*
                ====================================================
                INTRO
                ====================================================
              */

              <motion.div
                  className={`intro ${
                      sealOpened
                          ? "intro_opening"
                          : ""
                  }`}
                  initial={{
                    opacity: 1,
                  }}
                  exit={{
                    opacity: 0,
                  }}
              >
                <motion.img
                    src={one}
                    alt="Wedding invitation"
                    className="intro_image"
                    initial={{
                      scale: 1,
                    }}
                    animate={{
                      scale: sealOpened
                          ? 1.04
                          : 1,
                    }}
                    transition={{
                      duration: 1,
                    }}
                />

                {/* MUHR BOSILADIGAN JOY */}

                <button
                    className="seal_button"
                    onClick={openInvitation}
                    aria-label="Taklifnomani ochish"
                >
                  <span />
                </button>

                {/* OCHILISH NURI */}

                <div
                    className={`opening_light ${
                        sealOpened
                            ? "light_active"
                            : ""
                    }`}
                />
              </motion.div>
          ) : (
              /*
                ====================================================
                MAIN APP
                ====================================================
              */

              <div className="app">

                {/* ==================================================
                HERO
            ================================================== */}

                <section className="hero">

                  {/* RASM USTIDAN BEIGE OVERLAY */}

                  <div className="hero_overlay" />

                  {/* MARKAZIY YORUG'LIK */}

                  <div className="hero_glow" />

                  <div className="hero_content">

                    {/* TO'Y KUNI */}

                    <motion.p
                        className="wedding_date_top"
                        initial={{
                          opacity: 0,
                          y: -20,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          duration: 1,
                        }}
                    >
                      Taklifnoma
                    </motion.p>

                    {/* ABROR */}

                    <motion.h1
                        initial={{
                          opacity: 0,
                          scale: 0.8,
                        }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                        }}
                        transition={{
                          duration: 1,
                        }}
                    >
                      Abror
                    </motion.h1>

                    {/* & */}

                    <motion.div
                        className="wedding_and"
                        initial={{
                          opacity: 0,
                          scale: 0.7,
                        }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                        }}
                        transition={{
                          delay: 0.3,
                          duration: 0.8,
                        }}
                    >
                      &
                    </motion.div>

                    {/* MUSLIMA */}

                    <motion.h1
                        initial={{
                          opacity: 0,
                          scale: 0.8,
                        }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                        }}
                        transition={{
                          delay: 0.2,
                          duration: 1,
                        }}
                    >
                      Muslima
                    </motion.h1>

                    {/* SANA */}

                    <motion.p
                        className="wedding_date"
                        initial={{
                          opacity: 0,
                          y: 20,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          delay: 0.5,
                          duration: 1,
                        }}
                    >
                      23.12.2026
                    </motion.p>

                    {/* MUSIQA */}

                    <motion.div
                        className={`music_btn ${
                            isPlaying
                                ? "playing"
                                : ""
                        }`}
                        onClick={toggleMusic}
                        whileTap={{
                          scale: 0.9,
                        }}
                        whileHover={{
                          scale: 1.1,
                        }}
                    >
                      <img
                          src={
                            isPlaying
                                ? pause
                                : play
                          }
                          alt="Musiqa"
                      />
                    </motion.div>

                  </div>
                </section>

                {/* ==================================================
                TAKLIFNOMA
            ================================================== */}

                <motion.section
                    className="section sed"
                    initial={{
                      opacity: 0,
                      y: 40,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                >

                  <motion.h2
                      custom={0}
                      variants={textVariant}
                      initial="hidden"
                      whileInView="visible"
                  >
                    TO‘Y TAKLIFNOMASI
                  </motion.h2>

                  <motion.p
                      custom={1}
                      variants={textVariant}
                      initial="hidden"
                      whileInView="visible"
                  >
                    Assalomu alaykum!
                    <br />

                    Hurmatli mehmonimiz!
                    <br />

                    Sizni nikoh to'yimiz
                    munosabati bilan
                    bo'lib o'tadigan

                    <br />

                    "Visol oqshomi"ga

                    <br />

                    taklif etamiz 💍
                  </motion.p>

                  <motion.div
                      className="border"
                      variants={imgVariant}
                      initial="hidden"
                      whileInView="visible"
                  >
                    <img
                        className="img_bor"
                        src={wed_lw}
                        alt=""
                    />
                  </motion.div>

                  <div className="timer">
                    <div className="time_box">
                      <strong>{timeLeft.days}</strong>
                      <span>Kun</span>
                    </div>

                    <div className="time_box">
                      <strong>{timeLeft.hours}</strong>
                      <span>Soat</span>
                    </div>

                    <div className="time_box">
                      <strong>{timeLeft.minutes}</strong>
                      <span>Minut</span>
                    </div>

                    <div className="time_box">
                      <strong>{timeLeft.seconds}</strong>
                      <span>Sekund</span>
                    </div>
                  </div>

                </motion.section>

                {/* ==================================================
                TO'Y KUNI
            ================================================== */}

                <motion.section
                    className="section"
                    initial={{
                      opacity: 0,
                    }}
                    whileInView={{
                      opacity: 1,
                    }}
                    viewport={{
                      once: true,
                    }}
                >

                  <h2>
                    TO'Y KUNI
                  </h2>

                  <motion.img
                      src={cake}
                      className="cade"
                      variants={imgVariant}
                      initial="hidden"
                      whileInView="visible"
                      alt=""
                  />

                  <div className="calendar">

                    {Array.from(
                        {
                          length: 31,
                        },
                        (_, i) => {

                          const day = i + 1;

                          return (
                              <div
                                  key={day}
                                  className={`day ${
                                      day === 23
                                          ? "active_day"
                                          : ""
                                  }`}
                              >
                                {day}
                              </div>
                          );
                        }
                    )}

                  </div>

                  <h2>
                    23 December 2026
                  </h2>

                </motion.section>

                {/* ==================================================
                LOKATSIYA
            ================================================== */}

                <motion.section
                    className="section"
                    initial={{
                      opacity: 0,
                    }}
                    whileInView={{
                      opacity: 1,
                    }}
                    viewport={{
                      once: true,
                    }}
                >

                  <h2>
                    LOKATSIYA
                  </h2>

                  <motion.img
                      src={restaurant}
                      className="restaurant"
                      variants={imgVariant}
                      initial="hidden"
                      whileInView="visible"
                      alt=""
                  />

                  <iframe
                      title="map"
                      src="https://www.google.com/maps?q=Versal%20to'yxonasi%20Toshkent&output=embed"
                      className="map"
                  />

                </motion.section>

                {/* ==================================================
                TO'Y DASTURI
            ================================================== */}

                <motion.section
                    className="section"
                    initial={{
                      opacity: 0,
                    }}
                    whileInView={{
                      opacity: 1,
                    }}
                    viewport={{
                      once: true,
                    }}
                >

                  <h2>
                    TO‘Y DASTURI
                  </h2>

                  <div className="timeline">

                    {[
                      [
                        "17:00",
                        "Mehmonlar kelishi",
                      ],
                      [
                        "18:00",
                        "To‘y boshlanishi",
                      ],
                      [
                        "19:00",
                        "Nikoh marosimi",
                      ],
                      [
                        "21:00",
                        "To‘y dasturi",
                      ],
                      [
                        "22:00",
                        "Tort 🎂",
                      ],
                    ].map(
                        (
                            [time, text],
                            index
                        ) => (

                            <div
                                key={index}
                                className="timeline_item"
                            >
                              <b>
                                {time}
                              </b>

                              <span>
                        {text}
                      </span>
                            </div>

                        )
                    )}

                  </div>

                  <motion.img
                      src={ring}
                      className="ring"
                      variants={imgVariant}
                      initial="hidden"
                      whileInView="visible"
                      alt=""
                  />

                </motion.section>

                {/* ==================================================
                FOOTER
            ================================================== */}

                <section
                    className="footer"
                    style={{
                      backgroundImage: `url(${bird})`,
                    }}
                ></section>

              </div>
          )}
        </AnimatePresence>
      </>
  );
}

export default App;