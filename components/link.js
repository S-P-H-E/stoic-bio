import Image from "next/image";
import { useSpring, animated, config } from '@react-spring/web';

export default function Link({Logo, Name, Link}) {
      // Links Animation
      const linksAnimation = useSpring({
        from: { opacity: 0, transform: 'translateY(130px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
        delay: 50,
      });

    return (
        <animated.button style={linksAnimation} onClick={() => {event.preventDefault();window.open(Link, "_blank");}} className='w-full'>
            <div className='border border-black shadow-xl rounded-full flex justify-center items-center p-3 my-3 transition-all lg:hover:scale-110 lg:hover:shadow-2xl'>
              {/* <Image src={Logo} className='w-4 mx-1'/> */}
              <p>{Name}</p>
            </div>
          </animated.button>
    );
}