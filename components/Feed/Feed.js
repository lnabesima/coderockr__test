import styles from './Feed.module.scss';
import { FeedItem } from './FeedItem';

const Feed = () => {
  return (
    <div className={styles.feedWrapper}>
      <FeedItem
        author='Haleigh Gorczany'
        title='Optio voluptatem autem quis.'
        article='<p>Ipsum doloremque est excepturi. Nulla sit ipsa consequuntur aspernatur occaecati animi sequi quam.'
        imgUrl='https://source.unsplash.com/640x640/?trees'
        type='small'
      />
      <FeedItem
        author='Haleigh Gorczany'
        title='Optio voluptatem autem quis.'
        article='<p>Ipsum doloremque est excepturi. Nulla sit ipsa consequuntur aspernatur occaecati animi sequi quam.'
        imgUrl='https://source.unsplash.com/640x640/?trees'
        type='small'
      />
      <FeedItem
        author='Haleigh Gorczany'
        title='Optio voluptatem autem quis.'
        article='<p>Ipsum doloremque est excepturi. Nulla sit ipsa consequuntur aspernatur occaecati animi sequi quam.'
        imgUrl='https://source.unsplash.com/640x640/?trees'
        type='big'
      />
      <FeedItem
        author='Haleigh Gorczany'
        title='Optio voluptatem autem quis.'
        article='<p>Ipsum doloremque est excepturi. Nulla sit ipsa consequuntur aspernatur occaecati animi sequi quam.'
        imgUrl='https://source.unsplash.com/640x640/?trees'
        type='small'
        data-position='reverse'
      />
      <FeedItem
        author='Haleigh Gorczany'
        title='Optio voluptatem autem quis.'
        article='<p>Ipsum doloremque est excepturi. Nulla sit ipsa consequuntur aspernatur occaecati animi sequi quam.'
        imgUrl='https://source.unsplash.com/640x640/?trees'
        type='small'
        data-position='reverse'
      />
      <FeedItem
        author='Haleigh Gorczany'
        title='Optio voluptatem autem quis.'
        article='<p>Ipsum doloremque est excepturi. Nulla sit ipsa consequuntur aspernatur occaecati animi sequi quam.'
        imgUrl='https://source.unsplash.com/640x640/?trees'
        type='big'
        data-position='reverse'
      />
    </div>
  );
};

export { Feed };
