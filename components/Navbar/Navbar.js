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
        <li className={styles.linkList__newPost}>
          <Link href='/newpost'>New Post</Link>
        </li>
      </ul>
    </div>
  );
};

export { Navbar };
