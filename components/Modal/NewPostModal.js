import { useState } from 'react';
import { useNavbarData } from '../../context/NavbarData';
import { Button } from '../Basics/Button';
import { Input } from '../Basics/Input';
import { TextArea } from '../Basics/TextArea';
import styles from './Modal.module.scss';

export const NewPostModal = () => {
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [post, setPost] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    if (!title || !author || !imgUrl || !post) return;
    setLoading(true);
    const post = { title, author, imgUrl, post };

    setTitle('');
    setAuthor('');
    setImgUrl('');
    setPost('');
    /*chamar a função para postar aqui*/

    setLoading(false);
  };

  return (
    <section className={styles.contactModalPost}>
      <div className={styles.wrapperPost}>
        <img
          src='/Photo.png'
          alt='Author profile picture'
          className={styles.profilePicture}
        />

        <h2 className={styles.titlePost}>New Post</h2>
        <form action='' className={styles.form}>
          <Input
            type='text'
            label='Title'
            placeholder='Fill the title'
            id='title'
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
          />
          <Input
            type='text'
            label='Author'
            placeholder='Fill the author name'
            id='author'
            value={author}
            onChange={e => setAuthor(e.target.value)}
            required
          />
          <Input
            type='text'
            label='Image URL'
            placeholder='Fill the image URL'
            id='imgUrl'
            value={imgUrl}
            onChange={e => setImgUrl(e.target.value)}
          />
          <TextArea
            label='Post'
            placeholder='Post...'
            id='post'
            required
            value={post}
            onChange={e => setPost(e.target.value)}
          />

          {loading ? (
            <Button label='Submit' newPost onClick={handleSubmit} disabled />
          ) : (
            <Button label='Submit' newPost onClick={handleSubmit} />
          )}
        </form>
      </div>
    </section>
  );
};
