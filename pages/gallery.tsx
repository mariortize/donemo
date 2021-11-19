import Head from 'next/head';
import Image from 'next/image';
import MyGallery from '../components/gallery';
import Nav from '../components/nav/navbar';
import styles from '../styles/Home.module.css';
import styled from 'styled-components';

export default function Gallery() {
  const Main = styled.main`
    min-height: 100vh;
    padding: 0;
    flex: 1;
    justify-content: center;
    align-items: center;
    margin-top: 5rem;
  `;

  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Donemo</title>
          <meta name='description' content='Generated by create next app' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <Nav />
        {/* <main className={styles.main}> */}
        <h1 className={styles.title} style={{ marginTop: '5rem' }}>
          Gallery
        </h1>
        <p className={styles.description}>
          The best of the best works - showcased for you.
        </p>
        <Main>
          <MyGallery />
        </Main>
        {/* </main> */}

        <footer className={styles.footer}>
          <a
            href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            target='_blank'
            rel='noopener noreferrer'
          >
            by Maria Jose Ortiz
          </a>
        </footer>
      </div>
    </>
  );
}
