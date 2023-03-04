import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  const [link, setLink] = useState('')

  const makeRoomUid = () => {
    let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    let randstr = ''
    let n = 30
    for (let i = 0; i < n; i++) {
      randstr += str[~~(Math.random() * str.length)]
    }
    setLink(randstr)
  }

  useEffect(() => {
    makeRoomUid()
  }, [])

  return (
    <>
      <section className='w-full px-8 text-gray-700 bg-white'>
        <div className='container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl'>
          <div className='relative flex flex-col md:flex-row'>
            <Link
              href='/'
              className='flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0'
            >
              <span className='mx-auto text-xl font-black leading-none text-gray-900 select-none'>
                forPlapoApps<span className='text-indigo-600'>.</span>
              </span>
            </Link>
          </div>

          <Link href={`/rooms/${link}`}>
            <p className='inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 cursor-pointer'>
              Play start
            </p>
          </Link>
        </div>
      </section>

      <section className='px-2 py-32 bg-white md:px-0'>
        <div className='container items-center max-w-6xl px-8 mx-auto xl:px-5'>
          <div className='flex flex-wrap items-center sm:-mx-3'>
            <div className='w-full md:w-1/2 md:px-3'>
              <div className='w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0'>
                <h1 className='text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl'>
                  <span className='block xl:inline'>{"Let's play"}</span>
                  <span className='block text-indigo-600 xl:inline'>PLANNIG PORKER</span>
                </h1>
                <p className='mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl'>
                  Startups First.
                  <br />
                  Be a Talent.
                  <br />
                  The Team.
                </p>
                <div className='relative flex flex-col sm:flex-row sm:space-x-4'>
                  <a
                    href={`/rooms/${link}`}
                    className='flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-indigo-600 rounded-md sm:mb-0 hover:bg-indigo-700 sm:w-auto'
                  >
                    Try It Free
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='w-5 h-5 ml-1'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    >
                      <line x1='5' y1='12' x2='19' y2='12'></line>
                      <polyline points='12 5 19 12 12 19'></polyline>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className='w-full md:w-1/2'>
              <Image
                src='https://cdn.devdojo.com/images/november2020/hero-image.jpeg'
                alt='Landscape picture'
                width={1200}
                height={800}
              />
            </div>
          </div>
        </div>
      </section>

      <section className='h-auto bg-white'>
        <div className='px-10 py-24 mx-auto max-w-7xl'>
          <div className='w-full mx-auto text-left md:text-center'>
            <h1 className='mb-6 text-5xl font-extrabold leading-none max-w-5xl mx-auto tracking-normal text-gray-900 sm:text-6xl md:text-6xl lg:text-7xl md:tracking-tight'>
              The
              <span className='w-full text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 lg:inline'>
                Number One Source
              </span>
              for
              <br className='lg:block hidden' />
              team development
            </h1>
            <p className='px-0 mb-6 text-lg text-gray-600 md:text-xl lg:px-24'>
              Calculate man-hours. Create new future.
            </p>
          </div>
        </div>
      </section>

      <section className='text-gray-700 bg-white body-font'>
        <div className='container flex flex-col items-center px-8 py-8 mx-auto max-w-7xl sm:flex-row'>
          <Link href='/'>
            <p className='text-xl font-black leading-none text-gray-900 select-none logo cursor-pointer'>
              forPlapoApps
            </p>
          </Link>
          <p className='mt-4 text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l sm:border-gray-200 sm:mt-0'>
            © 2022 forPlapoApps
          </p>
          <span className='inline-flex justify-center mt-4 space-x-5 sm:ml-auto sm:mt-0 sm:justify-start'>
            <a
              href='https://github.com/orgs/forPlapoApps'
              className='text-gray-400 hover:text-gray-500'
            >
              <span className='sr-only'>GitHub</span>
              <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24' aria-hidden='true'>
                <path
                  fillRule='evenodd'
                  d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
                  clipRule='evenodd'
                ></path>
              </svg>
            </a>
          </span>
        </div>
      </section>
    </>
  )
}
