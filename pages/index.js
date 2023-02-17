import Head from 'next/head'
import Image from 'next/image'
import Profile from '@/public/images/tate.jpeg'
import { useState } from 'react'

import Rumble from '@/public/images/rumble.png'
import Twitter from '@/public/images/twitter.webp'
import TRW from '@/public/images/trw.webp'

export default function Home() {
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  }

  return (
    <>
      <Head>
        <title>Cobra Tate</title>
        <meta name="description" content="Check out Andrew Tate's Social Media Accounts" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div class='bg-black h-screen flex flex-col justify-center items-center text-white'>
        {loading ? (
          <div className='w-24 bg-[#212121] h-24 rounded-full m-4 animate-pulse'></div>
        ) : (
          <Image src={Profile} className='w-24 rounded-full m-4' onLoad={handleImageLoad}/>
        )}
        <h1 className='font-bold text-lg'>@cobratate</h1>
        <h2 className='text-[18px] m-1'>Top G, Billionare</h2>

      <div class="m-5 w-[300px]">
          <button onClick={() => {event.preventDefault();window.open("https://rumble.com/c/TateSpeech", "_blank");}} className='w-[300px]'>
            <div className='bg-[#212121] rounded-full flex justify-center items-center p-3 my-3 transition-all hover:scale-110'>
              <Image src={Rumble} className='w-4 mx-1'/>
              <p>Rumble</p> 
            </div>
          </button>
          <button onClick={() => {event.preventDefault();window.open("https://twitter.com/Cobratate", "_blank");}} className='w-[300px]'>
            <div className='bg-[#212121] rounded-full flex justify-center items-center p-3 my-3 transition-all hover:scale-110'>
            <Image src={Twitter} className='w-4 mx-1'/>
              <p>Twitter</p> 
            </div>
          </button>
          <button onClick={() => {event.preventDefault();window.open("https://www.therealworldportal.com", "_blank");}} className='w-[300px]'>
            <div className='bg-[#212121] rounded-full flex justify-center items-center p-3 my-3 transition-all hover:scale-110'>
              <Image src={TRW} className='w-6 mx-1'/>
              <p>The Real World</p> 
            </div>
          </button>
      </div>
      <h1 className='text-[25px] selection:bg-black'>📬</h1>
  </div>
    </>
  )
}
