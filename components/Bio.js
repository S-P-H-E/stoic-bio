// Icons
import {FaTiktok} from 'react-icons/fa'
import {BsInstagram, BsYoutube} from 'react-icons/bs'

export default function Bio() {
    return (
        <div className='m-2 flex gap-4 border-4 border-[#1A1A1A] text-[#939393] py-3 px-2 rounded-full'>
            <div onClick={() => {event.preventDefault();window.open('https://www.tiktok.com/@sphe.exe', "_blank");}} className='border border-black px-2 rounded-full'>
                <FaTiktok size={20} className='transition-all hover:text-white cursor-pointer'/>
            </div>
            <div onClick={() => {event.preventDefault();window.open('https://www.instagram.com/sphe.exe', "_blank");}} className='border border-black px-2 rounded-full'>
                <BsInstagram size={20} className='transition-all hover:text-white cursor-pointer'/>
            </div>
            <div onClick={() => {event.preventDefault();window.open('https://www.youtube.com/@PositiveMusculinity', "_blank");}} className='border border-black px-2 rounded-full'>
                <BsYoutube size={20} className='transition-all hover:text-white cursor-pointer'/>
            </div>
            
        </div>
    )
}