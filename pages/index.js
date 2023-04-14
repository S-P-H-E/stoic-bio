import Head from 'next/head'
import Image from 'next/image'
import Profile from '@/public/images/profile.jpg'
import Link from '@/components/Links.js'
import { useState } from 'react'
import { useSpring, animated, config } from 'react-spring';

import TikTok from '@/public/images/tiktok.png'
import YouTube from '@/public/images/youtube.webp'
import Instagram from '@/public/images/instagram.png'
import Discord from '@/public/images/discord.png'
import Bio from '@/components/Bio'
import EmailList from '@/components/EmailList'

export default function Home() {

  return (
    <>
      <Head>
        <title>S T O I C</title>
        <meta name="description" content="Check out my Social Media Accounts" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div class='h-screen flex flex-col justify-center items-center text-white'>
      <div>
        <Image
              src={Profile}
              className='w-24 rounded-full m-4 shadow-xl transition-all grayscale'
            />
      </div>
      
      <h1 className='font-bold text-lg'>S T O I C</h1>
      <h2 className='text-[18px] mb-2 text-center'>&quot;Raw Action Solves Everything.<br /> Caution Breeds Fear.&quot;</h2>

      <Bio />
      
      <div class="m-4 w-[300px] sm:w-[400px] flex flex-col justify-center items-center">
        {/* <EmailList /> */}
        <Link Name={'Join my discord community'} Link={"https://sphe.vercel.app/"}/>
        <Link Name={'Get presets and packs'} Link={"https://sustainable-agency.vercel.app/"}/>
        {/* <Link Logo={Discord} Name={'Join my discord community'} Link={"https://discord.gg/PBpeEV8cmC"}/> */}
      </div>

      <h1 className='text-[25px] selection:bg-transparent'>🔗</h1>
  </div>
    </>
  )
}
