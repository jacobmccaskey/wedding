import { Container } from "react-bootstrap";
import Link from "next/link";

export default function Registry() {
  return (
    <Container style={{textAlign:'center', marginTop: '2rem'}}>
      <h1>Coming Soon!</h1>
      <Link href='/'><a>Back To Home</a></Link>
    </Container>
  );
}
