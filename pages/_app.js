import '../styles/globals.css';
import { Layout } from '../components/Layout/Layout';
import { PostsProvider } from '../context/PostsData';

function MyApp({ Component, pageProps }) {
  return (
    <PostsProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </PostsProvider>
  );
}

export default MyApp;
