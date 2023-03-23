// Icons
import {FaTiktok} from 'react-icons/fa'
import {BsInstagram, BsYoutube} from 'react-icons/bs'

export default function Bio() {
    return (
        <div className='m-2 flex gap-4'>
            <div onClick={() => {event.preventDefault();window.open('https://www.tiktok.com/@sphe.exe', "_blank");}}>
                <FaTiktok size={20} />
            </div>
            <div onClick={() => {event.preventDefault();window.open('https://www.instagram.com/sphe.exe', "_blank");}}>
                <BsInstagram size={20} />
            </div>
            <div onClick={() => {event.preventDefault();window.open('https://www.youtube.com/@PositiveMusculinity', "_blank");}}>
                <BsYoutube size={20} />
            </div>
            
        </div>
    )
}