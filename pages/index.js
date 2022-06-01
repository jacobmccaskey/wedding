import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Container from "react-bootstrap/Container";
import { useState, useEffect } from "react";
import { useAppContext } from "../StateManager";

const weddingDate = new Date("Jun 8, 2023 15:00:00").getTime();

export default function Home() {
  const [countdown, setCountdown] = useState();
  var state = useAppContext();
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

      <main style={{ textAlign: "center" }}>
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "15vw",
            textAlign: "center",
          }}
        >
          <Image
            src="/images/banner.webp"
            alt="banner"
            layout="fill"
            objectFit="contain"
          />
        </div>
        {/* <h1 className={styles.description}>Mr. And Mrs. Spendin Money'</h1> */}
        <h1 style={{marginBottom:'0.5rem'}}>Mr and Mrs. Spendin Money'</h1>
        <p style={{fontSize:'20px', color: 'darkgrey', marginTop: 0}}>BROOKINGS, OR</p>
        <Navigator />
        <div
          style={{
            position: "relative",
            width: "auto",
            height: "600px",
            textAlign: "center",
            objectAlign: "center",
          }}
        >
          <Image
            src="/images/cover.jpg"
            alt="cover"
            // height={'100%'}
            // width={'100%'}
            layout="fill"
            objectFit="contain"
          />
        </div>
        <h2
          style={{
            letterSpacing: "4px",
            fontWeight: 500,
            marginBottom: 0,
            fontSize: '28px'
          }}
        >
          WEDDING DAY
        </h2>
        <h3
          style={{
            letterSpacing: "2px",
            fontSize: "22px",
            fontWeight: 200,
            marginTop: 0,
          }}
        >
          JUNE 8, 2023
        </h3>
        <h1>{countdown}</h1>
        <div
        style={{
          padding: '0 18px 18px',
          fontSize: '60px',
          letterSpacing: '6px',
          fontWeight: 300,
          borderBottom: '1px solid #343436',
          color: 'lightgrey',
          fontFamily: 'Taviraj'
        }}
        ><p>J&A</p><hr/></div>
      </main>
    </div>
  );
}


function Navigator () {
  return (
    <div style={{marginBottom:'1rem'}}>
      <Link href='/' passHref><span className='linkbtn' style={{borderBottom: '2px solid #343436'}}>Home</span></Link>
      <Link href='/travel' passHref><span className='linkbtn'>Travel</span></Link>
      <Link href='/photos' passHref><span className='linkbtn'>Photos</span></Link>
      <Link href='/qa' passHref><span className='linkbtn'>Q+A</span></Link>
      <Link href='/registry' passHref><span className='linkbtn'>Registry</span></Link>
    </div>
  )
}

function formatTime(timeStamp) {
  var days = Math.floor(timeStamp / (1000 * 60 * 60 * 24));
  var hours = Math.floor(
    (timeStamp % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var minutes = Math.floor((timeStamp % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeStamp % (1000 * 60)) / 1000);
  let value =
    days + "days " + hours + "hrs " + minutes + "min " + seconds + "sec ";
  return value;
}
