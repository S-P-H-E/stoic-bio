import Image from "next/image";
import { useSpring, animated, config } from '@react-spring/web';

export default function Link({Logo, Name, Link}) {

  return (
      <button onClick={() => {event.preventDefault();window.open(Link, "_blank");}} className='w-full'>
          <div className='border border-black shadow-xl rounded-full flex justify-center items-center p-3 my-3 transition-all lg:hover:scale-110 lg:hover:shadow-2xl'>
            <p>{Name}</p>
          </div>
      </button>
  );
}