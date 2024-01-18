import MainLayout from '@/layout/MainLayout';
import '@/styles/globals.css';
import '@/styles/globals.css';
import Navbar from '../components/Navbar';

export default function App({ Component, pageProps }) {
  return <MainLayout>{<Component {...pageProps} />}</MainLayout>;
}
