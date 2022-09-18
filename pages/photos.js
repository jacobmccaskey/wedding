import { Container } from "react-bootstrap";
import Wrapper from '../components/wrapper';
import Navigator from "../components/Navigator";
import ImageContainer from "../components/ImageContainer";
import Image from "next/image";
import Footer from '../components/Footer'
import Header from "../components/Header";
import Link from 'next/link';

export default function Photos() {
  return (
    <Wrapper>
      <div style={{minHeight: '85vh'}}>
      <Header />
      <Navigator page={'photos'} />
      <ImageContainer />
      </div>
      <Footer />
    </Wrapper>
  );
}
