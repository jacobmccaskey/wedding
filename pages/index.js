import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";

const weddingDate = new Date("Jun 8, 2023 15:00:00").getTime();

export default function Home() {
  const [countdown, setCountdown] = useState();
  useEffect(() => {
    let interval = setInterval(() => {
      const difference = weddingDate - new Date().getTime();
      const currentCount = formatTime(difference);
      setCountdown(currentCount);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Mr. And Mrs. McCaskey</title>
        <meta name="description" content="McWedding App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.description}>Mr. And Mrs. Spendin Money'</h1>
        <h3 className={styles.title}>{countdown}</h3>
      </main>
    </div>
  );
}

function formatTime(timeStamp) {
  var days = Math.floor(timeStamp / (1000 * 60 * 60 * 24));
  var hours = Math.floor(
    (timeStamp % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var minutes = Math.floor((timeStamp % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeStamp % (1000 * 60)) / 1000);
  let value = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  return value;
}
