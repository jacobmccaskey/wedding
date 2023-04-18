import React, { useState} from "react";
import Image from "next/image";
import { Grid, Box } from "@mui/material";
import { SRLWrapper } from "simple-react-lightbox";
import { photos } from "./photos";
const lightboxOptions = {
  caption : {showCaption: false},
  buttons: {
    backgroundColor: 'rgba(30,30,36,0.8)',
    iconColor: 'rgba(255, 255, 255, 0.8)',
    iconPadding: '5px',
    showAutoplayButton: true,
    showCloseButton: true,
    showDownloadButton: false,
    showFullscreenButton: true,
    showNextButton: true,
    showPrevButton: true,
    showThumbnailsButton: false,
    size: '25px'
  },
  thumbnails: {showThumbnails: false}
}
export default function ImageContainer() {

  return (
    <div style={{ maxWidth: "800px", textAlign: "center", margin: "auto" }}>
      <SRLWrapper options={lightboxOptions}>
      <Grid
        container
        spacing={2}
        columns={{ xs: 6, md: 12 }}
        alignItems={"center"}
      >
        {photos.map((photo, idx) => {
          return (
            <Grid item xs={6} md={6} key={'photo'+idx}>
              <div
                style={{ position: "relative", width: "auto", height: "450px" }}
              >
                <Image
                  src={photo.src}
                  alt="cover"
                  layout="fill"
                  objectFit="contain"
                  placeholder="blur"
                  blurDataURL
                />
              </div>
            </Grid>
          );
        })}
      </Grid>
      </SRLWrapper>
    </div>
  );
}
