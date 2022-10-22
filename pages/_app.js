import '../styles/globals.css';
import { Layout } from '../components/Layout/Layout';
import { PostsProvider } from '../context/PostsData';
import { NavbarProvider } from '../context/NavbarData';

function MyApp({ Component, pageProps }) {
  return (
    <NavbarProvider>
      <PostsProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PostsProvider>
    </NavbarProvider>
  );
}

export default MyApp;
