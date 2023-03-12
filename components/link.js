import Image from "next/image";

export default function Link({Logo, Name, Link}) {
    return (
        <button onClick={() => {event.preventDefault();window.open(Link, "_blank");}} className='w-[300px]'>
            <div className='border border-black shadow-xl rounded-full flex justify-center items-center p-3 my-3 transition-all lg:hover:scale-110 lg:hover:shadow-2xl'>
              {/* <Image src={Logo} className='w-4 mx-1'/> */}
              <p>{Name}</p>
            </div>
          </button>
    );
}