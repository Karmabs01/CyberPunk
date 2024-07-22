import heroPic from "../images/hero/about.jpg";

export default function CTA() {
    return (
      <div className="container rounded-3xl relative bg-gray-900 CTA mb-10">
        <div className="relative rounded-3xl sm:rounded-l-3xl h-80 overflow-hidden bg-gray-900 md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
          <img
            alt=""
            src= {heroPic}
            className="h-full w-full object-cover"
             data-aos="fade-right"
          />
         
        </div>
        <div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40"  data-aos="fade-left">
          <div className="pl-6 pr-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32">
            <h2 className="text-base font-semibold leading-7 text-indigo-400">Unlock a Universe of Endless Possibilities</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Discover More Brands, Articles, Tutorials, and Updates</p>
            <p className="mt-6 text-base leading-7 text-gray-300">
            Step beyond the neon glow and discover a world full of casino thrills and valuable insights. 
            Our main site offers an extensive collection of top-tier brands, in-depth articles, and comprehensive tutorials to enhance your gaming experience. 
            Stay updated with the latest news and updates in the world of gaming. Join us now and unlock a universe of endless possibilities and big wins. 
            Click below to start your adventure!
            </p>
            <div className="mt-8">
              <a
                href="https://topbon.us"
                className="inline-flex rounded-md bg-white/10 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Enter the Realm
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }