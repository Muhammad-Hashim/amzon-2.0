import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Banner from './layout/Banner/Banner';
import Product from './layout/Product/Product';
// import Banner from './layout/Banner/Banner';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="max-w-[1300px] m-auto h-auto ">
      <Banner />
      <Product/>
    </main>
  );
}



