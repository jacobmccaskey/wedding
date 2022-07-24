// import React from "react";
// import { useAppContext } from "../StateManager";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Collapse } from "@mui/material";
// import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navigator(props) {
  // const state = useAppContext();
  const [sticky, setSticky] = useState(false);
  const { page } = props;
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
  const getStickyAndTransform = () => {};
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
      <Collapse in={sticky}>
        <div style={{ height: "0.3rem" }}></div>
      </Collapse>

      <Link href="/" passHref>
        <span
          className="linkbtn"
          style={page === "home" ? { borderBottom: "2px solid #343436" } : null}
        >
          Home
        </span>
      </Link>
      {/* <Link href="/travel" passHref>
        <span className="linkbtn" style={page === 'travel' ? {borderBottom: '2px solid #343436'} : null}>Travel</span>
      </Link> */}
      <Link href="/photos" passHref>
        <span
          className="linkbtn"
          style={
            page === "photos" ? { borderBottom: "2px solid #343436" } : null
          }
        >
          Photos
        </span>
      </Link>
      <Link href="/qa" passHref>
        <span
          className="linkbtn"
          style={page === "qa" ? { borderBottom: "2px solid #343436" } : null}
        >
          Q+A
        </span>
      </Link>
      <Link href="/registry" passHref>
        <span
          className="linkbtn"
          style={
            page === "registry" ? { borderBottom: "2px solid #343436" } : null
          }
        >
          Registry
        </span>
      </Link>

      <Collapse in={sticky}>
        <div style={{ height: "0.3rem" }}></div>
      </Collapse>
    </div>
  );
}
