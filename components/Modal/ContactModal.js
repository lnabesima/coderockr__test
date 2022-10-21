import { useState } from 'react';
import { Button } from '../Basics/Button';
import { Input } from '../Basics/Input';
import { TextArea } from '../Basics/TextArea';
import styles from './Modal.module.scss';

export const ContactModal = () => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    if (!name || !email || !message) return;
    setLoading(true);
    const comment = { name, email, tel, message };

    setName('');
    setEmail('');
    setTel('');
    setMessage('');
    /*chamar a função para postar comentários aqui*/

    setLoading(false);
  };

  return (
    <section className={styles.contactModal}>
      <div className={styles.wrapper}>
        <img src='/close.svg' alt='' className={styles.close} />
        <h2 className={styles.title}>Contact</h2>
        <form action='' className={styles.form}>
          <Input
            type='text'
            label='Name'
            placeholder='Fill your full name'
            id='name'
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
          <Input
            type='email'
            label='E-mail'
            placeholder='Fill a valid e-mail'
            id='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <Input
            type='tel'
            label='Phone'
            placeholder='Fill your phone'
            id='phone'
            value={tel}
            onChange={e => setTel(e.target.value)}
            pattern='([0-9]{2})[0-9]{5}-[0-9]{4}'
          />
          <TextArea
            label='Post'
            placeholder='Hello...'
            id='post'
            required
            value={message}
            onChange={e => setMessage(e.target.value)}
          />

          {loading ? (
            <Button label='Submit' onClick={handleSubmit} disabled />
          ) : (
            <Button label='Submit' onClick={handleSubmit} />
          )}
        </form>
      </div>
    </section>
  );
};
