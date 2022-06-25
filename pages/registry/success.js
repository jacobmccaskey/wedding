import Wrapper from "../../components/wrapper";
import Footer from "../../components/Footer";
import Link from "next/link";
import Button from '@mui/material/Button'

export default function Success () {
    return (
        <Wrapper>
            <h1>PAYMENT SUCCESS!!</h1>
            <Link href="/" passHref>
        <Button className="linkbtn" variant='outlined'>
            Back To Home
        </Button>
      </Link>
            <Footer />
        </Wrapper>
    )
}