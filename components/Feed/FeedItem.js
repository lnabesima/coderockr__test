/* eslint-disable @next/next/no-img-element */
import styles from './Feed.module.scss';

const FeedItem = ({ author, title, article, imgUrl, type, ...props }) => {
  return (
    <div
      className={type === 'small' ? styles.smallCard : styles.bigCard}
      {...props}>
      <img
        src={imgUrl}
        alt=''
        className={
          type === 'small' ? styles.smallCard__img : styles.bigCard__img
        }
      />
      <div
        className={
          type === 'small'
            ? styles.smallCard__postInfo
            : styles.bigCard__postInfo
        }>
        <p className={styles.author}>{author}</p>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.article}>{article}</p>
      </div>
      <img src='/more.svg' alt='' className={styles.smallCard__moreButton} />
    </div>
  );
};
export { FeedItem };
