import Wrapper from "../../components/wrapper";
import Navigator from "../../components/Navigator";
import Image from "next/image";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import Select from "@mui/material/Select";
import LoadingButton from "@mui/lab/LoadingButton";
import Input from "@mui/material/Input";
import Footer from "../../components/Footer";
import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  "pk_test_51LEXi5GfXTCVGAGqu1Z56KT8CrPHK2OYQwO9GwTJhE1d4Qm8DHmFQd172teDQRYUecDLylfDyaaaWzNuNT2SAYHx00qBhFDxfZ"
);

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
    maxWidth: '600px', 
    margin: 'auto',
    paddingBottom: '1rem'
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
  const [loading, setLoading] = useState(false);
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
        <h2 style={{ ...styles.text, color: "darkgrey" }}>J&A</h2>
        <hr style={{maxWidth: '600px'}} />
        <p style={{ ...styles.text, fontSize: "18px" }}>
          Hello friends and family, We are honored you will share in our special
          day! We're lucky to already have a home full of everything we need, so
          please enjoy browsing our Honeyfund wish list, where you can
          contribute funds to our dream honeymoon!
        </p>
        <CardWithInput
          header="Gift Any Amount"
          text="Enter the amount you'd like to give"
          price="0"
          name="price_1LEYTjGfXTCVGAGqeanEyYXO"
          imagePath="/images/present.jpeg"
          value={selection.price_1LEYTjGfXTCVGAGqeanEyYXO}
          handleChange={handleChange}
        />
        <Card
          header="Dinner for Two"
          name={"price_1LEYzJGfXTCVGAGqXyGo26g9"}
          value={selection.price_1LEYzJGfXTCVGAGqXyGo26g9}
          text="Buy us dinner!!!"
          price="80"
          imagePath="/images/present.jpeg"
          handleChange={handleChange}
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
        lineItems.push({ price: itemKey, quantity: +selection[itemKey] });
      }
    }
    if (!lineItems.length) {
      console.log('rejecting sale');
      return setLoading(false);
      //display error
    }
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
      lineItems: lineItems,
      mode: "payment",
      successUrl: window.location.href + '/success',
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

const CardWithInput = ({
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
              {/* ${price} */}
            </p>
          </div>
        </div>
      </div>
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
        <Box
          sx={{ m: 1, width: 100, textAlign: "center", margin: "auto" }}
          size="small"
        >
          <Input
            variant="outlined"
            startAdornment="$"
            name={name}
            value={value}
            type="number"
            onChange={handleChange}
          />
        </Box>
      </div>
    </div>
  );
};
