import Container from "react-bootstrap/Container";

export default function Wrapper({ children }) {
  return (
    <main style={{ textAlign: "center" }}>
      <Container style={{ maxWidth: "1110px", margin: "auto" }}>
        {children}
      </Container>
    </main>
  );
}
