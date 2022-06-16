// import React from "react";
// import { useAppContext } from "../StateManager";
import { useState, useEffect } from "react";
import Link from "next/link";
// import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navigator() {
  // const state = useAppContext();
  const [sticky, setSticky] = useState(false);
  const styles = {
    sticky: {
      paddingBottom: "0.5rem",
      paddingTop: "1rem",
      top: 0,
      position: "sticky",
      zIndex: 1000,
      backgroundColor: "white",
    },
    fixed: { marginBottom: "1rem" },
  };

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => window.removeEventListener("scroll", isSticky);
  }, []);
  const isSticky = () => {
    try {
      let div = document.querySelector(".nav");
      let { y } = div.getBoundingClientRect();
      y <= 0.5 ? setSticky(true) : setSticky(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div style={sticky ? styles.sticky : styles.fixed} className="nav">
      <Link href="/" passHref>
        <span className="linkbtn" style={{ borderBottom: "2px solid #343436" }}>
          Home
        </span>
      </Link>
      <Link href="/travel" passHref>
        <span className="linkbtn">Travel</span>
      </Link>
      <Link href="/photos" passHref>
        <span className="linkbtn">Photos</span>
      </Link>
      <Link href="/qa" passHref>
        <span className="linkbtn">Q+A</span>
      </Link>
      <Link href="/registry" passHref>
        <span className="linkbtn">Registry</span>
      </Link>
    </div>
  );
}
