import Link from 'next/link';
import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <p className={styles.logo}>Rockr Blog</p>
      <ul className={styles.linkList}>
        <li className={styles.linkList__link}>
          <Link href='/'>Posts</Link>
        </li>
        <li className={styles.linkList__link}>Contact</li>
        <li className={styles.linkList__newPost}>New Post</li>
      </ul>
    </div>
  );
};

export { Navbar };
