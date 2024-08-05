import { Playfair_Display } from 'next/font/google';
import Image from 'next/image'

const headerFont = Playfair_Display({ subsets: ["latin"] });

export default function Page() {
  return (
    <main className='h-screen w-screen relative flex items-center justify-center bg-accent-color-1'>
      <div className='flex flex-col'>
        <div className={'text-xxlarge text-accent-color-1 font-bold max-md:text-center'}>
          <h3 className={`${headerFont.className}`}>JobFindr</h3>
        </div>
      </div>
      {/* <Image src={'/assets/images/landing.jpg'} alt='Landing Bg' width={100} height={100} className='w-screen h-screen object-cover absolute top-0 left-0'></Image> */}
    </main>
  )
}
