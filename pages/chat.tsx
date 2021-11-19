import Head from 'next/head';
import { Widget } from 'react-typeform-embed';
import styled from 'styled-components';

export const EmbedIframe = styled.iframe<{ minHeight?: string }>`
  width: 100vw;
  min-height: ${(props) => props.minHeight};
  height: 100vh;
`;

const Chat = () => {
  return (
    <>
      <Head>
        <title>Donemo | Contacto</title>
      </Head>
      <EmbedIframe
        id='typeform-full'
        frameBorder='0'
        minHeight='500px'
        src={`https://form.typeform.com/to/${'KHpR7Nfc'}?typeform-medium=embed-snippet`}
        style={{
          position: 'relative',
          left: '0',
          right: '0',
          bottom: '0',
          top: '0',
          border: '0',
        }}
      />
      <script
        type='text/javascript'
        src='https://embed.typeform.com/embed.js'
      ></script>
    </>
  );
};

export default Chat;
