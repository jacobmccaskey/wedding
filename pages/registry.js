import Wrapper from "../components/wrapper";
import Navigator from "../components/Navigator";
import Image from "next/image";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import Footer from "../components/Footer";
import { useState } from "react";
import { blueGrey } from "@mui/material/colors";

const styles = {
  container: {
    // textAlign: "left",
    paddingTop: "1rem",
    // border: "1x solid darkgrey",
    // borderRadius: "3px",
    minHeight: "100vh",
    marginLeft: "1rem",
    marginRight: "1rem",
  },
  centerDiv: {
    textAlign: "center",
    margin: "auto",
  },
  text: {
    color: "black",
    // marginLeft: "1rem",
    // marginRight: "1rem",
  },
  card: {
    display: "flex",
    maxWidth: "600px",
    margin: "auto",
    // border: "1px solid darkgrey",
    borderRadius: "8px",
    boxShadow: "0 3px 25px 0 rgb(48 55 66 / 5%)",
    marginBottom: "1rem",
  },
  imageContainer: {
    width: "100%",
    height: "100%",
    position: "relative",
    // textAlign: "left",
  },
};

export default function Registry() {
  const [selection, setSelect] = useState({});
  const handleChange = (e) => {
    setSelect((cart) => ({ ...cart, [e.target.name]: e.target.value }));
  };
  return (
    <Wrapper>
      <div>
        <h1>Registry</h1>
      </div>
      <Navigator page={"registry"} />
      <div style={styles.container}>
        {/* <div style={styles.centerDiv}> */}
        <h2 style={{ ...styles.text, color: "darkgrey" }}>Greetings</h2>
        {/* </div> */}
        <p style={{ ...styles.text, fontSize: "16px" }}>
          Hello friends and family, We are honored you will share in our special
          day! We're lucky to already have a home full of everything we need, so
          please enjoy browsing our Honeyfund wish list, where you can
          contribute funds to our dream honeymoon!
        </p>
        <Card
          header="Gift Any Amount"
          text="Enter the amount you'd like to give"
          price="0"
          name="gift"
          imagePath="/images/present.jpeg"
          value={selection.gift}
          handleChange={handleChange}
        />
        <Card
          header="Dinner for Two"
          name={"dinner"}
          value={selection.dinner}
          text="Buy us dinner!!!"
          price="80"
          imagePath="/images/present.jpeg"
          handleChange={handleChange}
        />
        <CheckoutContainer />
      </div>
      <Footer />
    </Wrapper>
  );
}
const CheckoutContainer = ({ selection, handleCheckout }) => {
  return (
    <div style={{ textAlign: "right", maxWidth: "600px", margin: "auto" }}>
      <Button
        // disabled={JSON.stringify(selection) === "{}" ? true : false}
        variant="outlined"
        style={{ borderColor: "darkgrey", color: "darkgrey", marginRight: '15px' }}
      >
        Checkout
      </Button>
    </div>
  );
};

const Card = ({
  price,
  text,
  header,
  imagePath,
  value,
  handleChange,
  name,
}) => {
  return (
    <div style={styles.card}>
      {/* picture container */}
      <div style={{ flex: 9, textAlign: "left" }}>
        <div style={{ display: "flex" }}>
          <div style={{ flex: 1 }}>
            <div style={{ ...styles.imageContainer }}>
              <Image
                src={imagePath}
                alt="cover"
                layout="fill"
                objectFit="contain"
                // blurDataURL="true"
              />
            </div>
          </div>
          {/* info container */}
          <div style={{ flex: 2, marginLeft: "1rem" }}>
            <p style={{ fontSize: "20px", margin: 0 }}>{header}</p>
            <p style={{ color: "darkgrey", margin: "5px 0 0 0" }}>{text}</p>
            <p
              style={{
                color: "darkgrey",
                // textDecoration: "underline",
                fontSize: "20px",
                margin: "5px 0 0 0",
              }}
            >
              ${price}
            </p>
          </div>
        </div>
      </div>
      {/* price and checkout container */}
      <div
        style={{
          flex: 3,
          fontWeight: 600,
          fontSize: "20px",
          textAlign: "center",
          verticalAlign: "middle",
          marginTop: "1rem",
          // color: "darkgrey",
        }}
      >
        <FormControl sx={{ m: 1, minWidth: 100 }} size="small">
          {/* <InputLabel id="demo-simple-select-label">Amount</InputLabel> */}
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={value}
            name={name}
            // label="amount"
            onChange={handleChange}
          >
            <MenuItem value={0}>0</MenuItem>
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
          </Select>
        </FormControl>
        {/* </Box> */}
      </div>
    </div>
  );
};
