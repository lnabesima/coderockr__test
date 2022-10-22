import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { usePostsContext } from '../context/PostsData';
import { PostModal } from '../components/Modal/PostModal';
import { useNavbarData } from '../context/NavbarData';
import { ContactModal } from '../components/Modal/ContactModal';

const Post = () => {
  const [loading, setLoading] = useState(false);
  const [postData, setPostData] = useState();
  const { openContactModal, setOpenContactModal } = useNavbarData();
  const router = useRouter();
  const postId = router.query.id;

  const { getPost } = usePostsContext();

  useEffect(() => {
    setLoading(true);
    getPost(postId)
      .then(json => setPostData(json))
      .then(setLoading(false));
  }, [getPost, postId]);

  if (loading) return null;

  if (postData)
    return (
      <>
        {openContactModal && <ContactModal />}
        <PostModal
          id={postData.id}
          author={postData.author}
          title={postData.title}
          article={postData.article}
          date={postData.date}
          imageUrl={postData.imageUrl}
        />
      </>
    );
};

export default Post;
