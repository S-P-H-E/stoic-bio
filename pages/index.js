import Head from 'next/head'
import Image from 'next/image'
import Profile from '@/public/images/profile.jpg'
import Link from '@/components/Links.js'
import { MdEmail } from 'react-icons/md'
import { AiFillEye } from 'react-icons/ai'
import { useEffect, useMemo, useState } from 'react'
import { FloatButton, Tooltip } from 'antd';
import Bio from '@/components/Bio'
import EmailList from '@/components/EmailList'

export default function Home() {
  const [arrow, setArrow] = useState('Show');

  const text = <span>EMAIL ME</span>;

  const mergedArrow = useMemo(() => {
      if (arrow === 'Hide') {
        return false;
      }
      if (arrow === 'Show') {
        return true;
      }
      return {
        pointAtCenter: true,
      };
  }, [arrow]);

  return (
    <>
      <Head>
        <title>S T O I C</title>
        <meta name="description" content="Check out my Social Media Accounts" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Float */}
      <Tooltip placement="left" title={text} arrow={mergedArrow} color='blue'>
        <FloatButton 
          icon={<MdEmail />}
          type='primary'
          onClick={() => {
          window.location.href = "mailto:sphe.g.personal@gmail.com";
        }}/>
      </Tooltip>

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
        <Link Name={'Join my discord community'} Link={"https://stoic-email-list.vercel.app/"}/>
        <Link Name={'Get editing presets and packs'} Link={"https://payhip.com/b/pQZHf"}/>
      </div>

      {/* <h1 className='text-[25px] selection:bg-transparent cursor-default'>🔗</h1> */}
        <div className='border px-2 rounded-full flex justify-center items-center text-[#939393] border-[#939393] gap-1'>
          <AiFillEye />
          <h1>10k+</h1>
        </div>
  </div>
    </>
  )
}
