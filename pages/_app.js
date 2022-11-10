import "../styles/globals.css";
import { AppWrapper } from "../StateManager";
import SimpleReactLightbox from 'simple-react-lightbox'

function MyApp({ Component, pageProps }) {
  return (
    <AppWrapper>
      <SimpleReactLightbox>
      <Component {...pageProps} />
      </SimpleReactLightbox>
    </AppWrapper>
  );
}

export default MyApp;
