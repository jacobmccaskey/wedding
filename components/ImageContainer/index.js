import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import Image from "next/image";
import { Grid, Box } from "@mui/material";
import { photos } from "./photos";

export default function ImageContainer() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div style={{ maxWidth: "800px", textAlign: "center", margin: "auto" }}>
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
                  src={photo.src + '?nf_resize=smartcrop&w=392&h=450'}
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
    </div>
  );
}
