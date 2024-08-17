import LogoTED from '../assets/Icons/ted-logo.svg'
import LinkedIn from '../assets/Icons/linkedin.svg'
import Twitter from '../assets/Icons/twitter.svg'
import Tiktok from '../assets/Icons/tiktok.svg'
import Instagram from '../assets/Icons/instagram.svg'

export default function Footer() {
  return (
    <footer className='mx-5 my-4 flex justify-between'>
      <div>
        <img src={LogoTED} className='w-[140px]'></img>
      </div>
      <div>
        <div className='grid grid-cols-2'>
          <img src={LinkedIn} className='w-[15px]'></img>
          <img src={Instagram} className='w-[15px]'></img>
          <img src={Tiktok} className='w-[15px]'></img>
          <img src={Twitter} className='w-[15px]'></img>
        </div>
      </div>
    </footer>
  );
}