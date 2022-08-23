import Layout from '../components/Layout';

import Head from 'next/dist/shared/lib/head';
import '../styles/globals.scss';

const MyApp = ({ Component, pageProps }) => (
  <Layout>
    <Head>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet"/>
    </Head>
    <Component {...pageProps} />
  </Layout>
);

export default MyApp;
