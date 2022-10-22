import Head from 'next/head';
import { useEffect, useState } from 'react';
import { Feed } from '../components/Feed/Feed';
import { ContactModal } from '../components/Modal/ContactModal';
import { PostModal } from '../components/Modal/PostModal';
import { useNavbarData } from '../context/NavbarData';

const Home = () => {
  const [pages, setPages] = useState([1]);
  const [infinite, setInfinite] = useState(true);
  const [showPostModal, setShowPostModal] = useState(false);

  const { openContactModal, setOpenContactModal } = useNavbarData();

  useEffect(() => {
    let wait = false;
    const infiniteScroll = () => {
      if (infinite) {
        const scroll = window.scrollY;
        const pageHeight = document.body.offsetHeight - window.innerHeight;
        if ((scroll > pageHeight * 0.75) & !wait) {
          setPages(pages => [...pages, pages.length + 1]);
          wait = true;
          setTimeout(() => {
            wait = false;
          }, 500);
        }
      }
    };

    window.addEventListener('wheel', infiniteScroll);
    window.addEventListener('scroll', infiniteScroll);

    return () => {
      window.removeEventListener('wheel', infiniteScroll);
      window.removeEventListener('scroll', infiniteScroll);
    };
  }, [infinite]);

  return (
    <>
      <Head>
        <title>Rockr Blog</title>
      </Head>
      
      {pages.map(page => (
        <Feed key={page} page={page} setInfinite={setInfinite} />
      ))}
      {openContactModal && <ContactModal />}
      {showPostModal && <PostModal />}
    </>
  );
};

export default Home;
