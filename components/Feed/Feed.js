import styles from './Feed.module.scss';
import { useEffect, useState } from 'react';
import { usePostsContext } from '../../context/PostsData';
import { FeedItem } from './FeedItem';

const Feed = ({ page, setInfinite }) => {
  const { getPosts } = usePostsContext();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getApiData = async () => {
      const data = await getPosts(page);
      setPosts(data);
      if (data && data.length < 6) setInfinite(false);
    };
    getApiData();
  }, [getPosts, page, setInfinite]);

  return (
    <div className={styles.feedWrapper}>
      {posts &&
        posts?.map((post, index) => (
          <FeedItem
            key={post.id}
            author={post.author}
            title={post.title}
            article={post.article}
            imgUrl={post.imageUrl}
            type={index === 2 || index === 5 ? 'big' : 'small'}
            data-position={index >= 3 ? 'reverse' : null}
          />
        ))}
    </div>
  );
};

export { Feed };
