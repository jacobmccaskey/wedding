import Image from "next/image";
import React from "react";

export default function Header() {
    return (
        <React.Fragment>
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
      <h2 style={{ marginBottom: "0.7rem" }} className="banner-txt">
        Jacob and Ashley McCaskey
      </h2>
      </React.Fragment>
    )
}