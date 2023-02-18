import Head from 'next/head'
import Image from 'next/image'
import Profile from '@/public/images/profile.jpeg'
import Link from '@/components/link.js'
import { useState } from 'react'

import TikTok from '@/public/images/tiktok.png'
import YouTube from '@/public/images/youtube.webp'
import Instagram from '@/public/images/instagram.png'

export default function Home() {

  return (
    <>
      <Head>
        <title>S P H E</title>
        <meta name="description" content="Check out my Social Media Accounts" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div class='bg-gradient-to-r from-black to-[#101010]  h-screen flex flex-col justify-center items-center text-white'>
      <Image
            src={Profile}
            className='w-24 rounded-full m-4 shadow-lg transition-all'
          />
        <h1 className='font-bold text-lg'>@sphe.exe</h1>
        <h2 className='text-[18px] m-1'>Video Editor, Coder</h2>

      <div class="m-5 w-[300px]">
        <Link Logo={TikTok} Name={'TikTok'} Link={"https://www.tiktok.com/@empire_cord"}/>
        <Link Logo={YouTube} Name={'YouTube'} Link={"https://www.youtube.com/@PositiveMusculinity"}/>
        <Link Logo={Instagram} Name={'Instagram'} Link={"https://www.instagram.com/sphe.exe/"}/>
      </div>
      <h1 className='text-[25px] selection:bg-black'>📬</h1>
  </div>
    </>
  )
}
