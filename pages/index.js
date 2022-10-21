import { useEffect, useState } from 'react';
import { Feed } from '../components/Feed/Feed';
import { FeedItem } from '../components/Feed/FeedItem';

const Home = () => {
  const [pages, setPages] = useState([1]);
  const [infinite, setInfinite] = useState(true);

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
    {pages.map((page) => <Feed key={page} page={page} setInfinite={setInfinite}/>)}
    </>
  );
};

export default Home;
