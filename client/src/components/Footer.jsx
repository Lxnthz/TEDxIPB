import LogoTED from '../assets/Icons/ted-logo.svg';
import LinkedIn from '../assets/Icons/linkedin.svg';
import Twitter from '../assets/Icons/twitter.svg';
import Tiktok from '../assets/Icons/tiktok.svg';
import Instagram from '../assets/Icons/instagram.svg';

export default function Footer() {
  return (
    <footer className='my-4 flex justify-between items-center md:mx-5 lg:mx-9 xl:mx-12'> 
      <div className='flex flex-col gap-y-1'>
        <img src={LogoTED} className='w-[130px] md:w-[200px]' alt="TEDx Logo" />
        <p className='hidden md:flex flex-col text-white font-monts text-xs'>
          <span>©️2024 All rights reserved</span>
          <span>This independent TEDx event is operated under the</span>
          <span>license of TED</span> 
        </p>
      </div>
      <div className='flex space-x-4'>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <img src={LinkedIn} className='w-[15px] md:w-[20px]' alt="LinkedIn" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <img src={Instagram} className='w-[15px] md:w-[20px]' alt="Instagram" />
        </a>
        <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
          <img src={Tiktok} className='w-[15px] md:w-[20px]' alt="Tiktok" />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <img src={Twitter} className='w-[15px] md:w-[20px]' alt="Twitter" />
        </a>
      </div>
    </footer>
  );
}
