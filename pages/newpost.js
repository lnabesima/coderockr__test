import Head from 'next/head';
import { NewPostModal } from '../components/Modal/NewPostModal';

const NewPost = () => {
  return (
    <>
      <Head>
        <title>Rockr Blog - New Post</title>
      </Head>
      <NewPostModal />
    </>
  );
};

export default NewPost;
