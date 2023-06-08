import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Next.JS | Practice</title>
        <meta name="keyword" content="ninjas"/>
      </Head>
      <div className="p">
        <h1>Homepage</h1>
        <br/>
        <p>Lorem ipsum dolor sit amet. Ut rerum inventore et explicabo alias ad dolores illo et fuga quaerat et temporibus sunt. Sed impedit enim a veniam facilis quo porro molestiae ea iste exercitationem qui praesentium error. Et corporis molestiae est illum consequatur 33 dolores dolores non aliquam dolor. Non odit corrupti hic optio quis qui ducimus labore eos quaerat nihil?</p>
        <br/>
        <p>Lorem ipsum dolor sit amet. Ut rerum inventore et explicabo alias ad dolores illo et fuga quaerat et temporibus sunt. Sed impedit enim a veniam facilis quo porro molestiae ea iste exercitationem qui praesentium error. Et corporis molestiae est illum consequatur 33 dolores dolores non aliquam dolor. Non odit corrupti hic optio quis qui ducimus labore eos quaerat nihil?</p>
     </div>
    </>
  )
}
