import Wrapper from "../../components/wrapper";
import Footer from "../../components/Footer";
import Link from "next/link";
import Image from "next/image";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";

export default function Success() {
  return (
    <Wrapper>
      <h1>PAYMENT SUCCESS!!</h1>
      <div style={{ height: "80vh" }}>
        <h2 style={{ marginBottom: "10%" }}>Thank you!</h2>
        {/* <Grid container spacing={1} alignItems={"center"} style={{maxWidth: '700px', margin:'auto'}}>
          <Grid item xs={6}>
            <div
              style={{
                position: "relative",
                height: "400px",
                width: "auto",
                marginBottom: 10,
              }}
            >
              <Image
                src={"/images/snorkling.png"}
                alt="cover"
                layout="fill"
                objectFit="contain"
                placeholder="blur"
                blurDataURL
                onClick={(e) => console.log(e)}
              />
            </div>
          </Grid>
          <Grid item xs={6}>
            <div
              style={{
                position: "relative",
                height: "400px",
                width: "auto",
                marginBottom: 10,
              }}
            >
              <Image
                src={"/images/snorkling.png"}
                alt="cover"
                layout="fill"
                objectFit="contain"
                placeholder="blur"
                blurDataURL
                onClick={(e) => console.log(e)}
              />
            </div>
          </Grid>

        </Grid> */}
        <Link href="/" passHref>
          <Button className="linkbtn" variant="outlined">
            Back To Home
          </Button>
        </Link>
      </div>
      <Footer />
    </Wrapper>
  );
}
