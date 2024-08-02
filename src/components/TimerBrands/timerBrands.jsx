import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import { useTranslation } from "react-i18next";
import img from "../../images/hero/about.jpg";

import CountdownTimer from './countdownTimer';


function TimerBrands({
    newUrl,
    ipData,
    ipDataCode,
    currentLanguage,
    country,
    source,
    selectedCountry,
    setSelectedCountry,
}) {
    const { t } = useTranslation();

    const [loading, setLoading] = useState(true);
    const [otherData, setOtherData] = useState([]);
    const [visibleBrands, setVisibleBrands] = useState(8);
    const [isMobile, setIsMobile] = useState(false);

    const DAYS_IN_MS = 1 * 12 * 60 * 60 * 1000;
    const NOW_IN_MS = new Date().getTime();

    const dateTime = NOW_IN_MS + DAYS_IN_MS;

    const buttonText = (window.innerWidth <= 600) ? "Play" : "Play Now"


    const handleShowMore = () => {
        setVisibleBrands((prevVisibleBrands) => prevVisibleBrands + 8);
    };

    const apiOld = "https://bonusnumber1.com/api/brandsNew/read.php";
    const apiNew = "https://bonusnumber1.com/api/brandsNew2/read.php";
    const api1043 = "https://bonusnumber1.com/api/brandsNew3/read.php";
    const api1044 = "https://bonusnumber1.com/api/brandsNew4/read.php";

    function shuffleArray(array) {
        const shuffledArray = array.slice();
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [
                shuffledArray[j],
                shuffledArray[i],
            ];
        }
        return shuffledArray;
    }

    useEffect(() => {
        // Добавьте обработчик для изменения размера окна
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 991);
        };

        // Вызовите функцию обработчика при монтировании компонента
        handleResize();

        // Добавьте слушатель события изменения размера окна
        window.addEventListener("resize", handleResize);

        // Очистите слушатель события при размонтировании компонента
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        const geo = selectedCountry.toUpperCase();

        const fetchData = async () => {
            try {
                let url;
                switch (source) {
                    case "partner1039":
                        url = apiNew; // Для partner1039
                        break;
                    case "partner1043":
                        url = api1043; // Для partner1043
                        break;
                    case "partner1044":
                        url = api1044; // Для partner1044
                        break;
                    default:
                        url = apiOld; // Для всех остальных случаев
                }

                const res = await fetch(url);
                if (res.ok) {
                    const responseData = await res.json();
                    // const dataArray = Object.values(responseData);

                    let filteredDataOther = [];

                    if (geo) {
                        filteredDataOther = responseData.brandsNew.filter(
                            (rowData) =>
                                rowData.GEO === geo &&
                                rowData["CurrentStatus"] === "Ongoing" &&
                                rowData["CasinoBrand"] !== "Mirax (FS)" &&
                                rowData["CasinoBrand"] !== "Katsubet (FS)" &&
                                rowData["CasinoBrand"] !== "7Bit (FS)" &&
                                rowData["FirstPriority"] === "1"
                        );
                    } else {
                        filteredDataOther = responseData.brandsNew.filter(
                            (rowData) =>
                                rowData.GEO === ipDataCode &&
                                rowData["CurrentStatus"] === "Ongoing" &&
                                rowData["CasinoBrand"] !== "Mirax (FS)" &&
                                rowData["CasinoBrand"] !== "Katsubet (FS)" &&
                                rowData["CasinoBrand"] !== "7Bit (FS)" &&
                                rowData["FirstPriority"] === "1"
                        );
                    }
                    if (geo === "ALL") {
                        filteredDataOther = responseData.brandsNew.filter(
                            (rowData) =>
                                rowData.GEO === geo &&
                                rowData["CurrentStatus"] === "Ongoing" &&
                                rowData["CasinoBrand"] !== "Mirax (FS)" &&
                                rowData["CasinoBrand"] !== "Katsubet (FS)" &&
                                rowData["CasinoBrand"] !== "7Bit (FS)" &&
                                rowData["Segment2"] !== ""

                        );
                    }

                    // Перемешиваем данные перед отображением
                    setOtherData(shuffleArray(filteredDataOther));
                    setLoading(false);

                    // Если нет брендов, вызывать setSelectedCountry
                    if (filteredDataOther.length === 0) {
                        setSelectedCountry("all");
                    }
                } else {
                    console.error("Failed to fetch data:", res.status);
                }
            } catch (error) {
                console.error("An error occurred:", error);
                setLoading(false);
            }
        };

        if ((ipDataCode && currentLanguage) || (geo && currentLanguage)) {
            fetchData();
        }
    }, [ipDataCode, currentLanguage, selectedCountry, source]);

    return (
        <div id="table" className="table-section container mb-10">
            {otherData.length > 0 && (
                <div>
                    <div className="row align-items-center  mb-6">
                        <div className="col-12 col-lg-12 mb-lg-0">
                            <h2 className="display-1 font-black heading" data-aos="fade-up">{t("Player’s Choice")}</h2>
                        </div>
                    </div>
                    <div className=" rounded-3xl bg-gray-900 py-1" data-aos="fade-up">
                        <div className="px-4 sm:px-6 lg:px-8">
                            {/* <div className="sm:flex sm:items-center">
                            <div className="sm:flex-auto">
                                <h1 className="text-base font-semibold leading-6 text-gray-700">Top offers</h1>
                            </div>
                        </div> */}
                            <div className="-mx-4 sm:-mx-0">
                                <table className="min-w-full divide-y divide-gray-300">
                                    <thead>
                                        <tr>
                                            <th scope="col" className="py-3.5 pl-4 pr-3 text-left sm:text-xl font-semibold text-white sm:pl-0">
                                                Brand
                                            </th>
                                            <th scope="col" className="py-3.5 pl-4 pr-3 text-left sm:text-xl font-semibold text-white sm:pl-0">
                                                <span className="sr-only">BrandName</span>

                                            </th>
                                            <th
                                                scope="col"
                                                className="hidden px-3 py-3.5 text-left sm:text-xl font-semibold text-white lg:table-cell"
                                            >
                                                Bonus
                                            </th>
                                            <th scope="col" className="py-3.5 pl-4 pr-3 text-left sm:text-xl font-semibold text-white sm:pl-0">
                                                <span className="sr-only">BrandName</span>

                                            </th>

                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-500 bg-gray-900/60 rounded">
                                        {otherData.slice(0, 8).map((rowData) => (
                                            <tr key={rowData["CasinoBrand"]}>
                                                <td className="py-4 pl-4 pr-3 text-sm sm:text-xl font-medium  text-white sm:pl-0">
                                                    <div className="h-11 w-11 flex-shrink-0">
                                                        <img alt="" src={rowData["LinkImg"]} className="h-11 w-11 rounded" />
                                                    </div>
                                                </td>
                                                <td className="py-4 pl-4 pr-3 text-sm sm:text-xl text-white sm:pl-0 tracking-widest">
                                                    {rowData["CasinoBrand"]}
                                                    <dl className="font-normal sm:hidden">
                                                        <dd className="text-sm sm:text-xl text-white ">{rowData["OurOfferContent"]}</dd>
                                                    </dl>
                                                </td>
                                                <td className="hidden px-3 py-4 text-sm sm:text-xl text-white  sm:table-cell">{rowData["OurOfferContent"]}</td>
                                                <td className=" pl-3 pr-4 text-right text-sm sm:text-xl font-medium sm:pr-0">
                                                    <a href={rowData["GoBig"] + newUrl + "L_cyber_players_choise"} target="blank_"
                                                        className="inline-flex items-center text-center rounded-md bg-blue-400/10 px-3 sm:px-5 py-2.5 text-sm sm:text-xl font-medium text-blue-400 ring-1 ring-inset ring-blue-400 hover:bg-blue-400/70 hover:text-white">

                                                        {t(buttonText)}<span className="sr-only">,{rowData["CasinoBrand"]}</span>
                                                    </a>
                                                </td>

                                            </tr>
                                        ))}



                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div >


    );
}

export default TimerBrands;
