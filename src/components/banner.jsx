import heroPic1 from "../images/hero/hero-bg-1.png";
import heroPic2 from "../images/hero/hero-bg-2.png";
import heroPic3 from "../images/hero/hero-bg-3.png";
import heroPic4 from "../images/hero/hero-bg-4.png";
import heroPic5 from "../images/hero/hero-bg-5.png";
import heroPic6 from "../images/hero/hero-bg-6.png";
import heroPic7 from "../images/hero/hero-bg-7.png";
import heroPic8 from "../images/hero/hero-bg-8.png";
import heroPic9 from "../images/hero/hero-bg-9.png"

import { useTranslation } from "react-i18next";

const images = [heroPic1, heroPic2, heroPic3, heroPic4, heroPic5, heroPic6, heroPic7, heroPic8, heroPic9]

const description = [
    "Experience the ultimate cyberpunk thrills. Dive into neon-lit streets and immerse yourself in high-stakes fun and excitement.",
    "Step into a world where luck shines brighter than neon. Embrace the thrill, feel the rush, and win big at our exciting casino!",
    "Unlock the hidden treasures of tomorrow. Play and experience next-level gaming excitement like never before.",
    "Feel the electrifying pulse of big wins. High-voltage games and massive jackpots are waiting just for you.",
    "High-tech innovation meets high stakes. Dive into a world of futuristic wins and endless possibilities.",
    "Where the future meets fortune. Enjoy electrifying games and endless winning opportunities at every turn.",
    "Discover a casino experience like no other. Neon lights, big wins, and endless excitement are just a click away.",
    "The future of gaming is here. Join us for a chance to win big in a dazzling, neon-lit world of excitement.",
    "Feel the beat of big wins and let your luck shine through. Claim your fortune today and enjoy unparalleled excitement!",
    "A casino that redefines the meaning of winning. Enjoy thrilling games and electrifying jackpots like never before.",
    "Step into the electric atmosphere of our casino. Unleash your luck and enjoy big wins with every game you play.",
    "Where every spin is charged with excitement. Ignite your fortune, spin the reels, and play now for big rewards.",
    "Pulse-pounding action awaits at our casino. Spin the reels and let the neon lights guide you to victory and fortune."
]

const action = [
    "Claim Your Bonus!",
    "Try Your Luck!",
    "Spin to Win!",
    "Hit the Jackpot!",
    "Play and Win!",
    "Start Winning Now!",
    "Play for Rewards!",
    "Get Free Spins!",
    "Win Big Today!"
]

function getRandomBackground() {
    const totalImages = 8;
    const randomIndex = Math.floor(Math.random() * totalImages) + 1;
    return images[randomIndex];
}

function getRandomDescription(data) {
    const total = data.length - 1;
    const randomIndex = Math.floor(Math.random() * total) + 1;
    return data[randomIndex];
}

export default function Banner(brand) {
    const { t } = useTranslation();

    const backgroundImage = getRandomBackground();
    const desc = getRandomDescription(description)
    const desc2 = getRandomDescription(action)


    return (
        <div className="banner w-full">
            <div className="relative overflow-hidden rounded-3xl bg-gray-900 p-10 shadow-xl ">
                {brand.image === "-1" ? (
                    <img
                        alt=""
                        src={backgroundImage}
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                ) : (
                    <img
                        alt=""
                        src={images[brand.image]}
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                )
                }

                <div className="absolute inset-0 bg-gray-900/80 mix-blend-multiply" />
                <div className="relative mx-auto max-w-2xl lg:mx-0">
                    <figure>
                        <blockquote className="text-sm sm:text-lg font-bold text-white sm:text-xl sm:leading-8">
                            {brand.image === "-1" ? (
                                <div className="flex flex-row items-center">
                                    <img className="banner-logo rounded" src={brand.logo} alt="" />
                                    <h1 className="neon-blue text-lg sm:text-3xl">
                                        {t(brand.brand)}
                                    </h1>
                                </div>
                            ) : (
                                <h1 className="neon-blue  text-lg sm:text-3xl ">
                                    {t(brand.brand)}
                                </h1>
                            )

                            }
                            <h5 className="text-sm sm:text-xl ">{t(desc)}</h5>

                            {brand.image === "-1" ? (
                                <h4 className="neon-pink text-lg sm:text-2xl fix-height">
                                    <span> {brand.bonus} </span>
                                </h4>
                            ) : (
                                <h4 className="neon-pink text-lg sm:text-2xl mb-10">
                                    <span> {t(desc2)} </span>
                                </h4>
                            )
                            }



                        </blockquote>
                        {brand.image === "-1" ? (
                            <div className="flex flex-row items-center justify-center">
                                <a
                                    href={brand.link}
                                    target="blank_"
                                    className="inline-flex items-center rounded-md bg-blue-400/10 px-5 py-2.5 text-sm sm:text-lg font-medium text-blue-400 ring-1 ring-inset ring-blue-400 hover:bg-blue-400/70 hover:text-white"
                                >
                                    Try your luck!
                                </a>
                            </div>
                        ) : (
                            <div className="flex flex-row items-center justify-center">
                                <a
                                    href="http://topbon.us"
                                    target="blank_"
                                    className="inline-flex items-center rounded-md bg-blue-400/10 px-5 py-2.5 text-sm sm:text-xl font-black text-pink-400 ring-1 ring-inset ring-pink-400 hover:bg-pink-400/70 hover:text-white"
                                >
                                    Try your luck!
                                </a>
                            </div>
                        )
                        }


                    </figure>
                </div>
            </div>
        </div>
    )
}
