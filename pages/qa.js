import Wrapper from "../components/wrapper";
import Navigator from "../components/Navigator";
import Footer from "../components/Footer";

const styles = {
  container: { textAlign: "left", margin: 25 },
  header: {
    color: "darkgrey",
    fontSize: "25px",
    fontWeight: 500,
    marginBottom: 0,
  },
  body: { marginTop: 10, fontSize: "18px" },
};

export default function QA() {
  return (
    <Wrapper>
      <div style={{ minHeight: "85vh" }}>
        <div>
          <h1>Q & A</h1>
        </div>
        <Navigator page={"qa"} />
        {/* <div><p>Coming Soon!</p></div> */}
        <Card
          header="Are We Invited?"
          text={`We will contact you with details regarding the ceremony and whats involved.
                  Please keep in mind this is not a traditional wedding, it is an adventure elopement. 
                  We do have a limit of 15 people that can come, which isn't a lot of people. If you are 
                  interested in coming, let us know! Keep in mind though,
                  coming to the ceremony will require a lot of travel.`}
        />
        <Card
          header="What Travel is involved?"
          text={`A lot, but let's be honest, you are not going anyway.`}
        />
        <Card
          header="What lodging is available in the area?"
          text={`Okay seriously this is getting old. You are not going.`}
        />
        <Card
          header="When is it?"
          text={`June 8, 2023. Let us know if you plan on going so we can change our date the week before and leave you high and dry with a non refundable plane ticket. God Bless!`}
        />
      </div>
      <Footer />
    </Wrapper>
  );
}
const Card = ({ text, header }) => {
  return (
    <div style={styles.container}>
      <p style={styles.header}>{header}</p>
      <p style={styles.body}>{text}</p>
    </div>
  );
};
