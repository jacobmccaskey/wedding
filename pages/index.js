import Head from "next/head";
import Image from "next/image";
import Wrapper from "../components/wrapper";
import { useState, useEffect } from "react";
import { useAppContext } from "../StateManager";
import Navigator from '../components/Navigator'

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
    <div>
      <Head>
        <title>Mr. And Mrs. McCaskey</title>
        <meta name="description" content="McWedding App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Wrapper>
        {/* <MobileNavBar /> */}
        <div className="main_photo_container">
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "15vw",
              textAlign: "center",
            }}
            className="main_photo"
          >
            <Image
              src="/images/banner.webp"
              alt="banner"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
        <h1 style={{ marginBottom: "0.5rem" }} className="banner-txt">
          Jacob and Ashley McCaskey
        </h1>
        <p style={{ fontSize: "20px", color: "darkgrey", marginTop: 0 }}>
          BROOKINGS, OR
        </p>
        <Navigator page={'home'} />
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
            placeholder="blur"
            blurDataURL
          />
        </div>
        <h2
          style={{
            letterSpacing: "4px",
            fontWeight: 500,
            marginBottom: 0,
            fontSize: "28px",
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
        <h2 style={state.isMobile ? {fontSize: '15px'} : null}>{countdown}</h2>
        <div
          style={{
            padding: "0 18px 18px",
            fontSize: "60px",
            letterSpacing: "6px",
            fontWeight: 300,
            borderBottom: "1px solid #343436",
            color: "lightgrey",
            fontFamily: "Taviraj",
          }}
        >
          <p>J&A</p>
          <hr />
        </div>
      </Wrapper>
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
  let value =
    days + "days " + hours + "hrs " + minutes + "min " + seconds + "sec ";
  return value;
}
