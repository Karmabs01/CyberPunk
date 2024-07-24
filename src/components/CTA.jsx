import heroPic from "../images/hero/about.jpg";
import { useTranslation } from "react-i18next";

export default function CTA() {
  const { t } = useTranslation();

  return (
    <div className="container CTA mb-10">
      <div className=" rounded-3xl relative bg-gray-900 ">
        <div className="relative rounded-3xl sm:rounded-l-3xl h-80 overflow-hidden bg-gray-900 p-3.5 lg:p-0 md:p-0 md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/3">
          <img
            alt=""
            src={heroPic}
            className="h-full w-full object-cover rounded-3xl"
            data-aos="fade-right"
          />

        </div>
        <div className="relative mx-auto max-w-7xl py-10 " data-aos="fade-left">
          <div className="pl-6 pr-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-2/3 lg:pl-24 lg:pr-0 xl:pl-32">
            <h2 className="text-base font-semibold leading-7 text-indigo-400">Unlock a Universe of Endless Possibilities</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Discover More Brands, Articles, Tutorials, and Updates</p>
            <p className="mt-6 text-base leading-7 text-gray-300">
              Our main site offers an extensive collection of top-tier brands, in-depth articles, and comprehensive tutorials to enhance your gaming experience.
              Stay updated with the latest news and updates in the world of gaming.
            </p>
            <div className="mt-8 flex flex-row items-center justify-center">
              {/* <a
                href="https://topbon.us"
                className="inline-flex rounded-md bg-white/10 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Enter the Realm
              </a> */}

              <a target="_blank" href="https://topbon.us">
                <button className="cybr-btn"> {t("Follow us")}<span aria-hidden>_</span>
                  <span aria-hidden className="cybr-btn__glitch">{t("Let's go")}</span>
                  <span aria-hidden className="cybr-btn__tag">R25</span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}