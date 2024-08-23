import type { Metadata } from 'next'
import '../globals.css'
import { Playfair_Display } from 'next/font/google'
import Image from 'next/image';
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: 'JobFindr | Auth',
  description: 'Authentication pages',
}

const headerFont = Playfair_Display({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-accent-bg-1 m-0 p-0'>
        <main className='flex flex-row gap-0 justify-center items-start radial-gradient'>
            <section className='flex-grow lg:w-1/2 w-full h-screen flex flex-col max-container'>
                <div className={'text-xxlarge text-accent-color-1 font-bold max-md:text-center'}>
                    <h3 className={`${headerFont.className}`}>JobFindr</h3>
                </div>
                {children}
            </section>
            <section className='lg:flex hidden flex-grow lg:w-1/2 w-0 lg:h-screen h-0 bg-accent-color-1 items-start relative flex-col justify-between py-20 px-12'>
                <div className='p-12 bg-accent-bg-1 flex absolute end-0 rounded-bl-2xl top-0'></div>

                <div className={'flex flex-col gap-3'}>
                  <h3 className={`text-6xl text-accent-bg-1 ${headerFont.className}`}>JobFindr</h3>
                  <p className='text-accent-bg-1-50 text-medium'>Your Gateway to Dream Careers – Discover, Apply, Succeed.</p>
                </div>
                <div className='text-gray-200 italic'>
                - Unlock your career potential with JobFindr! Our app scours the web to bring you the best job listings, tailored to your skills and preferences. Seamlessly search, apply, and track your job applications all in one place. Discover your dream job today with JobFindr – your ultimate job hunting companion!
                </div>
                <div className='w-full pe-12'>
                  <div className="w-full relative">
                    <div className='overflow-hidden absolute shadow-md top-[-25px] end-[-25px] w-[50px] h-[50px] bg-accent-bg-1 flex justify-center items-center rounded-full'>
                      <Image src={"/assets/icons/quote.jpg"} alt='quote' width={30} height={30} className='object-contain'></Image>
                    </div>
                    <div className={'bg-secondary-lavender w-full px-6 py-8 rounded-3xl'}>
                      <h3 className='font-bold text-xl'>Get Available Jobs</h3>
                      <p className='text-small text-gray-600'>Discover your dream job with JobFindr! Our app finds the best job listings tailored to you. Search, apply, and track applications effortlessly. Start your career journey with JobFindr today!</p>
                    </div>
                  </div>
                </div>
            </section>
        </main>
        <Toaster />
      </body>
    </html>
  )
}
