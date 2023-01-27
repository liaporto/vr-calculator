import Head from 'next/head';
import { Inter } from '@next/font/google';

import AmountInput from '../components/modules/VRCalculator/components/AmountInput';
import VRCalculator from '@/components/modules/VRCalculator';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Calculadora de VR</title>
        <meta name="description" content="Calculadora de V.R" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <h1>Calculadora de VR</h1>
      </header>
      <main>
        <VRCalculator />
      </main>
    </>
  );
}
