import Image from 'next/image'
import img from '../public/hero.jpg'

export default function Header({ scrollHandler }) {
  return (
    <header className="relative">
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
      <div className="mx-auto">
        <div className="relative shadow-xl sm:overflow-hidden">
          <div className="absolute inset-0">
            <Image
              priority
              fill
              className="h-full w-full object-cover"
              src={img}
              placeholder="blur"
              alt="Coffee grinder"
            />
            <div className="absolute inset-0 bg-orange-100 mix-blend-multiply" />
          </div>
          <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
            <p className="relative left-0 right-0 mx-auto mt-5 max-w-xl text-center font-semibold uppercase tracking-wide text-orange-600 text-opacity-0">
              The Student Government
            </p>
            <h1 className="mt-1 text-center font-bold uppercase text-gray-900 sm:text-5xl sm:tracking-tight lg:text-7xl">
              <span className="text-white hidden text-opacity-0">Life is better with</span>
              <span className="block text-orange-500 text-opacity-0">baddam - saxena</span>
              <span className="block text-orange-500"></span>
            </h1>

            <div className="flex mx-auto mt-10 max-w-xs sm:flex sm:max-w-none sm:justify-center gap-2">
              <button
                className="items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-orange-600 shadow-sm hover:bg-orange-100 sm:px-8"
                // onClick={scrollHandler}
              >
                <a href="https://campuslink.uc.edu/submitter/election/start/579743" target="_blank">VOTE</a>
              </button>
              <button
                className="items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-orange-600 shadow-sm hover:bg-orange-100 sm:px-8"
                // onClick={scrollHandler}
              >
                <a href="https://www.instagram.com/baddamsaxena/" target="_blank">INSTAGRAM</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
