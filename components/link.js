import Image from "next/image";

export default function Link({Logo, Name, Link}) {
    return (
        <button onClick={() => {event.preventDefault();window.open(Link, "_blank");}} className='w-[300px]'>
            <div className='bg-[#212121] rounded-full flex justify-center items-center p-3 my-3 transition-all hover:scale-110'>
              <Image src={Logo} className='w-4 mx-1'/>
              <p>{Name}</p>
            </div>
          </button>
    );
}