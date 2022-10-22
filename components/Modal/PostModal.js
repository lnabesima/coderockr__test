import styles from './Post.module.scss';

export const PostModal = ({ imageUrl, date, author, title, article }) => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <img src={imageUrl} alt={title} className={styles.image} />
        <div className={styles.postInfo}>
          <p className={styles.postInfo__date}>{date}</p>
          <p className={styles.postInfo__author}>{author}</p>
          <h1 className={styles.postInfo__title}>{title}</h1>
        </div>
      </header>
      <section className={styles.article} dangerouslySetInnerHTML={{ __html: article }} />
    </div>
  );
};
