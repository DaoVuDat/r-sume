import type { AppProps } from 'next/app';
import { Layer } from '@/components/Layer';
import '@/styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layer>
      <Component {...pageProps} />
    </Layer>
  );
}

export default MyApp;
