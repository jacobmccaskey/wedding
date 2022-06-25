import { Container } from "react-bootstrap";
import Wrapper from '../components/wrapper';
import Navigator from "../components/Navigator";
import ImageContainer from "../components/ImageContainer";
import Footer from '../components/Footer'
import Link from 'next/link';

export default function Photos() {
  return (
    <Wrapper>
      <div style={{minHeight: '85vh'}}>
      <div><h1>Photos</h1></div>
      <Navigator page={'photos'} />
      {/* <ImageContainer /> */}
      <h2>Coming Soon!!!</h2>
      </div>
      <Footer />
    </Wrapper>
  );
}
