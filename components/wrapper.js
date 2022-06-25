import Container from "react-bootstrap/Container";
import Footer from "./Footer";

export default function Wrapper({ children }) {
  return (
    <main style={{ textAlign: "center", minHeight: '90vh' }}>
      <Container style={{ maxWidth: "1110px", margin: "auto" }}>
        {children}
      </Container>
      {/* <Footer /> */}
    </main>
  );
}
