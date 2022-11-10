import Wrapper from "../../components/wrapper";
import Navigator from "../../components/Navigator";
import Image from "next/image";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import {
  Card as MuiCard,
  Typography,
} from "@mui/material";
import Select from "@mui/material/Select";
import LoadingButton from "@mui/lab/LoadingButton";
import Input from "@mui/material/Input";
import Footer from "../../components/Footer";
import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import EmailProvider from "../../components/EmailProvider";
import Header from "../../components/Header";
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  "pk_live_51LEXi5GfXTCVGAGqIcx7ErN4pfP9UxOCnnqzLZMBdzrR7p2fj2AdgqeyBQ8TeDbQHKJKq2l0447wLOrkzFbzbrXm00hvExJSIZ"
);

const styles = {
  container: {
    paddingTop: "1rem",
    minHeight: "90vh",
    marginLeft: "1rem",
    marginRight: "1rem",
  },
  centerDiv: {
    textAlign: "center",
    margin: "auto",
  },
  text: {
    color: "black",
    maxWidth: "600px",
    margin: "auto",
    paddingBottom: "1rem",
  },
  card: {
    maxWidth: "600px",
    margin: "auto",
    minHeight: "115px",
  },
  imageContainer: {
    width: "100%",
    height: "150px",
    position: "relative",
    textAlign: "left",
  },
};

export default function Registry() {
  const [selection, setSelect] = useState({});
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    setSelect((cart) => ({ ...cart, [e.target.name]: e.target.value }));
  };
  return (
    <Wrapper>
      <Header />
      <Navigator page={"registry"} />
      <div style={styles.container}>
        <h2 style={{ ...styles.text, color: "darkgrey" }}>J&A</h2>
        <hr style={{ maxWidth: "600px" }} />
        <p style={{ ...styles.text, fontSize: "18px" }}>
          Hello friends and family, We are honored you will share in our special
          day! We&apos;re lucky to already have a home full of everything we
          need, so please enjoy browsing our <i>Honeyfund</i> wish list, where
          you can contribute to an experience for our dream honeymoon!
        </p>
        <EmailProvider />
        <Card
          header="Gift Any Amount"
          text="Enter any amount you'd like to give"
          price={null}
          name="price_1LS51QGfXTCVGAGqfgxFEJAs"
          imagePath="/images/present.jpeg"
          value={selection.price_1LS51QGfXTCVGAGqfgxFEJAs}
          handleChange={handleChange}
          count={null}
        />

        <Card
          header="First Class Upgrade"
          name={"price_1LS4zUGfXTCVGAGquDU0WuFX"}
          value={selection.price_1LS4zUGfXTCVGAGquDU0WuFX}
          text="Help us upgrade to first class! We all know how  flying can be."
          price="30"
          imagePath="/images/airplane.jpeg"
          handleChange={handleChange}
          count={4}
        />

        <Card
          header="Romantic Dinner for Two"
          name={"price_1LS4zfGfXTCVGAGqX47B2d8h"}
          value={selection.price_1LS4zfGfXTCVGAGqX47B2d8h}
          text="Contribute to a unique culinary experience."
          price="40"
          imagePath="/images/dinner.jpeg"
          handleChange={handleChange}
          count={5}
        />
        <Card
          header="Couples Massage"
          name={"price_1LS4znGfXTCVGAGqSqgVKV3U"}
          value={selection.price_1LS4znGfXTCVGAGqSqgVKV3U}
          text="Help us relax."
          price="15"
          imagePath="/images/message.jpeg"
          handleChange={handleChange}
          count={14}
        />
        <Card
          header="Day on Gili Island"
          name={"price_1LS517GfXTCVGAGqFgaiM7Q2"}
          value={selection.price_1LS517GfXTCVGAGqFgaiM7Q2}
          text="Boat ride from Lombok to Gili and back. Snorkeling at Gili Trawangan and Gili Meno, and a bicycle ride around the island!"
          price="30"
          imagePath="/images/fish.jpeg"
          handleChange={handleChange}
          count={10}
        />
        <Card
          header="Doggy Daycare"
          name={"price_1LS51EGfXTCVGAGqOPTBkXDz"}
          value={selection.price_1LS51EGfXTCVGAGqOPTBkXDz}
          text="Help our sweet puppy feel safe while we are away."
          price="20"
          imagePath="/images/dog.png"
          handleChange={handleChange}
          count={12}
        />
        <Card
          header="Local Driver"
          name={"price_1LS51JGfXTCVGAGq0WWx22tO"}
          value={selection.price_1LS51JGfXTCVGAGq0WWx22tO}
          text="Help us live in the fast lane."
          price="15"
          imagePath="/images/car.jpeg"
          handleChange={handleChange}
          count={10}
        />
        <Card
          header="Snorkeling"
          name={"price_1LEg7QGfXTCVGAGqATBWofR7"}
          value={selection.price_1LEg7QGfXTCVGAGqATBWofR7}
          text="Help Ashley live her best life."
          price="20"
          imagePath="/images/snorkling.png"
          handleChange={handleChange}
          count={4}
        />
        <Card
          header="Honeymoon Resort Stay"
          name={"price_1LEhD3GfXTCVGAGq40gk4sqU"}
          value={selection.price_1LEhD3GfXTCVGAGq40gk4sqU}
          text="Contribute to our romantic getaway."
          price="30"
          imagePath="/images/resort.jpeg"
          handleChange={handleChange}
          count={15}
        />

        <CheckoutContainer
          selection={selection}
          loading={loading}
          setLoading={setLoading}
        />
      </div>
      <Footer />
    </Wrapper>
  );
}
const CheckoutContainer = ({ selection, loading, setLoading }) => {
  const handleCheckout = async (e) => {
    setLoading(true);
    let lineItems = [];
    for (const itemKey in selection) {
      if (selection[itemKey] && +selection[itemKey] !== 0) {
        try {
          selection[itemKey] = selection[itemKey].split(".")[0];
        } catch (err) {}
        lineItems.push({ price: itemKey, quantity: +selection[itemKey] });
      }
    }
    if (!lineItems.length) {
      console.log("rejecting sale");
      return setLoading(false);
      //display error
    }
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
      lineItems: lineItems,
      mode: "payment",
      successUrl: window.location.href + "/success",
      cancelUrl: window.location.href,
    });
    if (error) {
      console.log(error);
    }
  };
  return (
    <div style={{ textAlign: "right", maxWidth: "600px", margin: "auto" }}>
      <LoadingButton
        variant="outlined"
        style={{
          borderColor: "darkgrey",
          color: "darkgrey",
          width: "100%",
        }}
        onClick={handleCheckout}
        loading={loading}
        loadingPosition="end"
      >
        Checkout
      </LoadingButton>
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
  count,
}) => {
  let menuItemsJSX = [];
  let a = 0;
  while (a <= count) {
    menuItemsJSX.push(
      <MenuItem value={a} key={a}>
        {a}
      </MenuItem>
    );
    a = a + 1;
  }

  return (
    <MuiCard style={{ ...styles.card, marginBottom: "1rem" }} raised>
      <div style={{ display: "flex" }}>
        {/* picture container */}
        <div style={{ flex: 9, textAlign: "left", marginTop: "1rem" }}>
          <div style={{ display: "flex" }}>
            <div style={{ flex: 2 }}>
              <div
                style={{
                  ...styles.imageContainer,
                }}
              >
                <Image
                  src={imagePath}
                  alt="cover"
                  layout="fill"
                  objectFit="contain"
                  blurDataURL
                  placeholder="blur"
                />
              </div>
            </div>
            {/* info container */}
            <div style={{ flex: 2, marginLeft: "1rem" }}>
              <Typography
                sx={{ fontSize: 18 }}
                textAlign={"left"}
                marginRight={"10px"}
                maxWidth={"170px"}
                color="text.secondary"
                gutterBottom
              >
                {header}
              </Typography>

              <Typography
                sx={{ fontSize: 16 }}
                textAlign={"left"}
                marginRight={"10px"}
                maxWidth={"170px"}
                color="text.primary"
                gutterBottom
              >
                {text}
              </Typography>
              <p
                style={{
                  color: "darkgrey",
                  // textDecoration: "underline",
                  fontSize: "20px",
                  margin: "5px 0 0 0",
                }}
              >
                {price ? `$${price}` : null}
              </p>
            </div>
          </div>
        </div>
        {/* price and checkout container */}
      </div>
      <div
        style={{
          fontWeight: 600,
          fontSize: "20px",
          textAlign: "right",
          verticalAlign: "middle",
          marginTop: "1rem",
        }}
      >
        {count ? (
          <FormControl sx={{ m: 1, minWidth: 100 }} size="small">
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={value}
              name={name}
              onChange={handleChange}
            >
              {menuItemsJSX}
            </Select>
          </FormControl>
        ) : (
          <Input
            variant="outlined"
            startAdornment="$"
            size="small"
            name={name}
            value={value}
            type="number"
            style={{marginBottom: '1rem'}}
            onChange={handleChange}
          />
        )}
      </div>
    </MuiCard>
  );
};

