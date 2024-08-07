import { Button } from '@/components/ui/button';
import { Playfair_Display } from 'next/font/google';
import Image from 'next/image'
import Link from 'next/link';

const headerFont = Playfair_Display({ subsets: ["latin"] });

export default function Page() {
  return (
    <main className='h-screen w-screen relative flex items-center justify-center bg-accent-color-1'>
      <Link href={"/register"}>
        <Button className='absolute top-0 end-0 m-5'>Create Account</Button>
      </Link>
      <div className='flex flex-col relative items-center px-4'>
        <div className={'lg:text-8xl md:text-6xl text-4xl text-white font-bold max-md:text-center'}>
          <h3 className={`${headerFont.className}`}>JobFindr</h3>
        </div>
        <p className='md:text-2xl text-xl text-gray-300 max-w-[800px] text-center'>The ultimate Job scraping platform. Get your desired Jobs Now with ease and make your way to success.</p>
        <p className='text-white mt-3 font-bold lg:text-lg'>It's Never Been Easier</p>
        <div className='flex flex-row md:gap-5 gap-3 mt-8'>
          <Link href={"/register"}>
            <Button className='md:px-8 rounded-3xl md:text-xl md:py-6 bg-white text-accent-color-1 transition duration-200 hover:translate-y-[-10px]'>Get Started</Button>
          </Link>
          <Link href={"/contact-us"}>
            <Button className='md:px-8 rounded-3xl md:text-xl md:py-6 border-white text-white border-2 bg-transparent transition duration-200 hover:translate-y-[-10px]' variant={"outline"}>Contact Us</Button>
          </Link>
        </div>
      </div>
      <div className='w-screen absolute bg-black bottom-0 start-0 p-5 text-center text-slate-200'>
        <span>All Rights Reserved. JobFindr 2024</span>
      </div>
      {/* <Image src={'/assets/images/landing.jpg'} alt='Landing Bg' width={100} height={100} className='w-screen h-screen object-cover absolute top-0 left-0'></Image> */}
    </main>
  )
}
