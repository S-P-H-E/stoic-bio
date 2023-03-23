import Head from 'next/head'
import Image from 'next/image'
import Profile from '@/public/images/profile.png'
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

  // Home Page Animation
  const profileAnimation = useSpring({
    from: { opacity: 0, transform: 'scale(0)' },
    to: { opacity: 1, transform: 'scale(1)' },
    delay: 10,
  });

  // Descripiton Animation
  const linksAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(130px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 550,
  });

  return (
    <>
      <Head>
        <title>@sphe.exe</title>
        <meta name="description" content="Check out my Social Media Accounts" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div class='h-screen flex flex-col justify-center items-center text-[#0A0A0A]'>
      <animated.div style={profileAnimation}>
        <Image
              src={Profile}
              className='w-24 rounded-full m-4 shadow-lg transition-all'
            />
      </animated.div>
      
      <h1 className='font-bold text-lg'>@sphe.exe</h1>
      <h2 className='text-[18px] mb-2'>Video Editor, Coder</h2>

      <Bio />
      
      <div class="m-4 w-[300px] sm:w-[400px] flex flex-col justify-center items-center">
        {/* <EmailList /> */}
        <Link Name={'Visit my website'} Link={"https://sphe.vercel.app/"}/>
        {/* <Link Logo={Discord} Name={'Join my discord community'} Link={"https://discord.gg/PBpeEV8cmC"}/> */}
      </div>

      <h1 className='text-[25px] selection:bg-transparent'>📬</h1>
  </div>
    </>
  )
}
