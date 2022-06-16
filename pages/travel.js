import { Container } from "react-bootstrap";
// import MobileNavBar from "../components/MobileNavbar";
import Link from "next/link";

export default function Travel() {
  return (
    <Container style={{textAlign:'center', marginTop: '2rem'}}>
      {/* <MobileNavBar /> */}
      <h1>Coming Soon!</h1>
      <Link href='/'><a>Back To Home</a></Link>
    </Container>
  );
}
