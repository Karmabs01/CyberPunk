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
    "The week's biggest jackpot awaits! With a prize pool that could change your life, take your chance to hack the system and hit the ultimate payout.",
    "Claim your exclusive welcome bonus! Double your credits and dive into a universe of electrifying games.",
    "Join VIP High-Roller Club. Enjoy next-level rewards, instant withdrawals, and your own personal guide through the cyber world.",
    "Experience the thrill of Live Casino, where you can interact with real dealers in a high-tech setting.",
    "Play and win big today! Cyber slots and massive jackpots await you. Every spin brings you closer to the big win.",
    "Unleash your luck at the cyber tables. Bet big, win bigger. Experience the ultimate thrill of winning.",
    "Level up your gaming experience! Exclusive rewards for loyal players. Every game brings you closer to greatness."
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
let lastIndex = null;

function getRandomDescription(data) {
    const total = data.length;
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * total);
    } while (randomIndex === lastIndex);
    
    lastIndex = randomIndex;
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
                                <h1 className="neon-blue text-lg sm:text-3xl">
                                    {t(brand.brand)}
                                </h1>
                            )

                            }
                            <h5 className="text-sm sm:text-xl fix-height">{t(desc)}</h5>

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
                                    {t("Play Now")}
                                </a>
                            </div>
                        ) : (
                            <div className="flex flex-row items-center justify-center">
                                <a
                                    href={brand.link}
                                    target="blank_"
                                    className="inline-flex items-center rounded-md bg-blue-400/10 px-5 py-2.5 text-sm sm:text-xl font-black text-pink-400 ring-1 ring-inset ring-pink-400 hover:bg-pink-400/70 hover:text-white"
                                >
                                    {t("Try Your Luck!")}
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
