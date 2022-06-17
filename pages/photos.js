import { Container } from "react-bootstrap";
import Wrapper from '../components/wrapper';
import Navigator from "../components/Navigator";
import ImageContainer from "../components/ImageContainer";
import Footer from '../components/Footer'
import Link from 'next/link';

export default function Photos() {
  return (
    <Wrapper>
      <div><h1>Photos</h1></div>
      <Navigator page={'photos'} />
      <ImageContainer />
      <Footer />
    </Wrapper>
  );
}
