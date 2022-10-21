import Link from 'next/link';
import { useNavbarData } from '../../context/NavbarData';
import styles from './Navbar.module.scss';

const Navbar = () => {
  const {
    openContactModal,
    setOpenContactModal,
    openNewPostModal,
    setOpenNewPostModal,
  } = useNavbarData();

  console.log(openContactModal);

  return (
    <div className={styles.navbar}>
      <p className={styles.logo}>Rockr Blog</p>
      <ul className={styles.linkList}>
        <li className={styles.linkList__link}>
          <Link href='/'>Posts</Link>
        </li>
        <li
          className={styles.linkList__link}
          onClick={() => setOpenContactModal(!openContactModal)}>
          Contact
        </li>
        <li
          className={styles.linkList__newPost}
          onClick={() => setOpenNewPostModal(!openNewPostModal)}>
          New Post
        </li>
      </ul>
    </div>
  );
};

export { Navbar };
