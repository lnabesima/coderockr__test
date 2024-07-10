import Head from 'next/head';
import { NewPostModal } from '../components/Modal/NewPostModal';
import { ContactModal } from '../components/Modal/ContactModal';
import { useNavbarData } from '../context/NavbarData';

const NewPost = () => {
  const { openContactModal } = useNavbarData();

  return (
    <>
      <Head>
        <title>Rockr Blog - New Post</title>
      </Head>
      {openContactModal && <ContactModal />}
      <NewPostModal />
    </>
  );
};

export default NewPost;
