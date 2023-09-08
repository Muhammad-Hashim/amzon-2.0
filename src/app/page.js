import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Banner from './layout/Banner/Banner';
// import Banner from './layout/Banner/Banner';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="max-w-[1500px] bg-slate-500 m-auto h-auto ">
      <Banner />
    </main>
  );
}
