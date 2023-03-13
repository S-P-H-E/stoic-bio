import Head from 'next/head'
import Image from 'next/image'
import Profile from '@/public/images/profile.png'
import Link from '@/components/link.js'
import { useState } from 'react'

import TikTok from '@/public/images/tiktok.png'
import YouTube from '@/public/images/youtube.webp'
import Instagram from '@/public/images/instagram.png'
import Discord from '@/public/images/discord.png'

export default function Home() {

  return (
    <>
      <Head>
        <title>S P H E</title>
        <meta name="description" content="Check out my Social Media Accounts" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div class='h-screen flex flex-col justify-center items-center text-[#0A0A0A]'>
      <Image
            src={Profile}
            className='w-24 rounded-full m-4 shadow-lg transition-all'
          />
        <h1 className='font-bold text-lg'>@sphe.exe</h1>
        <h2 className='text-[18px] m-1'>Video Editor, Coder</h2>

      <div class="m-5 w-[300px]">
        <Link Logo={TikTok} Name={'TikTok'} Link={"https://www.tiktok.com/@sphe.exe"}/>
        <Link Logo={TikTok} Name={'Visit my website'} Link={"https://sphe.vercel.app/"}/>
        {/* <Link Logo={Discord} Name={'Join my discord community'} Link={"https://discord.gg/PBpeEV8cmC"}/> */}
      </div>
      <h1 className='text-[25px] selection:bg-transparent'>📬</h1>
  </div>
    </>
  )
}
